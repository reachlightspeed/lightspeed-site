const { DateTime }    = require('luxon');
const util            = require('util');
const CleanCSS        = require("clean-css");
const slugify         = require("slugify");
const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");

console.log('running eleventyjs')
module.exports = function(eleventyConfig) {

  // Layout aliases for convenience
  eleventyConfig.addLayoutAlias('default', 'layouts/base.njk');
  eleventyConfig.addLayoutAlias('report', 'layouts/report.njk');
  eleventyConfig.addLayoutAlias('blog', 'layouts/blog.njk');
  eleventyConfig.addLayoutAlias('conf', 'layouts/conf.njk');

  // Syntax Highlighting
  eleventyConfig.addPlugin(syntaxHighlight);

  // a debug utility
  eleventyConfig.addFilter('dump', obj => {
    return util.inspect(obj)
  });

  // strip colon out of slug url
  // https://github.com/11ty/eleventy/issues/278#issuecomment-451105828
  eleventyConfig.addFilter("slug", (input) => {
    const options = {
      replacement: "-",
      remove: /[&,+()$~%.'":*?<>{}]/g,
      lower: true
    };
    return slugify(input, options);
  });

  // Date helpers
  eleventyConfig.addFilter('readableDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('LLLL d, y');
  });
  eleventyConfig.addFilter('htmlDate', dateObj => {
    return DateTime.fromJSDate(dateObj, {
      zone: 'utc'
    }).toFormat('y-MM-dd');
  });

  // compress and combine js files
  eleventyConfig.addFilter("jsmin", require("./src/utils/minify-js.js") );

  // minify the html output when running in prod
  if (process.env.NODE_ENV == "production") {
    eleventyConfig.addTransform("htmlmin", require("./src/utils/minify-html.js") );
  }

  // Static assets to pass through
  eleventyConfig.addPassthroughCopy("./src/site/fonts");
  eleventyConfig.addPassthroughCopy("./src/site/img");
  eleventyConfig.addPassthroughCopy("./src/site/css");
  eleventyConfig.addPassthroughCopy("./src/site/js");
  eleventyConfig.addPassthroughCopy("./src/favicon.png");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");

  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  return  {
    dir: {
      input: "src/site",
      includes: "_includes",
      output: "dist"
    },
    passthroughFileCopy: true,
    templateFormats : ["njk", "md", "png", "icon"],
    htmlTemplateEngine : "njk",
    markdownTemplateEngine : "njk",
  };

};
