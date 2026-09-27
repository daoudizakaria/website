---
slug: wdbc-breast-cancer
title: "Diagnosing Breast Cancer from Fine-Needle Aspirates: A Clinical Prediction Model"
date: 2026-09-27
summary: >-
  A malignancy model for the Wisconsin Diagnostic Breast Cancer data, built
  and validated to current clinical-prediction standards: bootstrap internal
  validation, calibration, decision curves at a clinically chosen biopsy
  threshold, stability analysis, and an honest comparison with the original
  1990s work.
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

The Wisconsin Diagnostic Breast Cancer dataset is one of the most-used benchmarks in machine learning, and one of the most over-claimed: accuracies of 99% or more are common, often from a single lucky train/test split or from models tuned on the test set. This project asks a more useful question: what can honestly be said about a model for this data, if it is built and validated the way clinical prediction models are supposed to be? The analysis follows the methodological and clinical literature throughout: TRIPOD+AI reporting, calibration, decision curve analysis, minimum sample size, and model stability.

## The data

The dataset has 569 fine-needle aspirates of breast masses, collected by Dr William H. Wolberg at the University of Wisconsin, Madison: 212 malignant and 357 benign. An operator outlined cell nuclei on a digitised image of each aspirate, and software measured ten properties of each nucleus, such as radius, texture, concavity and symmetry. Each property is reported three ways: the mean over nuclei, its standard error, and the "worst" value (the mean of the three largest). That gives 30 features. There are no missing values and no duplicate rows.

The classes are close to separable. A single feature, `perimeter_worst`, already separates them with an AUC of 0.975. The features are also highly redundant: radius, perimeter and area are close to the same measurement, and 21 pairs of features correlate above |r| = 0.9.

## The model

The model is an L2-penalised logistic regression on the log-transformed, standardised features, with the penalty tuned by cross-validation. Logistic regression is the natural choice here. A systematic review found no performance benefit of machine learning over logistic regression for clinical prediction models [Christodoulou et al. 2019]. A logistic model gives probabilities that can be calibrated, and it can be written out in full. Three models were built: one on all 30 features, one on three features chosen by forward selection, and one on the three features used by the original study.

## Validating it properly

With 569 cases, setting aside a test set wastes data and gives a noisy answer: a 20% test set would hold only about 42 cancers. Following current guidance [Steyerberg et al. 2001; Collins et al. 2024], each model was developed on all 569 cases. Its optimism was then estimated by refitting the entire procedure, including the penalty tuning and feature selection, on 500 bootstrap samples and on 20 repeats of 10-fold cross-validation.

| Model | AUC (apparent → corrected) | Brier score | Accuracy | Calibration slope |
|---|---|---|---|---|
| Full model, 30 features | 0.998 → 0.996 | 0.018 | 98.0% | 1.08 |
| Original-study 3 features | 0.993 → 0.993 | 0.022 | 97.7% | 1.04 |
| Forward-selected 3 features | 0.992 → 0.990 | 0.024 | 97.1% | 0.96 |

A good AUC isn't enough for a model that outputs a risk: a predicted 20% should mean about 20%. Calibration was measured by the calibration slope and intercept, and by a flexible calibration curve [Van Calster et al. 2019]. All three models are well calibrated. One technical point: because the classes are nearly separable, the calibration slope has no stable estimate in some bootstrap samples (one in ten exceeded 3), so calibration was taken from repeated cross-validation, which gives stable estimates.

![Flexible calibration curves from out-of-fold predictions, with 95% bootstrap bands. All three models follow the diagonal.](/uploads/projects/wdbc-calibration.png "Figure 1: Flexible calibration curves from out-of-fold predictions, with 95% bootstrap bands. All three models follow the diagonal.")

## A biopsy threshold from clinical practice

A diagnostic model is only useful if acting on it leads to better decisions. Rather than picking a cutoff from the data, the threshold was fixed in advance from how breast lesions are managed. In the BI-RADS system, a lesion with a malignancy risk of 2% or less is "probably benign" and gets short-interval follow-up, while above 2% a biopsy is recommended. A decision-analysis model also found about 2% to be optimal for women aged 42–75 [Burnside et al. 2012]. A 2% threshold means accepting up to 49 unnecessary biopsies to find one cancer.

Decision curve analysis [Vickers et al. 2019] asks whether acting on the model beats the default strategies of biopsying everyone or no one. At the 2% threshold, the full model flags 99.3% of cancers and avoids 36 unnecessary biopsies per 100 patients. A 3-feature model avoids 21–25. At higher thresholds the gap closes: it is under one biopsy per 100 from about 9%. The extra features earn their place exactly where the clinical threshold sits.

![Decision curves over thresholds from 1% to 20%. Left: net benefit. Right: net unnecessary biopsies avoided per 100 patients, compared with biopsying everyone.](/uploads/projects/wdbc-decision-curve.png "Figure 2: Decision curves over thresholds from 1% to 20%. Left: net benefit. Right: net unnecessary biopsies avoided per 100 patients, compared with biopsying everyone.")

The model's output can also be reported in risk bands that match the Yokohama system, which cytopathologists use to report breast aspirates. The observed malignancy rate in each band is close to the published risk for the matching category [Nikas et al. 2023]:

| Predicted risk | Cases | Observed malignant | Published risk (Yokohama) |
|---|---|---|---|
| 0–2% | 276 | 0.4% | Benign: 1% |
| 2–10% | 49 | 6.1% | (BI-RADS 4A: 2–10%) |
| 10–50% | 37 | 13.5% | Atypical: 20% |
| 50–95% | 29 | 86.2% | Suspicious: 86% |
| 95–100% | 178 | 100% | Malignant: 100% |

## How stable are the results?

A model developed on 569 cases could have come out differently on another sample of 569 [Riley & Collins 2023]. Refitted on 500 bootstrap samples, a patient's predicted risk moves by 1.6 percentage points on average. The unstable cases cluster around the 2% threshold, and 74 of the 79 whose decision flips in more than 10% of refitted models are benign.

A "best three features" model found by forward selection looks attractive, but it doesn't survive the bootstrap: the same procedure picked 46 different three-feature sets across 500 resamples, and the most common set appeared only 25% of the time. The original study's three features (mean texture, worst area and worst smoothness) were fixed in advance, so they don't vary between samples. They also give more stable predictions, so they make the better simple model:

$$
\operatorname{logit} P(\text{malignant}) = -120.04 + 7.447\,\ln(1+\text{texture}_{\text{mean}}) + 12.458\,\ln(1+\text{area}_{\text{worst}}) + 111.72\,\ln(1+\text{smoothness}_{\text{worst}})
$$

![How often forward selection picked each feature across 500 bootstrap samples. Only perimeter_worst and texture_worst are chosen consistently.](/uploads/projects/wdbc-selection-frequency.png "Figure 3: How often forward selection picked each feature across 500 bootstrap samples. Only perimeter_worst and texture_worst are chosen consistently.")

![Left: range of each case's prediction across 500 bootstrap models. Right: share of bootstrap models that flip each case's decision at the 2% threshold.](/uploads/projects/wdbc-stability.png "Figure 4: Left: range of each case's prediction across 500 bootstrap models. Right: share of bootstrap models that flip each case's decision at the 2% threshold.")

## Where this sits in the literature

The original team picked a three-feature classifier with 97.5% cross-validated accuracy, then validated it on consecutive new patients: 188 of 192 correct (97.9%) [Wolberg et al. 1997]. A logistic regression on their three features scores 97.7% here, and the full model 98.0%. So this work **matches the original results; it does not beat them**. The most informative result in the literature is the least flattering one: on 56 difficult, indeterminate aspirates at another hospital, the same system reached 75% accuracy [Teague et al. 1997].

## Limitations

- **One operator, one hospital, 1990s imaging.** All validation here is internal. Only testing at another centre can show whether the model transfers, and the one historical attempt suggests it may not.
- **The inputs don't exist in clinics today.** The model needs measurements from the original team's software, in which an operator traced nuclei by hand.
- **Prevalence.** 37% of these cases are malignant. In a clinic with a different rate, the model's intercept must be recalibrated before its probabilities or risk bands mean the same thing.
- **No patient characteristics,** so performance across age or ethnic groups can't be checked.

This is a methodological case study, not a clinical tool.

## How the results were checked

- A full re-run reproduces every result file and figure byte for byte.
- With the labels shuffled, the whole pipeline gives an AUC of 0.48, as it should when nothing leaks.
- The bootstrap, re-implemented from scratch with different seeds, gives the same corrected AUC to three decimals.
- The calibration measures recover the known answers on simulated data, and the sample-size formulas match the reference `pmsampsize` implementation term for term.
- Every reference was checked against Crossref by DOI.

## References

- Burnside ES, Chhatwal J, Alagoz O. What is the optimal threshold at which to recommend breast biopsy? *PLoS ONE* 2012;7:e48820.
- Christodoulou E, et al. A systematic review shows no performance benefit of machine learning over logistic regression for clinical prediction models. *J Clin Epidemiol* 2019;110:12–22.
- Collins GS, et al. TRIPOD+AI statement. *BMJ* 2024;385:e078378; and Evaluation of clinical prediction models (part 1). *BMJ* 2024;384:e074819.
- Nikas IP, et al. The use of the IAC Yokohama System for reporting breast fine-needle aspiration biopsy: a systematic review and meta-analysis. *Am J Clin Pathol* 2023;159:138–145.
- Riley RD, Collins GS. Stability of clinical prediction models developed using statistical or machine learning methods. *Biom J* 2023;65:e2200302.
- Steyerberg EW, et al. Internal validation of predictive models. *J Clin Epidemiol* 2001;54:774–781.
- Teague MW, et al. Indeterminate fine-needle aspiration of the breast: image analysis-assisted diagnosis. *Cancer* 1997;81:129–135.
- Van Calster B, et al. Calibration: the Achilles heel of predictive analytics. *BMC Med* 2019;17:230.
- Vickers AJ, van Calster B, Steyerberg EW. A simple, step-by-step guide to interpreting decision curve analysis. *Diagn Progn Res* 2019;3:18.
- Wolberg WH, Street WN, Mangasarian OL. Computerized diagnosis of breast fine-needle aspirates. *Breast J* 1997;3:77–80.
- Wolberg WH, Mangasarian OL, Street WN. Breast Cancer Wisconsin (Diagnostic). UCI Machine Learning Repository, 1995. doi:10.24432/C5DW2B. Also on [Kaggle](https://www.kaggle.com/datasets/uciml/breast-cancer-wisconsin-data).
