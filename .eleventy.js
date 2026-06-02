module.exports = function(eleventyConfig) {
  // Sort posts automatically so the newest is always on top
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // Pass through your image folders straight to the finished site
  eleventyConfig.addPassthroughCopy("src/images");
  eleventyConfig.addPassthroughCopy("src/css");

  return {
    dir: {
      input: "src",
      output: "public",
     ```javascript
   includes: "_includes"
    }
  };
};
