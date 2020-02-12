module.exports = {
  sections: [
      {
          name: 'Usage',
          content: './readme.md',
          isolated: false,
      },
      {
      name: "Components",
      content:"",
      sectionDepth:2,
      exampleMode: "expand",
      usageMode:"expand",
      isolated: false,
      components: () => [
      './src/components/Button/index.js',
      './src/components/PushButton/index.js',
      ]
  }]
};