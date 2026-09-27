---
slug: youtube-scraper
title: "YouTube Channel Scraper"
date: 2023-06-23
summary: >-
  A two-stage Python pipeline that maps the creator landscape of a YouTube
  category: it discovers channels from search results, then visits each one
  to collect its public profile metadata into a structured dataset ready for
  analysis.
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
rank: 8
glance:
  problem: "Map the creators working in a YouTube category, such as gaming."
  approach: "A two-stage pipeline: headless Chrome driven by Selenium discovers channels through infinite scroll, then visits each channel's About page."
  result: "A UTF-8 CSV dataset of channel names, URLs and descriptions; a sample gaming harvest ships with the code."
  tools: "Python, Selenium, pandas"
---

## 1 The Idea

Questions about a content niche — who the active creators are, how they
position themselves, how a category describes itself collectively — are easy
to ask and tedious to answer by hand. YouTube shows you results one scroll at
a time and keeps the interesting metadata one click deeper, on each channel's
About page.

This scraper automates the traversal. Given a category such as *gaming*, it
produces a table of the channels working in that space, each with its handle,
URL, display name, and self-description: the raw material for a landscape
study rather than a list of links.

## 2 A Two-Stage Pipeline

**Discovery.** The first script queries YouTube's search with the
channel-type filter applied, then repeatedly scrolls the results container to
trigger the infinite-scroll loader, harvesting channel entries as they
appear. YouTube exposes handles inside a compact text blob rather than a
clean attribute, so the handles are recovered by splitting each entry on its
`@` prefix and trailing separator. The result is `channels.csv` — a
deduplicated roster of the category's creators.

**Enrichment.** The second script consumes that roster and visits
`youtube.com/@<handle>/about` for each channel, reading the display name and
the description from the rendered page. The output, `youtube.csv`, joins the
three fields — channel name, URL, and description — into one dataset.

Splitting discovery from enrichment matters more than it appears: the
roster is cheap to regenerate and the enrichment pass is the expensive,
failure-prone one, so keeping them separate means a crash halfway through
the profile crawl never costs you the discovery work.

## 3 Working Against a Dynamic Interface

YouTube renders almost nothing in its initial HTML, which rules out a plain
`requests` + parser approach. The scraper drives a headless Chrome instance
through Selenium, letting the page's own JavaScript build the DOM before
querying it, and locates elements by the Polymer component classes YouTube
uses (`ytd-channel-name`, `ytd-channel-about-metadata-renderer`) rather than
by position. Infinite scroll is handled by executing a scroll-to-bottom
script in the page context and re-querying, since the content simply does not
exist until the viewport demands it. The metadata is assembled in pandas and
exported as UTF-8 CSV — essential, given how much creator copy is emoji and
non-Latin script.

## 4 Scope and Data

The scraper collects only what a channel publishes on its public About page,
and the repository ships with a sample harvest from the gaming category so
the output format is visible without running it.

The dataset it produces is a starting point rather than an end: channel
descriptions are a rich text corpus, well suited to clustering by theme,
keyword and topic analysis, or tracking how a niche's self-presentation
shifts over time — the natural next step, and the reason the tool was written
as a pipeline rather than a one-off script.
