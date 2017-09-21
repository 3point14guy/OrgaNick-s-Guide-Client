'use strict'
const store = require('./store')
// getting access to handlebars files
const displayVegetablesTemplate = require('./templates/vegetable-listing.handlebars')
const displayGardenTemplate = require('./templates/your-garden-listing.handlebars')
const displayPestsTemplate = require('./templates/pest-listing.handlebars')

const signUpSuccess = (data) => {
  // "." specifies class name, "#" specifies id name
  // use jQuery to interact with elements
  // .trigger manually calls action without user initiation
  $('.form-clear').trigger('reset')
  // hides modal after submit button is selected
  $('#submit-register').modal('hide')
}
const signUpFailure = (error) => {
  // displays message to user in div with class .sign-up-message.  .fadeIn has message appear, delay holds the message in place for 2000 microseconds, and fade out causes the message to slowly disappear
  $('.sign-up-message').text('There was an error creating the account. ', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const signInSuccess = (data) => {
  // on user sign in, capture user info and assign it to store
  store.user = data.user
  // displays elements based on login status
  $('.menu-button').show()
  $('.display').show()
  $('.form-clear').trigger('reset')
  $('.instructions').show()
  $('.instructions').text(data.user.email + ' You have successfully logged in.')
  $('.login-buttons').hide(1700)
  $('#submit-login').modal('hide')
  $('.title-top').show()
  $('.bugCarousel').hide()
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
  // assigns data from handlebars file
  const displayVegetablesHTML = displayVegetablesTemplate({ vegetables: data.vegetables })
  // ensures container is displayed
  $('.display-list').show()
  // empties container to avoid duplicated entries
  $('.display-list').empty()
  $('.display').show()
  $('.instructions').text('Click Add to put vegetables in your garden list.')
  // put data from handlebars file into the container with class .display-list and put the data at the beginning of the list
  $('.display-list').prepend(displayVegetablesHTML)
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
  const displayGardenHTML = displayGardenTemplate({ gardens: data.gardens })
  $('.your-list').empty()
  $('.your-list').prepend(displayGardenHTML)
  $('.your-list').show()
}
const getGardenFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const allPestsSuccess = function (data) {
  const displayPestsHTML = displayPestsTemplate({ pests: data.pests })
  $('.pest-list').empty()
  $('.pest-list').append(displayPestsHTML)
  $('.pest-list').show()
}

const allPestsFailure = function (error) {
  $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
}

const logoutSuccess = function () {
  $('.form-clear').trigger('reset')
  $('.display').hide()
  $('.display-list').hide()
  $('.instructions').text('Please login to continue.')
  $('.login-buttons').show(900)
  $('.login-screen').show()
  $('#log-out').modal('hide')
  $('.menu-button').hide()
  $('.bugCarousel').show()
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
  getGardenFailure,
  allPestsFailure,
  allPestsSuccess

}
