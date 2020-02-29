module.exports = function(eleventyConfig) {
  // Copy the `img/` directory
  eleventyConfig.addPassthroughCopy("img");

  return {
    passthroughFileCopy: true
  };
};
