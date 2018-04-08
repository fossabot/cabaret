/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

 // You can delete this file if you're not using it
exports.modifyBabelrc = ({ babelrc }) => ({
  // ...babelrc,
  plugins: babelrc.plugins.concat([
    'transform-decorators-legacy',
    'transform-class-properties',
    'transform-react-display-name',
    ['extensible-destructuring', {
      'mode': 'optout',
      'impl': 'safe'
    }]
  ]),
})