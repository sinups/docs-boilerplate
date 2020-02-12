module.exports = {
  sections: [
      {
          name: 'How to use',
          content: './readme.md'
      },
      {
      name: "Components",
      content:"",
      sectionDepth:2,
      exampleMode: "expand",
      usageMode:"expand",
      components: () => [
      //'./src/components/Button/index.js',
       'src/components/**/*.js'
      ]
  }]
};