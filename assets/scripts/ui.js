'use strict'
const store = require('./store')

const displayVegetablesTemplate = require('./templates/vegetable-listing.handlebars')
const displayGardenTemplate = require('./templates/your-garden-listing.handlebars')

const signUpSuccess = (data) => {
  $('.form-clear').trigger('reset')
  $('#submit-register').modal('hide')
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account. ', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const signInSuccess = (data) => {
  store.user = data.user
  $('.menu-button').show()
  $('.display').show()
  $('.form-clear').trigger('reset')
  $('.instructions').show()
  $('.instructions').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(1700)
  $('#submit-login').modal('hide')
  $('.title-top').show()
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error).fadeIn('fast').delay(2000).fadeOut('slow').modal('hide')
}

const passwordChangeSuccess = function () {
  $('.form-clear').trigger('reset')
  $('#submit-change-password').modal('hide')
  $('.instructions').text('Password changed successfully!')
}
const passwordChangeFailure = function (error) {
  $('.change-pswrd-message').text('Password change failed.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const allVegetablesSuccess = function (data) {
  store.vegetable = data.vegetable
  const displayVegetablesHTML = displayVegetablesTemplate({ vegetables: data.vegetables })
  $('.display-list').show()
  $('.display-list').empty()
  $('.display').show()
  $('.instructions').text('Click Add to put vegetables in your garden list or click on a link to see treatments.')
  $('.show-buttons').show(300)
  $('.display-list').prepend(displayVegetablesHTML)
  $('api-buttons').show()
}
const allVegetablesFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const deleteVegetableSuccess = function () {
  $('.instructions').text('Vegetable successfully deleted.')
}
const deleteVegetableFailure = function (error) {
  $('.delete-vegetable').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const addVegetableSuccess = function (data) {
  console.log('in addVegetableSuccess, data.gardens is ', data.gardens)
  const displayGardenHTML = displayGardenTemplate({ gardens: data.gardens })
  $('.instructions').text('Vegetable successfully added.')
  $('.your-list').prepend(displayGardenHTML)
  $('.your-list').show()
}
const addVegetableFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const updateCommentsSuccess = function (data) {
  $('.instructions').text('Your comment update was successful.')
}
const updateCommentsFailure = function (error) {
  $('.update-a-comment').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const getGardenSuccess = function (data) {
  console.log('data.gardens is ', data.gardens)
  const displayGardenHTML = displayGardenTemplate({ gardens: data.gardens })
  $('.your-list').empty()
  $('.your-list').append(displayGardenHTML)
  $('.your-list').show()
}
const getGardenFailure = function (data) {
  console.log('getGardenFailure')
}

const logoutSuccess = function () {
  $('.api-buttons').hide()
  $('.form-clear').trigger('reset')
  $('.display').hide()
  $('.display-list').hide()
  $('.instructions').text('Please login to begin.')
  $('.login-buttons').show(900)
  $('.login-screen').show()
  $('#log-out').modal('hide')
  $('.show-buttons').hide()
  $('#user-buttons').hide()
  $('.menu-button').hide()
}

const logoutFailure = function (error) {
  $('.logout-message').text('Oops! Something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure,
  allVegetablesSuccess,
  allVegetablesFailure,
  deleteVegetableSuccess,
  deleteVegetableFailure,
  addVegetableSuccess,
  addVegetableFailure,
  updateCommentsSuccess,
  updateCommentsFailure,
  getGardenSuccess,
  getGardenFailure

}
