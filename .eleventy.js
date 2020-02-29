// minify js
const Terser = require("terser");
// minify css
const CleanCSS = require("clean-css");

module.exports = function(eleventyConfig) {
  eleventyConfig.addFilter("cssmin", function(code) {
    return new CleanCSS({}).minify(code).styles;
  });

  // js
  eleventyConfig.addFilter("jsmin", function(code) {
    let minified = Terser.minify(code);
    if( minified.error ) {
      console.log("Terser error: ", minified.error);
      return code;
    }

    return minified.code;
  });

  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");
  return {
    passthroughFileCopy: true
  };
};
