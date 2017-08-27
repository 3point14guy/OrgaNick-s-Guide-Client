'use strict'

const getFormFields = require(`../../lib/get-form-fields`)

const api = require('./api')
const ui = require('./ui')

const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
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
const addVegetable = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.addAVegetable(data)
    .then(function (data) {
      $('.form-clear').trigger('reset')
      $('#add-a-vegetable').modal('hide')
      $('.added').show()
      $('.updated').hide()
      $('.deleted').hide()
      getAllVegetables()
    })
    .then(ui.addVegetableSuccess)
    .catch(ui.addVegetableFailure)
}

const deleteVegetable = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.deleteAVegetable(data)
    .then(function (data) {
      $('.form-clear').trigger('reset')
      $('#delete-a-vegetable').modal('hide')
      $('.added').hide()
      $('.updated').hide()
      $('.deleted').show()
      getAllVegetables()
    })
    .then(ui.deleteVegetableSuccess)
    .catch(ui.deleteVegetableFailure)
}

// const updateComment = function (event) {
//   event.preventDefault()
//   const data = getFormFields(this)
//   api.updateAComment(data)
//     .then(function (data) {
//       $('.form-clear').trigger('reset')
//       $('#update-a-vegetable').modal('hide')
//       $('.updated').show()
//       $('.added').hide()
//       $('.deleted').hide()
//       getAllVegetables()
//     })
//     .then(ui.updateCommentSuccess)
//     .catch(ui.updateCommentFailure)
// }

const getAllVegetables = function () {
  // event.preventDefault()
  api.requestAllVegetables()
    .then(ui.allVegetablesSuccess)
    .catch(ui.allVegetableFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
  $('#all-vegetables').on('click', getAllVegetables)
  $('#add-vegetable').on('submit', addVegetable)
  $('#delete-vegetable').on('submit', deleteVegetable)
  // $('#update-a-rating').on('submit', updateComment)
}

module.exports = {
  addHandlers
}
