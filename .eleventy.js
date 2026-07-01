module.exports = function(eleventyConfig) {
  // Sort posts automatically so the newest is always on top
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });


 eleventyConfig.addPassthroughCopy("src/tooplate-inner-peace.css");
  
 
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "public",
      includes: "_includes"
    }
  };
};
