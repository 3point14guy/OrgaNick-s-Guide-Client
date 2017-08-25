'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signIn(data)
    .then(ui.signInSuccess)
    .catch(ui.signInFailure)
}
const onChangePassword = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.changePassword(data)
    .then(ui.passwordChangeSuccess)
    .catch(ui.passwordChangeFailure)
}
const onLogout = function (event) {
  event.preventDefault()
  api.logout()
    .then(ui.logoutSuccess)
    .catch(ui.logoutFailure)
}

// const addMovie = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   api.addAMovie(data)
//     .then(function (data) {
//       $('.form-clear').trigger('reset')
//       $('#add-a-movie').modal('hide')
//       $('.added').show()
//       $('.updated').hide()
//       $('.deleted').hide()
//       getAllMovies()
//     })
//     .then(ui.addMovieSuccess)
//     .catch(ui.addMovieFailure)
// }
//
// const deleteMovie = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.deleteAMovie(data)
//     .then(function (data) {
//       $('.form-clear').trigger('reset')
//       $('#delete-a-movie').modal('hide')
//       $('.added').hide()
//       $('.updated').hide()
//       $('.deleted').show()
//       getAllMovies()
//     })
//     .then(ui.deleteMovieSuccess)
//     .catch(ui.deleteMovieFailure)
// }
//
// const updateRating = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.updateARating(data)
//     .then(function (data) {
//       $('.form-clear').trigger('reset')
//       $('#update-a-movie').modal('hide')
//       $('.updated').show()
//       $('.added').hide()
//       $('.deleted').hide()
//       getAllMovies()
//     })
//     .then(ui.updateRatingSuccess)
//     .catch(ui.updateRatingFailure)
// }
//
// const getAllMovies = function () {
//   // event.preventDefault()
//   api.requestAllMovies()
//     .then(ui.allMoviesSuccess)
//     .catch(ui.allMovieFailure)
// }

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  // $('#all-movies').on('click', getAllMovies)
  // $('#add-movie').on('submit', addMovie)
  // $('#delete-movie').on('submit', deleteMovie)
  // $('#update-a-rating').on('submit', updateRating)
}

module.exports = {
  addHandlers
}
