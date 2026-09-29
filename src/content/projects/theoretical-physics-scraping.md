---
slug: theoretical-physics-scraping
title: "arXiv Lecture Notes Scraper"
date: 2024-02-21
summary: >-
  A Python pipeline that mines the arXiv for lecture notes, filters them by
  scientific field, and builds a locally organised, category-sorted library of
  PDFs with a companion catalogue of titles, authors and abstracts, intended
  as a structured resource for teaching and self-study.
category: physics
repo: "https://github.com/daoudizakaria/Theoretical-Physics-Scraping"
featured: false
tags:
  - web-scraping
  - python
  - arxiv
  - open-science
year: "2023–2024"
type: tool
rank: 8
glance:
  problem: "Turn thousands of scattered arXiv lecture notes into an organised library for a chosen field."
  approach: "Scrape the arXiv search results in pages of 200, filter by the real arXiv category taxonomy, clean the metadata in pandas, then download the PDFs into a subject/category tree."
  result: "A browsable, category-sorted PDF library with a CSV catalogue of titles, authors, categories and identifiers."
  tools: "Python, Selenium, BeautifulSoup, requests, pandas"
---

## 1 The Problem

The arXiv hosts a large amount of pedagogical material: lecture notes, course
write-ups and introductory reviews, which are often better entry points into
a subject than the research papers around them. But the repository is
built for browsing *papers*, not for assembling *a library*. A search for
"lecture notes" returns thousands of hits spread over paginated result pages,
mixing every discipline together, with no way to say "give me everything in
high-energy theory, sorted, downloaded, and filed by subfield."

This project automates the task: a scraper that walks the arXiv search
results, keeps only the entries belonging to a chosen field, records their
metadata, and downloads the PDFs into a directory tree organised by arXiv
category.

## 2 Pipeline

The tool runs as an interactive session and moves through four stages.

**Survey.** Before anything is downloaded, the scraper queries the arXiv
search endpoint and reads the result count directly from the page heading, so
the user knows up front how many lecture notes exist in the database.

**Harvest.** The user chooses a subject (Physics, Mathematics, Computer
Science, Biology, Engineering, Statistics, Economics or Finance) and the
number of entries to process. The scraper then walks the result pages in batches
of 200, which is the largest page size the arXiv search interface serves:

$$
\text{start}=0,\,200,\,400,\dots
$$

For each result it extracts the title, author list, primary category, and
arXiv identifier.

**Filter.** Each subject maps to its arXiv taxonomy, and only entries whose primary
category belongs to that list survive. Physics expands to the thirteen
archives `astro-ph`, `cond-mat`, `gr-qc`, `hep-ex`, `hep-lat`, `hep-ph`,
`hep-th`, `math-ph`, `nlin`, `nucl-ex`, `nucl-th`, `physics`, and `quant-ph`;
Mathematics expands to the full `math.*` set, from `math.AG` (algebraic
geometry) through `math.SG` (symplectic geometry). The surviving records are
normalised in pandas (the `Authors:` prefix is stripped, the whitespace
carried over from the HTML is collapsed, and the `arXiv:` prefix is removed
from identifiers) and written to `arxiv_data.csv` as a clean table of title, authors,
category, and reference.

**Collect.** The catalogue then drives the downloads. Each identifier becomes
a PDF URL, and each file is written to `Subject/category/Title.pdf`, so a
scrape of theoretical physics lands as a browsable tree with `hep-th`,
`gr-qc`, and `quant-ph` shelves rather than a flat pile of numbered files. An
optional pass revisits each abstract page and writes the abstracts into a
single `abstract_data.txt` digest, which is useful for surveying a harvest
before reading it in detail.

## 3 Implementation Notes

The arXiv search interface renders results through JavaScript, so the scraper
drives a headless Chrome instance through Selenium to obtain the rendered
page, and parses the markup with BeautifulSoup. Metadata handling and CSV
export go through pandas; downloads use `requests`, with `pathlib` managing
the output tree and `tqdm` reporting progress. A small shell script
(`scraper.sh`) provisions the directory skeleton for the physics archives and
launches the Python entry point, so a fresh checkout produces a correctly
organised library in one command.

The repository includes a sample harvest, an `arxiv_data.csv` of scraped
lecture notes (*Scattering Amplitudes in Quantum Field Theory*, *Physics of
the Analytic S-Matrix*, *An Introduction to the Analysis of Gradient
Systems* and others), so that the output format can be inspected without
running the scraper.

## 4 Why It Was Built

The scraper began as a practical tool for my own teaching and research
preparation: assembling reading lists in quantum field theory, general
relativity, and condensed matter without manually hunting through search
pages. The pipeline applies to any arXiv discipline, since the subject
taxonomy is a set of lists, and the CSV
catalogue it produces is a convenient starting point for bibliometric work
on how pedagogical material is distributed across fields.
