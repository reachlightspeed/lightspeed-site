---
title: "How to Use AVIF: The New Next-Gen Image Compression Format"
meta_description: "Start using next-gen .avif images today progressively with the &lt;picture&gt; element. The format is ~50% smaller in size compared to JPEG, and ~20% smaller than WebP."
layout: blog
permalink: "blog/using-the-new-high-performance-avif-image-format-on-the-web-today/"
date: 2020-08-05
author: Dan Klammer
author_title: Performance Designer
author_twitter: danklammer
author_img: /img/dk
hero_img: /img/blog/hero-using-avif-images-today
hero_img_preload: data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAECAIAAAA1REndAAAAfUlEQVR42g3EQQ6CMBAF0N/ODKWQqIlbNx7Hq3sVNkAUaelv5S2ee77e8WioXLlb6M06AFod2Mq5dxo6vaU0e4neXdhNNYejmegGB/EDqpaCZVL58i5lNemrfyRNnsWaAbr98FmAUKCawUiOzLP4yDaQYMrM+151vGocFe4PLwg+P6EG4noAAAAASUVORK5CYII=
og_img: /img/blog/og-how-to-use-avif
footer_callout_title: Interested in seeing performance gains your site can have with optimized imagery?
tags: post
---

*August 26, 2020 Update: Chrome 85 now supports the AVIF format and the link to the preview build of the Squoosh.app has been updated as it now fully support AVIF.*

## A More Optimal Image Format

<a href="http://aomedia.org/" title="AV1 (.avif) File Format"><svg width="220" viewBox="0 0 240 330" fill="none" xmlns="http://www.w3.org/2000/svg" class="mx-auto sm:float-right pt-2 pb-4 px-8"><title>AV1 (.avif) File Format</title><path d="M9 10v310h221V69l-58-59H9zm163 0v59h58" fill="#fff"/><path d="M172 10l58 59h-58V10z" fill="#fff"/><path d="M230 69v251H9V10h163m58 59l-58-59m58 59h-58V10" stroke="#3B5EE2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/><path d="M211 190l-42-74-43 74h85z" fill="#FBAC30"/><path d="M211 190l-16-19h-53l-16 19h85z" fill="#12B17D"/><path d="M169 218l26-47h-53l27 47z" fill="#BB255C"/><path d="M67 183H47l-2 7H28l19-53h20l20 53H69l-2-7zm-16-13h12l-6-19-6 19zm25-33h18l12 36 11-36h18l-19 53H96l-20-53" fill="#000"/><path d="M165 150l-5 6-6-6 13-13h9v32h-11v-19" fill="#F1F4D4"/><path d="M172 10l58 59h-58V10z" fill="#3B5EE2" stroke="#3B5EE2" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"/></svg></a>

One of the upcoming technologies we're really excited about is the [AV1 (.avif)](https://aomediacodec.github.io/av1-avif/) image file format. It's basically a super-compressed image type. [Netflix](https://netflixtechblog.com/avif-for-next-generation-image-coding-b1d75675fe4 "AVIF for Next-Generation Image Coding") has already considered .avif superior to the JPEG, PNG, and even the newer WebP image formats for its image quality to compressed file size ratio.

The format was developed by the [Alliance for Open Media](http://aomedia.org/) in collaboration with Google, Cisco, and Xiph.org (who worked with Mozilla, creators of the Firefox browser). This format was created to be an open-sourced and royalty-free image format (unlike JPEG XR, which is a file format that compresses down very small but requires expensive licensing to implement).

## AVIF Compared to JPEG and WebP

AVIF offers significant file size reduction for images compared with JPEG or WebP; **~50% savings compared to JPEG**, and **~20% savings compared to WebP**. Daniel Aleksandersen of [CTRL.Blog](https://www.ctrl.blog/) has a great breakdown and deep dive into [AVIF comparison to JPEG and WebP](https://www.ctrl.blog/entry/webp-avif-comparison.html).

<svg width="768" viewBox="0 0 768 216" fill="none" xmlns="http://www.w3.org/2000/svg" class="block w-full"><path d="M0 16h380a4 4 0 014 4v44a4 4 0 01-4 4H0V16zM0 82h533.6a4 4 0 014 4v44a4 4 0 01-4 4H0V82zM0 148h764a4 4 0 014 4v44a4 4 0 01-4 4H0v-52z" fill="#3B5EE2"/><text fill="#fff" style="white-space:pre" font-size="28" letter-spacing="0em"><tspan x="317.08" y="50.95">.avif</tspan></text><text fill="#fff" style="white-space:pre" font-size="20" font-weight="300" letter-spacing="0em"><tspan x="12" y="49.11">50% smaller than .jpeg</tspan></text><text fill="#fff" style="white-space:pre" font-size="20" font-weight="300" letter-spacing="0em"><tspan x="12" y="116.11">30% smaller than .jpeg</tspan></text><text fill="#fff" style="white-space:pre"  font-size="28" letter-spacing="0em"><tspan x="449.21" y="116.95">.webp</tspan></text><text fill="#fff" style="white-space:pre" font-size="28" letter-spacing="0em"><tspan x="692.03" y="182.95">.jpeg</tspan></text></svg>

The format is very flexible in that it supports any image codec, can be lossy or lossless, has the ability to use an alpha channel (transparency for UI and design elements), and even has the ability to store a series of animated frames (think lightweight high-quality animated GIFs).

It is also one of the first image formats to support HDR color support; offering higher brightness, color bit depth, and color gamuts.


## Using AVIF in Web Development Today

As of August 25 2020, AVIF is supported in [Chrome 85](https://www.chromestatus.com/feature/4905307790639104) and enabled using a feature flag in [Firefox 80](https://www.mozilla.org/en-US/firefox/80.0/releasenotes/) (and will be supported by default soon); so we should start developing for it today!

<p><picture>
	<source srcset="/img/blog/post-using-avif-images-today-support.avif" type="image/avif">
	<source srcset="/img/blog/post-using-avif-images-today-no_support.jpg" type="image/jpeg">
	<img src="/img/blog/post-using-avif-images-today-no_support.jpg" width="768" loading="lazy" alt="Does your browser support AVIF?" class="rounded shadow-lg my-6">
</picture></p>

If the AVIF image above doesn't show in your browser, try using the latest version of [Google Chrome](https://www.google.com/chrome/) or by enabling AVIF in the Firefox advanced configuration preferences. You can do this by entering `about:config` in the URL bar, searching `image.avif.enabled`, and flipping this parameter to `true`.

<p><picture>
	<source srcset="/img/blog/post-using-avif-images-today-firefox-avif.webp" type="image/webp">
	<img src="/img/blog/post-using-avif-images-today-firefox-avif.png" width="768" loading="lazy" alt="Enable AVIF within Firefox Advanced Configuration Preferences">
</picture></p>


## Create AVIF Files with Squoosh

[Squoosh](https://squoosh.app/) is an image compression web app that allows you to dive into the advanced options provided by various image compressors.

The Google Chrome Labs team recently added AVIF support to the amazing Squoosh web app. In my opinion, this is the best option for converting and creating .avif files.

<p><a href="https://squoosh.app/"><picture>
	<source srcset="/img/blog/post-using-avif-images-today-squoosh-avif-update.avif" type="image/avif">
	<source srcset="/img/blog/post-using-avif-images-today-squoosh-avif-update.webp" type="image/webp">
	<img src="/img/blog/post-using-avif-images-today-squoosh-avif.jpg-update" width="768" loading="lazy" alt="Use Squoosh to convert and encode AVIF files." class="rounded shadow-lg my-6">
</picture></a></p>

<p class="btn"><a href="https://squoosh.app/">Use Squoosh App</a><p>

If you are comfortable in the command line, you can use the offical AOMedia library, [libavif](https://github.com/AOMediaCodec/libavif), to encode/decode AVIF files. Also, if you're a macOS user with [Homebrew](https://brew.sh/), you can quickly install a pre-built version using `brew install joedrago/repo/avifenc`, and `avifenc --help` for syntax and options.


## AVIF as Progressive Enhancement

Even though AVIF isn't supported everywhere yet, we can still use the format in native HTML with the `<picture>` element. The `<picture>` element allows for progressive support as we can list the image sources in the order in which we want loaded, and the browser will load the first that it supports. If browser doesn't support `<picture>` at all, it will fallback to using the default `<img>`.

``` html
<picture>
	<source srcset="img/photo.avif" type="image/avif">
	<source srcset="img/photo.webp" type="image/webp">
	<img src="img/photo.jpg" alt="Description of Photo">
</picture>
```

## AVIF Content-Type Headers + Netlify

An issue we noticed when using .avif files on [Netlify](https://www.netlify.com/), was that the image wasn't showing up in Firefox. It worked fine for Chrome, but not Firefox. We identified that the Response Headers were returning `Content-Type: application/octet-stream`, causing Firefox to display nothing. We fixed this by defining custom headers within the Netlify configuration file (`netlify.toml`).

``` yaml
[[headers]]
  for = "*.avif"
  [headers.values]
    Content-Type = "image/avif"
    Content-Disposition = "inline"
```

We also set the `Content-Disposition` to `inline` vs `attachment`, this way the browser will try to render the file within the browser rather than externally. A good example of this is when a PDF will open within the browser vs as a downloadable file. While `inline` should be default behavior, specifying won't hurt as this is a new filetype.

You can learn more about setting [Custom Headers in Netlify](https://docs.netlify.com/routing/headers/) by checking out their docs.


## We're Excited

We are super excited about what kind of awesome new experiences can be made with the flexibility and performance gains of this new format.