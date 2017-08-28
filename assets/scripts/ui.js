'use strict'
const api = require('./api')
const store = require('./store')
const displayVegetablesTemplate = require('./templates/vegetable-listing.handlebars')
const displayGardenTemplate = require('./templates/your-garden-listing.handlebars')

const signUpSuccess = (data) => {
  $('.form-clear').trigger('reset')
  $('#submit-register').modal('hide')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('.api-buttons').show(1700)
  $('.display').show()
  $('.all-vegetables').show()
  $('.form-clear').trigger('reset')
  $('.instructions').show()
  $('.instructions').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(1700)
  // $('.logout-buttons').show(2100)
  $('#submit-login').modal('hide')
  $('.title-top').show()
  $('#add-vegetable').on('click', addVegetable)
}
const addVegetable = function (event) {
  event.preventDefault()
  console.log('addVegetable event is', event)
  api.addAVegetable()
    // .then(function (data) {
    //   $('.added').show()
    //   $('.updated').hide()
    //   $('.deleted').hide()
    // })
    .then(addVegetableSuccess)
    .catch(addVegetableFailure)
}
const signInFailure = (error) => {
  $('.login-message').text('Login failure. ', error).fadeIn('fast').delay(2000).fadeOut('slow').modal('hide')
}
const signUpFailure = (error) => {
  $('.sign-up-message').text('There was an error creating the account. ', error).fadeIn('fast').delay(2000).fadeOut('slow')
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
  $('.instructions').text('Click Add to put vegetables your garden list or click on a link to see treatments.')
  $('.show-buttons').show(300)
  $('.display-list').prepend(displayVegetablesHTML)
  $('api-buttons').show()
}

const allVegetablesFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const deleteVegetableSuccess = function () {
  $('.instructions').text('Vegetable successfully deleted.')
  // $('.form-clear').trigger('reset')
  // $('#delete-a-vegetable').modal('hide')
}
const deleteVegetableFailure = function (error) {
  $('.delete-vegetable').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const addVegetableSuccess = function (data) {
  store.vegetable = data.vegetable
  const displayGardenHTML = displayGardenTemplate({ vegetables: data.vegetables })
  $('.instructions').text('Vegetable successfully added.').fadeIn('fast').delay(2000).fadeOut('slow')
  $('.your-list').prepend(displayGardenHTML)

  // would really love to run this here while maintaining separate files getAllVegetables()
}
const addVegetableFailure = function (error) {
  $('.add-vegetable').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const updateCommentSuccess = function (data) {
  $('.instructions').text('Your vegetable update was successful.')
  // $('.form-clear').trigger('reset')
  // $('#update-a-vegetable').modal('hide')
}
const updateCommentFailure = function (error) {
  $('.update-a-comment').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
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
  $('.added').hide()
  $('.updated').hide()
  $('.deleted').hide()
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
  updateCommentSuccess,
  updateCommentFailure

}
