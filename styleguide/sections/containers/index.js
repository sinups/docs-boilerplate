module.exports = {
  sections: [{
      name: "Components",
      content:"",
      sectionDepth:2,
      exampleMode: "expand",
      usageMode:"expand",
      components: () => [
      './src/components/Button/index.js',
      // 'src/components/**/*.js'
      ]
  }]
};

// sections: [
//     {
//         name: 'Как использовать',
//         content: './readme.md'
//     },
//     {
//         name: 'Компоненты',
//         components: 'src/components/**/[A-Z]*.js',
//     },
//     {
//         name: 'Live Demo',
//         external: true,
//         href: 'https://justiva.ru'
//     }
// ],