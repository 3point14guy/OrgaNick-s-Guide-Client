// helps to correct bad syntax and avoid misnaming or unused variables
'use strict'
// sets where ajax calls will be sent to
const config = {
  apiOrigins: {
    development: 'http://localhost:4741',
    production: 'https://boiling-dawn-26598.herokuapp.com'
  }
}
// makes config available to all other files in the file tree
module.exports = config
