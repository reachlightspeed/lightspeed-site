# Lightspeed 2.0

The need for speed, using:

- [Eleventy](https://11ty.dev) for templates and site generation
- [TailwindCSS](https://tailwindcss.com) for a utility first CSS workflow
- [PurgeCSS](https://www.purgecss.com/) for optimizing CSS output
- [Terser](https://www.npmjs.com/package/terser) for a simple JS build pipeline
- [HTML-Minifier](https://www.npmjs.com/package/html-minifier) for minifying all HTML


## Prerequisites

- [Node and NPM](https://nodejs.org/)

## Running locally

```bash

# install the project dependencies
npm install

# run the build and server locally
npm run watch
```


## Previewing the production build

When building for production, an extra build step will strip out all CSS classes not used in the site. This step is not performed during the automatic rebuilds which take place during dev.

```bash

# run the production build
npm run build
```


## Styling with TailwindCSS

While running/developing locally, the `npm run watch` command will recompile the site as files are saved and this includes the CSS pipeline from Tailwind.

### Global CSS utilities.

A small number of bespoke CSS rules are provided for efficiency of repeated or global classes. These reside in `src/_includes/css/styles.css`
