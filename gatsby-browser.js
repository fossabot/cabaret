/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

import $ from 'jquery'

// You can delete this file if you're not using it
exports.onClientEntry = () => {
  // Enables jQuery on global scope
  window.$ = window.jQuery = $
}
