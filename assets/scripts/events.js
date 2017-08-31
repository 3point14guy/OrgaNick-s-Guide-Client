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
    .then(getAllVegetables)
    .then(getGarden)
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
  console.log('addVegetable in events')
  event.preventDefault()
  const data = {garden: {'vegetable_id': $(event.target).attr('data-id')}}
  api.addAVegetable(data)
    .then(ui.addVegetableSuccess)
    .then(function (data) {
      getGarden()
      $('#delete-vegetable').on('submit', deleteVegetable)
      console.log('delete-vegetable handler reached')
    })
    .catch(ui.addVegetableFailure)
}

const deleteVegetable = function (event) {
  event.preventDefault()
  const data = $(event.target).attr('data-id')
  console.log("$(event.target).attr('data-id') is ", $(event.target).attr('data-id'))
  api.deleteAVegetable(data)
    .then(function (data) {
      getGarden()
    })
    .then(ui.deleteVegetableSuccess)
    .catch(ui.deleteVegetableFailure)
}

const updateComments = function (event) {
  event.preventDefault()
  const textAreaVal = $(event.target).closest('div').find('textarea').val()
  const gardenData = {garden: { 'id': $(event.target).attr('data-id'), 'comments': textAreaVal }}
  api.updateAComment(gardenData)
    .then(function (data) {
      getGarden()
    })
    .then(ui.updateCommentsSuccess)
    .catch(ui.updateCommentsFailure)
}

// event default was throwing error
const getAllVegetables = function () {
  console.log('getAllVegetables in events')
  // event.preventDefault()
  api.requestAllVegetables()
    .then(ui.allVegetablesSuccess)
    .then(function (data) {
      $('.add-veggie-button').on('click', addVegetable)
    })
    .catch(ui.allVegetableFailure)
}

const getGarden = function (data) {
  console.log('getGarden in events')
  api.requestGarden(data)
    .then(ui.getGardenSuccess)
    .then(function (data) {
      $('.delete-veggie-button').on('click', deleteVegetable)
      $('.update-comments-button').on('click', updateComments)
    })
    .catch(ui.getGardenFailure)
}

const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
}

module.exports = {
  addHandlers
}
