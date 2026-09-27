---
slug: wdbc-breast-cancer
title: "Diagnosing Breast Cancer from Fine-Needle Aspirates: A Clinical Prediction Model"
date: 2026-09-27
summary: >-
  A malignancy model for the Wisconsin Diagnostic Breast Cancer data, built
  and validated to current clinical-prediction standards: bootstrap internal
  validation, calibration, decision curves at a clinically chosen biopsy
  threshold, sample size, stability analysis, and an honest comparison with
  the original 1990s work.
category: ml
featured: false
tags:
  - machine-learning
  - clinical-prediction
  - logistic-regression
  - calibration
  - decision-curve-analysis
  - python
---

## About this project

The Wisconsin Diagnostic Breast Cancer dataset is one of the most-used benchmarks in machine learning, and one of the most over-claimed: accuracies of 99% or more are common, often from a single train/test split and sometimes from models tuned on the test set. This project asks a more useful question: what can honestly be said about a model for this data, if it is built and validated the way clinical prediction models are supposed to be? This is the second version of the analysis. It follows the methodological and clinical literature throughout: TRIPOD+AI reporting, internal validation by bootstrap, calibration, decision curve analysis at a biopsy threshold taken from clinical practice, minimum sample size, and model stability.

## Intended use

The setting is the evaluation of a breast mass by fine-needle aspiration. An operator outlines 10–20 cell nuclei on a digitised image of the slide, software measures the nuclei, and the model turns these measurements into a predicted probability of malignancy. The model is meant to support the cytology part of the triple test (clinical examination, imaging and cytology), not to replace the cytopathologist or the other two parts. The triple test is already very sensitive: it detects 99.6% of cancers when any part is positive [Irwig et al. 2002].

## The data

The dataset has 569 fine-needle aspirates of breast masses, collected by Dr William H. Wolberg at the University of Wisconsin, Madison, and donated in November 1995: 212 malignant (37%) and 357 benign. Software measured ten properties of each nucleus, such as radius, texture, concavity and symmetry, and each property is reported three ways: the mean over nuclei, its standard error, and the "worst" value (the mean of the three largest). That gives 30 features. There are no missing values and no duplicate rows. The class imbalance was not corrected, because resampling distorts predicted probabilities.

The outcome is the malignant or benign diagnosis recorded in the original study. In the group's later prospective series, benign diagnoses were confirmed by biopsy or by one year of follow-up [Wolberg et al. 1997], but the dataset documentation does not say how the 569 labels were established. No patient characteristics such as age or ethnicity are available.

The classes are close to separable. A single feature, `perimeter_worst`, already separates them with an AUC of 0.975. The features are also highly redundant: radius, perimeter and area are close to the same measurement, and 21 pairs of features correlate above |r| = 0.9.

## The model

The model is an L2-penalised logistic regression on the log-transformed, standardised features, with the penalty tuned by cross-validation. Logistic regression is the natural choice here. A systematic review found no performance benefit of machine learning over logistic regression for clinical prediction models [Christodoulou et al. 2019]. A logistic model gives probabilities that can be calibrated, and it can be written out in full. Three models were built: one on all 30 features, one on the three features used by the original study, and one on three features chosen by forward selection.

## Is 569 cases enough?

The minimum sample size was checked with the criteria of Riley et al. [2019, 2020, 2021]: the sample must be large enough to limit overfitting (an expected shrinkage factor of at least 0.9), to keep the gap between apparent and adjusted explained variance small, and to estimate the overall risk to within ±5 percentage points. The answer depends on how well the model is expected to discriminate:

| Assumption | 30 predictors need | 3 predictors need |
| --- | --- | --- |
| Conservative default (Riley) | 2,303 | 360 |
| Expected AUC 0.95 | 550 | 360 |
| Expected AUC 0.99 | 479 | 360 |

The original studies imply an AUC of at least 0.95. On that assumption, 569 cases are just enough for 30 predictors and comfortably enough for 3. Under the conservative default, the 30-feature model would be too large for the data, and it relies on the tuned L2 penalty to control overfitting. The internal validation below shows that the penalty does this job.

## Validating it properly

With 569 cases, setting aside a test set wastes data and gives a noisy answer: a 20% test set holds only about 42 cancers. Following current guidance [Steyerberg et al. 2001; Harrell et al. 1996; Collins et al. 2024], each model was developed on all 569 cases. Its optimism was then estimated by repeating the entire procedure, including the penalty tuning and the feature selection, on 500 bootstrap samples and on 20 repeats of 10-fold cross-validation.

| Model | AUC (apparent → corrected) | Brier score | Accuracy | Calibration slope | Calibration intercept |
| --- | --- | --- | --- | --- | --- |
| Full model, 30 features | 0.998 → 0.996 | 0.018 | 98.0% | 1.08 ± 0.08 | +0.08 |
| Original-study 3 features | 0.993 → 0.993 | 0.022 | 97.7% | 1.04 ± 0.03 | 0.00 |
| Forward-selected 3 features | 0.992 → 0.990 | 0.024 | 97.1% | 0.96 ± 0.06 | +0.03 |

_Brier score and accuracy are optimism-corrected. Calibration slope and intercept are the mean ± SD over 20 repeats of 10-fold cross-validation; the ideal values are 1 and 0. A slope slightly above 1 means slightly conservative, not overconfident, predictions._

A good AUC isn't enough for a model that outputs a risk: a predicted 20% should mean about 20%. Calibration was measured by the calibration slope and intercept, and by a flexible calibration curve [Van Calster et al. 2016, 2019]. All three models are well calibrated. One technical point: because the classes are nearly separable, the calibration slope has no stable estimate in some bootstrap samples (it exceeded 3 in about one sample in ten, and reached 72 in one). The bootstrap is still fine for the AUC and Brier score, but calibration was taken from repeated cross-validation, which gives stable estimates, as Collins et al. [2024] also recommend.

![Flexible calibration curves from out-of-fold predictions, with 95% bootstrap bands. All three curves lie close to the diagonal. The rug shows that most predictions are close to 0 or 1, which is why the bands are wide at intermediate probabilities.](/uploads/projects/wdbc-calibration.png "Figure 1: Flexible calibration curves from out-of-fold predictions, with 95% bootstrap bands. All three curves lie close to the diagonal. The rug shows that most predictions are close to 0 or 1, which is why the bands are wide at intermediate probabilities.")

## A biopsy threshold from clinical practice

A diagnostic model is only useful if acting on it leads to better decisions. Rather than picking a cutoff from the data, the threshold was fixed in advance from how breast lesions are managed. In the BI-RADS system, a lesion with a malignancy risk of 2% or less is "probably benign" and gets short-interval follow-up, while above 2% a biopsy is recommended. A decision-analysis model also found about 2% to be optimal for women aged 42–75 [Burnside et al. 2012], and the Yokohama "benign" cytology category carries a pooled malignancy risk of about 1% [Nikas et al. 2023]. A 2% threshold means accepting up to 49 unnecessary biopsies to find one cancer. A 10% threshold was analysed as a sensitivity check.

Decision curve analysis [Vickers & Elkin 2006; Vickers et al. 2019] asks whether acting on the model beats the default strategies of biopsying everyone or no one. The full and forward-selected models beat biopsying everyone at every threshold from 1% to 20%, and the original-feature model does from just above 1%. At the 2% threshold, the full model avoids about 36 unnecessary biopsies per 100 patients, and the three-feature models 21–25. The gap closes at higher thresholds and falls below one biopsy per 100 above about 9%. The extra features earn their place exactly where the clinical threshold sits.

![Decision curves over thresholds from 1% to 20%. Left: net benefit. Right: net unnecessary biopsies avoided per 100 patients, compared with biopsying everyone.](/uploads/projects/wdbc-decision-curve.png "Figure 2: Decision curves over thresholds from 1% to 20%. Left: net benefit. Right: net unnecessary biopsies avoided per 100 patients, compared with biopsying everyone.")

| Model | Threshold | Sensitivity | Cancers missed (of 212) | Specificity | Benign biopsied (of 357) |
| --- | --- | --- | --- | --- | --- |
| Full model | 2% | 99.3% | 1.5 | 77.5% | 80 |
| Original-study 3 features | 2% | 98.6% | 3.0 | 74.9% | 90 |
| Full model | 10% | 98.0% | 4.2 | 90.0% | 36 |
| Original-study 3 features | 10% | 98.3% | 3.6 | 88.0% | 43 |

_Out-of-fold predictions averaged over 20 repeats of 10-fold cross-validation, so counts can be fractional. For comparison, the pooled false-negative rate of aspiration cytology read by cytopathologists is 3.7% [Hoda & Brachtel 2019]._

## Risk bands

Cytopathologists report breast aspirates in the five categories of the Yokohama system [Field et al. 2019], each with an established risk of malignancy. Reporting the model's output in matching risk bands puts it in a framework clinicians already know. The observed malignancy rates are broadly consistent with the published ones, with one exception: the atypical-equivalent band (13.5% observed against 20% published).

| Band | Predicted risk | Cases | Malignant | Observed rate | Published risk |
| --- | --- | --- | --- | --- | --- |
| Benign-equivalent | 0–2% | 276 | 1 | 0.4% | Yokohama Benign: 1% (1–3%) |
| Low suspicion | 2–10% | 49 | 3 | 6.1% | BI-RADS 4A: >2–10% |
| Atypical-equivalent | 10–50% | 37 | 5 | 13.5% | Yokohama Atypical: 20% (17–23%) |
| Suspicious-equivalent | 50–95% | 29 | 25 | 86.2% | Yokohama Suspicious: 86% (79–92%) |
| Malignant-equivalent | 95–100% | 178 | 178 | 100% | Yokohama Malignant: 100% (99–100%) |

_Full model, out-of-fold predictions averaged over 20 repeats. Pooled Yokohama risks from Nikas et al. [2023] (18 studies, 7,969 cases); BI-RADS 4A range from Elezaby et al. [2018]. The prevalence of malignancy here is 37%; in a setting with a different prevalence, the model's intercept must be recalibrated before the bands mean the same thing._

## How stable are the results?

A model developed on 569 cases could have come out differently on another sample of 569 [Riley & Collins 2023]. Refitted on 500 bootstrap samples, a patient's predicted risk moves by 1.6 percentage points on average (1.1 for the original-feature model). The unstable cases sit near the 2% threshold: for 79 cases, more than 10% of the refitted models give the opposite decision, and 74 of them are benign, with a median predicted risk of 3%.

![Left: range of each case's prediction across 500 bootstrap models. Right: share of bootstrap models that flip each case's decision at the 2% threshold. Predictions near 0 or 1 are stable; instability is concentrated in borderline cases.](/uploads/projects/wdbc-stability.png "Figure 3: Left: range of each case's prediction across 500 bootstrap models. Right: share of bootstrap models that flip each case's decision at the 2% threshold. Predictions near 0 or 1 are stable; instability is concentrated in borderline cases.")

A "best three features" model found by forward selection looks attractive, but it doesn't survive the bootstrap. The same procedure picked 46 different three-feature sets across 500 resamples, and the most common set appeared in only 25% of them. Run on all 569 cases, it now picks `smoothness_worst` where the first version of the analysis picked `concave points_mean`. Only `perimeter_worst` (85%) and `texture_worst` (77%) are chosen consistently.

![How often forward selection picked each feature across 500 bootstrap samples. Only perimeter_worst and texture_worst are chosen consistently.](/uploads/projects/wdbc-selection-frequency.png "Figure 4: How often forward selection picked each feature across 500 bootstrap samples. Only perimeter_worst and texture_worst are chosen consistently.")

The original study's three features (mean texture, worst area and worst smoothness) capture the same properties of the nuclei: size, texture and shape. They were fixed in advance, so they don't vary between samples, and they give better-calibrated and more stable predictions. They make the better simple model. TRIPOD+AI asks for enough detail to compute predictions independently, and this model is small enough to write out in full; the equation reproduces the fitted model's predictions exactly:

$$
\operatorname{logit} P(\text{malignant}) = -120.04 + 7.447\,\ln(1+\text{texture}_{\text{mean}}) + 12.458\,\ln(1+\text{area}_{\text{worst}}) + 111.72\,\ln(1+\text{smoothness}_{\text{worst}})
$$

with $P = 1/(1 + e^{-\operatorname{logit}})$ and an L2 penalty $C = 10$, tuned by inner cross-validation. All 30 coefficients of the full model, with the transformation and scaling constants, are saved with the code. Its largest standardised coefficients are for `texture_worst`, `radius_se`, `area_se` and `concave points_mean`; because the features are strongly correlated, individual coefficients should not be read as independent effects.

## Where this sits in the literature

The original team chose their classifier by searching over feature subsets, then tested it prospectively on consecutive new patients, a notably rigorous design for its time. That prospective test is the most informative result in the table below. Many later studies report 99% or more, often from a single train/test split and sometimes with the model tuned on the test set.

| Study | Model | Validation | Result |
| --- | --- | --- | --- |
| Street, Wolberg & Mangasarian 1993–95 | One separating plane (MSM-T) on 3 features | Repeated 10-fold CV | 97.5% accuracy |
| Wolberg et al. 1995, _Hum Pathol_ | Logistic regression | Cross-validation | 96.2% accuracy |
| Wolberg et al. 1997, _Breast J_ | Same 3-feature classifier | Prospective, consecutive new patients | 188/192 (97.9%) |
| Teague et al. 1997, _Cancer_ | Same system, 3 features | External (Iowa), 56 indeterminate aspirates | 75% accuracy |
| Mert et al. 2015 | Neural network, 30 features | 20% hold-out; network size chosen on the test set | 99.1% (leaky) |
| This project, full model | L2 logistic regression, 30 features | Bootstrap optimism-corrected | 98.0%, AUC 0.996 |
| This project, original features | Logistic regression on the original 3 features | Bootstrap optimism-corrected | 97.7%, AUC 0.993 |

_Only results on the 569-case dataset are included. The earlier 699-case Wisconsin Breast Cancer Database (WBCD) is a different dataset, with nine visually graded features and many duplicate records, and its results are often wrongly attributed to WDBC._

So this work **matches the original results; it does not beat them**. And the least flattering result is a warning: on 56 difficult, indeterminate aspirates at another hospital, the same system reached only 75% accuracy [Teague et al. 1997].

## Checking for data leakage

Possible sources of leakage were checked against the taxonomy of Kapoor & Narayanan [2023]:

- **Preprocessing.** The log transform and standardisation are fitted inside each training fold and bootstrap sample, never on data used for evaluation.
- **Tuning and feature selection** are repeated inside each resample; no modelling decision uses evaluation data.
- **No duplicates or oversampling.** The dataset has no duplicate records, and no synthetic cases were generated.
- **No cherry-picked splits.** Results are averaged over 500 bootstrap samples and 20 cross-validation repeats with fixed seeds, not taken from the best of several splits.
- **Fair comparisons.** Only results on the 569-case dataset are cited.
- **Test data from the target population: not satisfied.** All validation is internal, on data from one centre and one period. Internal validation cannot rule out this kind of leakage.

## Limitations

- **One operator, one hospital, 1990s imaging.** The original authors describe their system as validated for a single investigator at one institution, and on 56 indeterminate aspirates at another hospital it reached 75% accuracy [Teague et al. 1997]. External validation, with its own sample-size calculation [Riley et al. 2024], is needed before any clinical use.
- **Prevalence.** 37% of these cases are malignant. The model's intercept must be recalibrated to the local prevalence before its probabilities or risk bands are used.
- **Calibration at low risk.** With 357 benign and 212 malignant cases, calibration below about 5% risk is estimated with limited precision, and that is where the 2% threshold lies. Van Calster et al. suggest at least about 200 events and 200 non-events for calibration curves, which this dataset only just meets.
- **No patient characteristics,** so performance across age or ethnic groups can't be checked.
- **No provision for inadequate samples.** The model assumes an adequate aspirate with measurable nuclei; it has no equivalent of the Yokohama "non-diagnostic" category.
- **Outcome ascertainment** for the 569 labels is not documented in the dataset.
- **Not addressed:** protocol registration and patient and public involvement (TRIPOD+AI items 18–19).

This is a methodological case study, not a clinical tool.

## How the results were checked

- **Reproducibility.** A full re-run of the analysis reproduces every result file and figure exactly.
- **Permutation test.** With the labels shuffled, the whole pipeline gives an AUC of 0.48, close to the 0.5 expected when nothing leaks.
- **Independent implementation.** The bootstrap, re-implemented separately with different seeds and inner folds, gives an optimism-corrected AUC of 0.9929 for the original-feature model (main pipeline: 0.9926).
- **Calibration measures.** On simulated data they recover the true values (slope 1 for calibrated predictions, 0.5 for overconfident ones, intercept −1 when risk is overestimated by 1 on the logit scale), and agree with an independent maximum-likelihood fit to four decimal places.
- **Sample size.** The calculations match the reference `pmsampsize` implementation term by term.
- **Net benefit and risk bands.** Net benefit recomputed from the reported sensitivity and specificity agrees with the decision curves, and the risk-band counts agree with the stored predictions.
- **References.** Every reference was checked against Crossref by DOI.

## References

- Burnside ES, Chhatwal J, Alagoz O. What is the optimal threshold at which to recommend breast biopsy? _PLoS ONE_ 2012;7:e48820.
- Christodoulou E, et al. A systematic review shows no performance benefit of machine learning over logistic regression for clinical prediction models. _J Clin Epidemiol_ 2019;110:12–22.
- Collins GS, Moons KGM, Dhiman P, et al. TRIPOD+AI statement. _BMJ_ 2024;385:e078378.
- Collins GS, Dhiman P, Ma J, et al. Evaluation of clinical prediction models (part 1). _BMJ_ 2024;384:e074819.
- Elezaby M, Li G, Bhargavan-Chatfield M, Burnside ES, DeMartini WB. ACR BI-RADS assessment category 4 subdivisions in diagnostic mammography: utilization and outcomes in the National Mammography Database. _Radiology_ 2018;287:416–422.
- Field AS, Raymond WA, Rickard M, et al. The IAC Yokohama System for Reporting Breast FNAB Cytopathology. _Acta Cytol_ 2019;63:257–273.
- Harrell FE, Lee KL, Mark DB. Multivariable prognostic models. _Stat Med_ 1996;15:361–387.
- Hoda RS, Brachtel EF. International Academy of Cytology Yokohama System for Reporting Breast Fine-Needle Aspiration Biopsy Cytopathology: a review of predictive values and risks of malignancy. _Acta Cytol_ 2019;63:292–301.
- Irwig L, Macaskill P, Houssami N. Evidence relevant to the investigation of breast symptoms: the triple test. _Breast_ 2002;11:215–220.
- Kapoor S, Narayanan A. Leakage and the reproducibility crisis in machine-learning-based science. _Patterns_ 2023;4:100804.
- Mangasarian OL, Street WN, Wolberg WH. Breast cancer diagnosis and prognosis via linear programming. _Oper Res_ 1995;43:570–577.
- Mert A, Kılıç N, Bilgili E, Akan A. Breast cancer detection with reduced feature set. _Comput Math Methods Med_ 2015:265138.
- Nikas IP, Vey JA, Proctor T, et al. The use of the IAC Yokohama System for reporting breast fine-needle aspiration biopsy: a systematic review and meta-analysis. _Am J Clin Pathol_ 2023;159:138–145.
- Riley RD, Snell KIE, Ensor J, et al. Minimum sample size for developing a multivariable prediction model: part II. _Stat Med_ 2019;38:1276–1296.
- Riley RD, Ensor J, Snell KIE, et al. Calculating the sample size required for developing a clinical prediction model. _BMJ_ 2020;368:m441.
- Riley RD, Van Calster B, Collins GS. Estimating the Cox-Snell R² from a reported C statistic. _Stat Med_ 2021;40:859–864.
- Riley RD, Collins GS. Stability of clinical prediction models developed using statistical or machine learning methods. _Biom J_ 2023;65:e2200302.
- Riley RD, Archer L, Snell KIE, et al. Evaluation of clinical prediction models (part 2): how to undertake an external validation study. _BMJ_ 2024;384:e074820.
- Steyerberg EW, Harrell FE, Borsboom GJ, et al. Internal validation of predictive models. _J Clin Epidemiol_ 2001;54:774–781.
- Street WN, Wolberg WH, Mangasarian OL. Nuclear feature extraction for breast tumor diagnosis. _Proc SPIE_ 1993;1905:861–870.
- Teague MW, Wolberg WH, Street WN, et al. Indeterminate fine-needle aspiration of the breast: image analysis-assisted diagnosis. _Cancer_ 1997;81:129–135.
- Van Calster B, Nieboer D, Vergouwe Y, et al. A calibration hierarchy for risk models was defined. _J Clin Epidemiol_ 2016;74:167–176.
- Van Calster B, McLernon DJ, van Smeden M, et al. Calibration: the Achilles heel of predictive analytics. _BMC Med_ 2019;17:230.
- Vickers AJ, Elkin EB. Decision curve analysis: a novel method for evaluating prediction models. _Med Decis Making_ 2006;26:565–574.
- Vickers AJ, van Calster B, Steyerberg EW. A simple, step-by-step guide to interpreting decision curve analysis. _Diagn Progn Res_ 2019;3:18.
- Wolberg WH, Street WN, Heisey DM, Mangasarian OL. Computer-derived nuclear features distinguish malignant from benign breast cytology. _Hum Pathol_ 1995;26:792–796.
- Wolberg WH, Street WN, Mangasarian OL. Computerized diagnosis of breast fine-needle aspirates. _Breast J_ 1997;3:77–80.
- Wolberg WH, Mangasarian OL, Street WN. Breast Cancer Wisconsin (Diagnostic). UCI Machine Learning Repository, 1995. doi:10.24432/C5DW2B. Also on [Kaggle](https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data).
