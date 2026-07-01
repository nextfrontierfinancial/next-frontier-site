module.exports = function(eleventyConfig) {
  // 1. Copy your CSS and Images to the output folder
  eleventyConfig.addPassthroughCopy("src/tooplate-inner-peace.css");
  eleventyConfig.addPassthroughCopy("src/images");

  // 2. Set the input and output directories
  return {
    dir: {
      input: "src",
      output: "public", // This is where the live site files will be generated
      includes: "_includes"
    },
    // 3. Ensure Eleventy processes these file types
    templateFormats: ["njk", "md", "html"]
  };
};
