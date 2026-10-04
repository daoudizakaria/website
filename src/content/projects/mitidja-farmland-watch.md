---
slug: mitidja-farmland-watch
title: "Farmland Loss in the Mitidja Plain, 2018–2026: Sentinel-2 Maps and a Design-Based Estimate"
date: 2026-10-04
summary: >-
  How much farmland was built over in Algeria's Mitidja plain between 2018 and
  2026? Land-cover maps from Sentinel-2 locate the change, and a stratified
  sample of 1,790 reference points measures it: 3,029 ± 479 ha, 2.9% of the
  plain's farmland. The results, by wilaya and commune, are published as an
  interactive dashboard in English, French and Arabic.
category: ml
dashboard: "/mitidja/mitidja_farmland_watch.html"
featured: false
tags:
  - remote-sensing
  - sentinel-2
  - land-cover
  - change-detection
  - sampling-design
  - geospatial
year: "2026"
type: research
rank: 3
image: "/uploads/projects/thumbs/mitidja-farmland-watch.webp"
glance:
  problem: "How much farmland has been built over in the Mitidja plain since 2018, where, how fast and on what kind of land, with an uncertainty that holds up to scrutiny?"
  approach: "Seasonal Sentinel-2 composites and a LightGBM land-cover model map the change, and a second-stage model trained on reference points removes most false alarms. The area is estimated from a stratified random sample of 1,790 reference points, labelled by supervised automated photo-interpretation of very-high-resolution imagery, with 493 uncertain or heavily weighted labels checked by hand."
  result: "3,029 ± 479 ha of farmland built over between 2018 and 2026 (95% interval), about 380 ha a year and 2.9% of the plain's farmland. Algiers and Blida lose the most hectares, Boumerdès the largest share; no change in the pace is detectable."
  tools: "Python (odc-stac, rasterio, GeoPandas, scikit-learn, LightGBM), Leaflet; Sentinel-2 L2A, ESA WorldCover, Google Open Buildings, OpenStreetMap, Esri World Imagery Wayback"
metrics:
  - value: "3,029 ± 479"
    unit: "ha"
    label: "Farmland built over, 2018–2026"
    note: "95% interval, sampling error"
  - value: "2.9%"
    label: "Of the plain's 2018 farmland"
    note: "About 380 ha a year"
  - value: "1,790"
    label: "Reference points in a stratified random sample"
    note: "493 labels checked by hand"
  - value: "0.49 → 0.67"
    label: "F1 of the change map on 150 points no model saw"
    note: "Before and after the second-stage model"
---

## About this project

The Mitidja is the alluvial plain that runs behind Algiers, from Hadjout in the west to Boudouaou in the east, across the wilayas of Algiers, Blida, Tipaza and Boumerdès. It is among the most productive farmland in the country, and it is also where the capital grows. Planning documents and press reports regularly describe farmland lost to housing, warehouses and roads, but the figures quoted are rarely backed by a measurement whose uncertainty is known.

This project measures that loss for 2018–2026 over the whole plain (166,138 ha): how much farmland was built over, where, how fast and on what kind of land. Satellite maps alone cannot answer the first question, because every map of rare change contains errors of the same order as the change itself. The maps are therefore used to locate the change and to design a sample, and the area is estimated from a stratified random sample of reference points, following the good-practice recommendations for land-change accuracy assessment [Olofsson et al. 2014]. The results are published as an [interactive dashboard](/mitidja/mitidja_farmland_watch.html) in English, French and Arabic, intended for agricultural and planning offices as well as the public.

![Map of the Mitidja plain on a 2026 Sentinel-2 composite. Farmland built over between 2018 and 2026 is shown in red, other land built over in purple and land already built up in 2018 in grey; a dashed yellow frame marks the central part of the plain.](/uploads/projects/mitidja-change-map.webp "Figure 1: The final change map over the 2026 composite. Red: farmland in 2018, built-up in 2026. Grey: built-up in both years. The dashed frame is the central part of the plain, studied first and sampled most densely.")

## Mapping the change

Spring and summer composites were built for 2018, 2021 and 2026 from Sentinel-2 Level-2A imagery (tiles 31SDA and 31SEA), each the per-pixel median of three clear dates at least 15 days apart, with haze screening, sub-pixel co-registration of the earlier years to 2026 and a relative normalisation of the hazy 2021 summer. A LightGBM classifier with 39 features per pixel (spectral bands and indices in both seasons, texture, elevation and slope) was trained on 2021 pixels whose ESA WorldCover class is the same in 2020 and 2021, and compared with a random forest under spatial block cross-validation.

Farmland that becomes built-up is flagged when the class change is supported by a drop in greenness or the classifier is near certain, and a persistence test adds farmland that has lost its green season for good in the 2019–2026 annual series, which catches buildings and sheds that the classifier reads as bare soil. A second-stage gradient-boosted model then re-scores every candidate pixel using the existing layers and building presence from Google Open Buildings. It was trained on the labelled reference points with design weights, cross-fitted on 5 km spatial blocks, and adopted only because its F1 score was higher in both parts of the plain; on 150 reference points drawn after its adoption, which no model saw, it raises F1 from 0.49 to 0.67 (95% interval of the difference +0.06 to +0.29).

## Measuring the change

On all 1,790 reference points the final map has a precision of 62% and a recall of 57%: it misses small conversions scattered in stable farmland and flags land that was already built up in 2018. Map counts are therefore not reported as the result. The reference sample is stratified by the maps, with frozen strata, and was enlarged in eight draws, each allocated where the variance of the total or the bound on undetected loss was largest. Areas, rates and accuracies are computed with the ratio estimators for stratified samples whose strata differ from the map classes [Stehman 2014].

Each point was labelled for 2018 and for 2026 as farmland, built-up or other land, on very-high-resolution archive imagery and Sentinel-2 chips, following written labelling conventions and without knowledge of the stratum. The labels come from a supervised automated photo-interpretation procedure; the points of the last two draws were read twice independently, with a third reading where the two differed. The labels that weigh most on the estimate were then checked by hand: every uncertain label in the strata where a map flags change and in the four later draws, the most heavily weighted points, and 40 points drawn at random (92.5% agreement on the change label, Cohen's κ 0.82), 493 labels in all. The remaining uncertain labels (5% of the total) are covered by label-sensitivity scenarios; in the two main ones, the estimate stays between 2,938 and 3,047 ha. The hand check itself mattered: with the automated labels alone the estimate would be 4,043 ± 740 ha. Every estimator was also re-implemented independently from the raw inputs in an internal review, and the corrections it led to are included.

## Results

Between 2018 and 2026, **3,029 ± 479 ha** of farmland were built over (95% interval 2,550–3,508 ha), that is 379 ± 60 ha a year and 2.9% of the plain's 2018 farmland (103,215 ± 3,186 ha).

- **By wilaya**, estimated directly from the sample: Algiers 1,183 ha (865–1,525), Blida 984 ha (754–1,230), Boumerdès 573 ha (355–831) and Tipaza 289 ha (120–533). Boumerdès loses the largest share of its farmland (9.0%) and Algiers 4.4%, against 2.3% in Blida and 1.1% in Tipaza.
- **By part of the plain**: the central part loses 3.8% of its farmland and the rest 2.2% (difference 1.5 ± 0.9 percentage points). This difference rests on a few heavily weighted points in the stable farmland of the rest of the plain and should be read with that in mind.
- **By commune**, a synthetic estimator corrects each commune's map count with the error rates of its strata. Summed by wilaya or over groups of communes, it agrees with direct estimates in eight of nine checks; the communes where the map shows least loss come out too high and are flagged as such. Bouinan has the largest loss (175 ha, 15.0% of its farmland).
- **Pace**: no change is detectable. Dated by the map, the loss runs at 385 ± 94 ha a year in 2019–2022 and 372 ± 93 ha a year in 2023–2026; dated on archive imagery by the start of construction, the 158 reference conversions give the same conclusion.
- **Which farmland**: of seven attributes compared, after correction for multiple testing, only one differs. Land built over is more often grass or fallow than the plain's farmland as a whole (+14 percentage points). The sample gives no support to the view that building takes the best farmland first.

## Limits

The interval covers sampling error only. Strata in which the sample found no conversion still make up 54% of the stratified area; together they could hide up to 838 ha (joint one-sided 95% bound). The design is sequential, since later draws were sized after earlier results, although an estimator that is unbiased whatever triggered the follow-up gives the same figure (3,025 ± 481 ha). Commune figures rest on the assumption that the map errs at the same rate in every commune, which can be checked for groups of communes but not for a single one. The screening products of the dashboard (a watchlist of sites cleared in 2026, a typology of losses and a risk layer) are leads for field teams, not measurements: of 30 random high-priority sites checked outside the area where the watchlist was tuned, 18 were farmland being built on or cleared (60%, 95% interval 42–75%).

## The dashboard

The [dashboard](/mitidja/mitidja_farmland_watch.html) brings the results together on one page: the headline figures with their uncertainty, each finding marked as established, likely or not established, the maps of loss and crop stress over the 2018 and 2026 composites, figures for every commune and wilaya, the timing and kind of farmland lost, and the full method. It is available in [French](/mitidja/mitidja_farmland_watch_fr.html) and [Arabic](/mitidja/mitidja_farmland_watch_ar.html). The public version shows commune totals only; the locations of individual sites are kept for the agricultural and planning offices, since a public list would point at private plots before any check on the ground.

## References

- Olofsson, P., Foody, G. M., Herold, M., Stehman, S. V., Woodcock, C. E. and Wulder, M. A. (2014). Good practices for estimating area and assessing accuracy of land change. *Remote Sensing of Environment*, 148, 42–57.
- Stehman, S. V. (2014). Estimating area and map accuracy for stratified random sampling when the strata are different from the map classes. *International Journal of Remote Sensing*, 35(13), 4923–4939.
