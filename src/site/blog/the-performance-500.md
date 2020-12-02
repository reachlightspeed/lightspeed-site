---
title: "The Performance 500: Homepages of The Fortune 500 Ranked by Page Speed"
meta_description: "The Performance 500 is a list of Fortune 500 companies ranked by the PageSpeed Insights Performance Score and other key performance metrics."
layout: blog
permalink: "blog/the-performance-500-homepages-of-the-fortune-500-ranked-by-page-speed/"
date: 2020-12-03
author: Tom Hanlon
author_title: Performance Engineer
author_twitter: tomhanlon
author_img: /img/tj
hero_img: /img/blog/hero-performance-500
hero_img_preload: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA4AAAAFCAIAAAD67UpFAAAAjklEQVR42i3Ky2kDQRBF0Vv12pZljBYOwhE4FCfurYIQ6ANievpVSwyCszzx+3dUo5//ZbtW77/f9z8SzAUCEqb7Te0zXSaa2pcpIS1XqkNub26CFJkJkM960FhFWIvrzgwICphEglwjmdNr1+5AQoY88MVAiAS2nWL0JIKy44O3nas0mupEGYLXnMpG8gBHZEJhuwDn1AAAAABJRU5ErkJggg==
og_img: /img/blog/og-performance-500
tags: post
---

## The Performance 500

Every year, [Fortune](https://www.fortune.com) compiles a list of the top 500 American companies by revenue. We got to thinking: what if we ranked companies by the Page Speed of their websites? Is there a correlation between business performance and Page Speed performance? What else might we find?

Using Google’s [PageSpeed Insights API](https://developers.google.com/speed/pagespeed/insights/) and 2020 Fortune 500 data from Fortune, we compiled what we’re calling “The Performance 500”. 

<p><a href="https://docs.google.com/spreadsheets/d/17qQh1zKpa5qwNBzXcCgkVbsy-YMHV0DB_doNgktcp8M/edit?usp=sharing"><picture>
<source srcset="/img/blog/post-performance-500-chart.avif" type="image/avif">
<source srcset="/img/blog/post-performance-500-chart.webp" type="image/webp">
<img src="/img/blog/post-performance-500-chart.jpg" width="768" loading="lazy" alt="The Performance 500 (Google Sheets)" class="rounded shadow-lg my-6">
</picture></a></p>
<p class="btn"><a href="https://docs.google.com/spreadsheets/d/17qQh1zKpa5qwNBzXcCgkVbsy-YMHV0DB_doNgktcp8M/edit?usp=sharing">The Performance 500</a><p>

### And the Winner Is
You’ll notice a recognizable name in first place for the Performance 500: <a href="https://www.berkshirehathaway.com/">Berkshire Hathaway</a>. Its Chairman and CEO, Warren Buffet, famous for continuing to live in the same house he purchased in 1958, bested even Google’s parent company in page speed performance using a simple HTML site with minimal resources to deliver content. Hats off to you, Warren and team.

### Other Interesting Findings
* Only 3 sites scored above a 90% or above on their PageSpeed Insights Performance Score
* 83% (414/500) of sites have a Performance Score of less than 50
* The average Performance Score is just about 30
* The average Largest Contentful Paint (LCP) metric is 12 seconds(!)
* Over half of the Fortune 500 had a Cumulative Layout Shift (CLS) Score of better than .1
* Only 22 of the 500 have "Good" First Input Delay (FID) scores

### Understanding LCP, CLS & FID (Core Web Vitals)
A quick reference:
* LCP: Largest Contentful Paint - How long does it take to render the largest element within the viewport (measured in seconds)
* CLS: Cumulative Layout Shift - How often things move around as the page loads (presented as a score value)
* FID: First Input Delay - How soon after a user input does the browser process the event (measured in milliseconds)

We’ve included <a href="#understanding-core-web-vitals">a section below</a> where we explain each of these in the language used on <a href="https://web.dev">web.dev</a>. 

### Ranking Methodology
We chose to rank these companies “Performance 500” rank first by Google’s PageSpeed Insights Performance Score, then by Largest Contentful Paint (LCP), then by Cumulative Layout Shift (CLS), then First Input Delay (FID), three Core Web Vitals metrics that Google recently [announced on their Search Central Blog](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) that will affect Page Rank in Google Search Results beginning in May 2021. We preferred this ranking order as FID is not assigned a weight in [Google’s weighting of the performance score](https://web.dev/performance-scoring/#lighthouse-6).

### Color Coding
We chose to use the green, yellow and red labels using the same color coding scheme used by Page Speed Insights. These vary by metric and can be found in the [PageSpeed Insights documentation](https://developers.google.com/speed/docs/insights/v5/about#categories).

### Device Type
We also chose to only show the mobile rankings of these sites. A prior version of this table existed with desktop scores as well but we felt it was too cluttered to meaningfully show desktop and mobile metrics in the same table.

<h2 id="understanding-core-web-vitals">Understanding Core Web Vitals (Loading, Visual Stability, and Interactivity Metrics)</h2>

Starting next May, as Google Search Results start to take into account Loading (Largest Contentful Paint), Interactivity (First Input Delay) and Visual Stability (Cumulative Layout Shift) metrics, sites that have not focused on improving these metrics will be penalized against sites that are faster to load. Let’s take a look at each of these categories.

### Loading: Largest Contentful Paint (LCP)

Google's Definition: The Largest Contentful Paint (LCP) metric reports the render time of the largest image or text block visible within the viewport. [web.dev](https://web.dev/lcp/)

<picture>
  <source srcset="/img/blog/post-performance-500-lcp-sm.svg" media="(max-width: 640px)">
  <img src="/img/blog/post-performance-500-lcp-lg.svg" width="768" loading="lazy" alt="Largest Contentful Paint (LCP)">
</picture>


### Visual Stability: Cumulative Layout Shift (CLS)

Google's Definition: CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.

A layout shift occurs any time a visible element changes its position from one rendered frame to the next. [web.dev](https://web.dev/cls/)

<picture>
  <source srcset="/img/blog/post-performance-500-cls-sm.svg" media="(max-width: 640px)">
  <img src="/img/blog/post-performance-500-cls-lg.svg" width="768" loading="lazy" alt="Cumulative Layout Shift (CLS)">
</picture>


### Interactivity: First Input Delay (FID)

Google's Definition: FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction. [web.dev](https://web.dev/fid/)

<picture>
  <source srcset="/img/blog/post-performance-500-fid-sm.svg" media="(max-width: 640px)">
  <img src="/img/blog/post-performance-500-fid-lg.svg" width="768" loading="lazy" alt="First Input Delay (FID)">
</picture>

## The Future's A Little Brighter

We’re really excited to see these aspects of the user experience factored into organic search rankings as we’d love to see companies large and small incentivized to focus on improving page speed performance.

Special thanks to Lekshmi Nair’s [repo](https://github.com/lekshmicnair/Fortune500_Financial_Analysis) as a starter for most of the 2020 Fortune 500 company data in this table.
