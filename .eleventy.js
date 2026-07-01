module.exports = function(eleventyConfig) {
  // Sort posts automatically so the newest is always on top
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByGlob("src/posts/*.md").reverse();
  });

  // 1. Update this to match where your CSS file is located
  // Since you said your CSS file is in the 'src' folder:
  eleventyConfig.addPassthroughCopy("src/*.css"); 
  
  // Keep your images pass-through
  eleventyConfig.addPassthroughCopy("images");

  return {
    dir: {
      input: "src",
      output: "public",
      // 2. Added the missing comma here!
      includes: "_includes"
    }
  };
};
