
const sections = require('./styleguide/sections');
const { version } = require('./package.json');
module.exports = {
  title: 'Widget ui-kit',
  usageMode: 'expand',
  pagePerSection: true,
  sections: [...sections],
  version,
  ignore: ['**/src/test.js'],
  require: ['./src/styles/styles.scss'],
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css?family=Roboto'
        }
      ]
    }
  },
  theme: {
    sidebarWidth: '260px',
    fontFamily: {
      base: '"Roboto", sans-serif'
    },
    color: {
      base: '#424D57',
      light: '#7A8289',
      lightest: '#A0A6AB',
      link: '#4384F5',
      linkHover: '#4379D6',
      border: '#C6C9CC',
      error: '#D64646',
      sidebarBackground: '#F3F7F9'
    },
    fontSize: {
      base: 15,
      text: 15,
      small: 13,
      h1: 28,
      h2: 24,
      h3: 20,
      h4: 16,
      h5: 15,
      h6: 14
    },
    editorConfig: {
      theme: 'dracula',
    },
   
  },
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.scss$/,
          use: ['style-loader', 'css-loader','sass-loader']
        }
      ]
    }
  }
};