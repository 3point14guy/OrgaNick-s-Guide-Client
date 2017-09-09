'use strict'
// file allows for getting inout typed into forms by users
const getFormFields = require(`../../lib/get-form-fields`)
// getting access to other files in tree using const name
const api = require('./api')
const ui = require('./ui')
// when user finishes sign-up process, initiate api/ajax call
// prevent default keeps page from refreshing when user selects submit
// .then is what should happen next
// .catch handles any errors that occur while runnning this function
const onSignUp = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

// the .then statements here call functions to make api/ajax calls for the vegetables, Garden, and pests resources
const onSignIn = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.signInSuccess)
    .then(getAllVegetables)
    .then(getGarden)
    .then(getAllPests)
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
// assigning data to be the id specified when selecting the button under that id
// $()handler is called after the vegetables resource is loaded on the page
const addVegetable = function (event) {
  event.preventDefault()
  const data = {garden: {'vegetable_id': $(event.target).attr('data-id')}}
  api.addAVegetable(data)
    .then(ui.addVegetableSuccess)
    .then(function (data) {
      getGarden()
      $('#delete-vegetable').on('submit', deleteVegetable)
    })
    .catch(ui.addVegetableFailure)
}

const deleteVegetable = function (event) {
  event.preventDefault()
  const data = $(event.target).attr('data-id')
  api.deleteAVegetable(data)
    .then(function (data) {
      getGarden()
    })
    .then(ui.deleteVegetableSuccess)
    .catch(ui.deleteVegetableFailure)
}
// assigning the data that should be passed to the PATCH request using the values that are closest to the buttons being selected and fields for which data is being entered
const updateComments = function (event) {
  event.preventDefault()
  const textAreaVal = $(event.delegateTarget).parents('li').siblings('.theseComments').children('textarea').val()
  const gardenData = {garden: { 'id': $(event.target).attr('data-id'), 'comments': textAreaVal }}
  api.updateAComment(gardenData)
    .then(function (data) {
      getGarden()
    })
    .then(ui.updateCommentsSuccess)
    .catch(ui.updateCommentsFailure)
}

// commented out event default that was throwing error
// handler added here so that it is available after resource data loads
const getAllVegetables = function () {
  // event.preventDefault()
  api.requestAllVegetables()
    .then(ui.allVegetablesSuccess)
    .then(function (data) {
      $('.add-veggie-button').on('click', addVegetable)
    })
    .catch(ui.allVegetableFailure)
}

const getGarden = function (data) {
  api.requestGarden(data)
    .then(ui.getGardenSuccess)
    .then(function (data) {
      $('.delete-veggie-button').on('click', deleteVegetable)
      $('.update-comments-button').on('click', updateComments)
    })
    .catch(ui.getGardenFailure)
}

const getAllPests = function () {
  api.requestPests()
  .then(ui.allPestsSuccess)
  .catch(ui.allPestsFailure)
}
// handlers for buttons on page
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#change-password').on('submit', onChangePassword)
  $('#logout').on('submit', onLogout)
}

module.exports = {
  addHandlers
}
