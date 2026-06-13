---
slug: markdown-katex-sample
title: "Sample Markdown + KaTeX research note"
date: 2024-06-15
summary: >-
  Demonstrates the real-file Markdown pipeline alongside legacy portfolio posts:
  headings, tables, and inline and display mathematics.
tags:
  - demo
  - markdown
  - methodology
resume: ""
---

## Motivation

This article ships with the portfolio as a **reference implementation** only. Legacy
entries in `portfolio.js` remain unchanged; this file proves how `gray-matter`,
`react-markdown`, and KaTeX fit together for future migration.

### What you should see

- Section headings at multiple levels.
- A small comparison **table** (GitHub-flavored Markdown).
- Inline math such as the Pythagorean identity $a^2 + b^2 = c^2$ rendered with KaTeX.
- A centered **display equation** with an integral.

## A minimal notation table

| Idea         | Example       | Notes                            |
| ------------ | ------------- | -------------------------------- |
| Inline math  | $E = mc^2$    | Between dollar signs             |
| Display math | See eq. below | Use `$$ … $$` on their own lines |
| Markdown     | `**bold**`    | Parsed before math               |

## Gaussian integral (display)

$$
\int_{-\infty}^{\infty} e^{-x^2}\,dx = \sqrt{\pi}
$$

## Closing

When you add another article, place a new `.md` file under
`src/content/research/articles/`, register its import in `researchContent.js`, and
keep `slug` unique. Portfolio articles remain available for any `slug` not claimed by
Markdown sources.
