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

Every year, [Fortune](https://www.fortune.com) compiles a list of the top 500 American companies by revenue. We got to thinking: what if we ranked companies by the Page Speed of their homepages? Is there a correlation between business performance and Page Speed performance? What else might we find?

Using Google’s [PageSpeed Insights API](https://developers.google.com/speed/pagespeed/insights/) and The 2020 Fortune 500 list from Fortune, we compiled what we’re calling “The Performance 500”. 

<p><a href="https://docs.google.com/spreadsheets/d/17qQh1zKpa5qwNBzXcCgkVbsy-YMHV0DB_doNgktcp8M/edit?usp=sharing"><picture>
<source srcset="/img/blog/post-performance-500-chart.avif" type="image/avif">
<source srcset="/img/blog/post-performance-500-chart.webp" type="image/webp">
<img src="/img/blog/post-performance-500-chart.jpg" width="768" loading="lazy" alt="The Performance 500 (Google Sheets)" class="rounded shadow-lg my-6">
</picture></a></p>
<p class="btn"><a href="https://docs.google.com/spreadsheets/d/17qQh1zKpa5qwNBzXcCgkVbsy-YMHV0DB_doNgktcp8M/edit?usp=sharing">The Performance 500</a><p>

### And the Winner Is
You’ll notice a recognizable name in first place for the Performance 500: Berkshire Hathaway. Its Chairman and CEO, Warren Buffet, famous for continuing to live in the same house he purchased in 1958, bested even Google’s parent company in Page Speed performance using a simple HTML site with minimal resources to deliver content. Hats off to you, Warren and team.

### Ranking Methodology
We chose to rank these companies “Performance 500” rank first by Google’s PageSpeed Insights Performance Score, then by Largest Contentful Paint (LCP), then by Cumulative Layout Shift (CLS), then First Input Delay (FID), three Core Web Vitals metrics that Google recently [announced on their Search Central Blog](https://developers.google.com/search/blog/2020/11/timing-for-page-experience) that will affect Page Rank in Google Search Results beginning in May 2021. We preferred this ranking order as FID is not assigned a weight in [Google’s weighting of the performance score](https://web.dev/performance-scoring/#lighthouse-6).

### Device Type
We also chose to only show the mobile rankings of these sites. A prior version of this table existed with desktop scores as well but we felt it was too cluttered to meaningfully show desktop and mobile metrics in the same table.

### Understanding LCP, CLS & FID (Core Web Vitals)
We’ve included <a href="#understanding-core-web-vitals">a section below</a> where we explain each of these metrics in greater detail. 

### Cumulative Layout Shift
You may notice that Cumulative Layout Shift (Column H) is the PageSpeed Insights metric not measured in time and is itself a score: 

<blockquote>
CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
</blockquote>

### Color Coding
We chose to use the green, yellow and red labels using the same color coding scheme used by Page Speed Insights. These vary by metric and can be found in the [PageSpeed Insights documentation](https://developers.google.com/speed/docs/insights/v5/about#categories).


### The Sites We Used
A caveat: in a few examples there’s a slight deviance from some of the websites listed in the company profiles of the Fortune 500. Some linked to investor homepages (www.stock.walmart.com instead of the customer-facing homepages like www.walmart.com).  

### Other Interesting Findings
* Only 3 Sites scored above a 90% or above on Page Speed score
* 414/500 (~83%) of sites have a Page Speed score of less than 50
* TBD 
* TBD 
* TBD

<h2 id="understanding-core-web-vitals" class="-mt-12 pt-12">Understanding Core Web Vitals (Loading, Visual Stability, and Interactivity Metrics)</h2>
Starting next May, as Google Search Results start to take into account Loading (Largest Contentful Paint), Interactivity (First Input Delay) and Visual Stability (Cumulative Layout Shift) metrics, sites that have not focused on improving these metrics will be penalized against sites that are faster to load. Let’s take a look at each of these categories.

### Loading: Largest Contentful Paint (LCP)
> The First Contentful Paint (FCP) metric measures the time from when the page starts loading to when any part of the page's content is rendered on the screen. For this metric, "content" refers to text, images (including background images), svg elements, or non-white canvas elements.
> <cite>[web.dev](https://web.dev/lcp/)</cite>


### Visual Stability: Cumulative Layout Shift (CLS)
> CLS measures the sum total of all individual layout shift scores for every unexpected layout shift that occurs during the entire lifespan of the page.
A layout shift occurs any time a visible element changes its position from one rendered frame to the next.
> <cite>[web.dev](https://web.dev/cls/)</cite>

### Interactivity: First Input Delay (FID)
> FID measures the time from when a user first interacts with a page (i.e. when they click a link, tap on a button, or use a custom, JavaScript-powered control) to the time when the browser is actually able to begin processing event handlers in response to that interaction.
> <cite>[web.dev](https://web.dev/fid/)</cite>

## The Future's A Little Brighter

We’re really excited to see these aspects of the user experience factored into organic search rankings as we’d love to see companies large and small incentivized to focus on improving the user experience.

Special thanks to Lekshmi Nair’s [repo](https://github.com/lekshmicnair/Fortune500_Financial_Analysis) as a starter for most of the 2020 Fortune 500 company data in this table.
