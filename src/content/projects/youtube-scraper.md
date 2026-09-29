---
slug: youtube-scraper
title: "YouTube Channel Scraper"
date: 2023-06-23
summary: >-
  A two-stage Python pipeline that surveys the creators of a YouTube category:
  it discovers channels from search results, then visits each one to collect
  its public profile metadata into a structured dataset for analysis.
category: ml
repo: "https://github.com/daoudizakaria/YouTube-Scraper"
featured: false
tags:
  - web-scraping
  - selenium
  - data-collection
  - python
year: "2023"
type: tool
rank: 9
glance:
  problem: "Map the creators working in a YouTube category, such as gaming."
  approach: "A two-stage pipeline: headless Chrome driven by Selenium discovers channels through infinite scroll, then visits each channel's About page."
  result: "A UTF-8 CSV dataset of channel names, URLs and descriptions; a sample gaming harvest ships with the code."
  tools: "Python, Selenium, pandas"
---

## 1 Motivation

Questions about a content niche, such as who the active creators are, how
they present themselves and how a category describes itself collectively, are
easy to ask and tedious to answer by hand. YouTube shows results one scroll
at a time and keeps the relevant metadata one click deeper, on each channel's
About page.

This scraper automates the traversal. Given a category such as *gaming*, it
produces a table of the channels working in that space, each with its handle,
URL, display name and self-description: the raw material for a survey of
the category rather than a list of links.

## 2 A Two-Stage Pipeline

**Discovery.** The first script queries YouTube's search with the
channel-type filter applied, then repeatedly scrolls the results container to
trigger the infinite-scroll loader, harvesting channel entries as they
appear. YouTube exposes handles inside a compact text blob rather than a
clean attribute, so the handles are recovered by splitting each entry on its
`@` prefix and trailing separator. The result is `channels.csv`, a
deduplicated list of the category's creators.

**Enrichment.** The second script reads that list and visits
`youtube.com/@<handle>/about` for each channel, reading the display name and
the description from the rendered page. The output, `youtube.csv`, joins the
three fields (channel name, URL and description) into one dataset.

Discovery and enrichment are kept separate: the list of channels is cheap
to regenerate, whereas the enrichment pass is slow and prone to failure, so
a failure during the profile crawl does not require the discovery stage to
be repeated.

## 3 Working Against a Dynamic Interface

YouTube renders almost nothing in its initial HTML, which rules out a plain
`requests` + parser approach. The scraper drives a headless Chrome instance
through Selenium, letting the page's own JavaScript build the DOM before
querying it, and locates elements by the Polymer component classes YouTube
uses (`ytd-channel-name`, `ytd-channel-about-metadata-renderer`) rather than
by position. Infinite scroll is handled by executing a scroll-to-bottom
script in the page context and re-querying, since the content simply does not
exist until the viewport demands it. The metadata is assembled in pandas and
exported as UTF-8 CSV, which is necessary because many channel
descriptions contain emoji and non-Latin scripts.

## 4 Scope and Data

The scraper collects only what a channel publishes on its public About page,
and the repository ships with a sample harvest from the gaming category so
the output format is visible without running it.

The dataset it produces is a starting point rather than an end: channel
descriptions are a rich text corpus, well suited to clustering by theme,
keyword and topic analysis, or tracking how a niche's self-presentation
shifts over time. For this reason the tool was written as a pipeline rather
than as a one-off script.
