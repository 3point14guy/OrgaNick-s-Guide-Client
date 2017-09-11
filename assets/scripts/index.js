'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const user = require('./events')
// sets which URL to use based on whether in develpment or production
$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  user.addHandlers()
})
// template comment: use require with a reference to bundle the file and use it in this file
// template comment: const example = require('./example')

// template comment: use require without a reference to ensure a file is bundled
require('./example')
