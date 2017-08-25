'use strict'

const store = require('./store')
const displayMoviesTemplate = require('./templates/movie-listing.handlebars')

const signUpSuccess = (data) => {
  $('.form-clear').trigger('reset')
  $('#submit-register').modal('hide')
}
const signInSuccess = (data) => {
  store.user = data.user
  $('.api-buttons').show(1700)
  $('.display').show()
  $('.form-clear').trigger('reset')
  $('.instructions').show()
  $('.instructions').text(data.user.email + ' You have successfully logged in. Select "View Movies"')
  $('.login-buttons').hide(1700)
  // $('.login-screen').hide()
  $('.logout-buttons').show(2100)
  $('#submit-login').modal('hide')
  $('.title-top').show()
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

// const allMoviesSuccess = function (data) {
//   store.movie = data.movie
//   const displayMoviesHTML = displayMoviesTemplate({ movies: data.movies })
//   $('.display-list').show()
//   $('.display-list').empty()
//   $('.display').show()
//   $('.instructions').text('This is your current list.')
//   $('.show-buttons').show(300)
//   $('.display-list').prepend(displayMoviesHTML)
//   $('api-buttons').show()
// }
//
// const allMoviesFailure = function (error) {
//   $('.instructions').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
// }
//
// const deleteMovieSuccess = function () {
//   $('.instructions').text('Movie successfully deleted.')
//   // $('.form-clear').trigger('reset')
//   // $('#delete-a-movie').modal('hide')
// }
// const deleteMovieFailure = function (error) {
//   $('.delete-movie').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
// }
//
// const addMovieSuccess = function () {
//   $('.instructions').text('Movie successfully added.')
//   // $('.form-clear').trigger('reset')
//   // $('#add-a-movie').modal('hide')
//
//   // would really love to run this here while maintaining separate files getAllMovies()
// }
// const addMovieFailure = function (error) {
//   $('.add-movie').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
// }
//
// const updateRatingSuccess = function (data) {
//   $('.instructions').text('Your movie update was successful.')
//   // $('.form-clear').trigger('reset')
//   // $('#update-a-movie').modal('hide')
// }
// const updateRatingFailure = function (error) {
//   $('.update-a-rating').text('Oops, something went wrong.', error).fadeIn('fast').delay(2000).fadeOut('slow')
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  passwordChangeSuccess,
  passwordChangeFailure,
  logoutSuccess,
  logoutFailure
  // allMoviesSuccess,
  // allMoviesFailure,
  // deleteMovieSuccess,
  // deleteMovieFailure,
  // addMovieSuccess,
  // addMovieFailure,
  // updateRatingSuccess,
  // updateRatingFailure
}
