// helps to correct bad syntax and avoid misnaming or unused variables
'use strict'
// gives access to code in the config and store files
const config = require('./config')
const store = require('./store')
// sends POST request to API for sigining up to this app
const signUp = function (data) {
  return $.ajax({
    // uses value set at config.apiOrigin to specify where to make the request to and then adds .sign-up/ to the end of that URL
    url: config.apiOrigin + '/sign-up/',
    // crud action here will be a POST request as we are creating new data
    method: 'POST',
    // data is syntactic sugar for data: data
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in/',
    method: 'POST',
    data
  })
}
// PATCH request requires resource ID on the end of the URL to know which row to update
const changePassword = function (data) {
  return $.ajax({
    // the user.id was assigned to the store variable in the ui.js file and is accessible here bc store is a global variable in store.js
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    // ensures that user can only change their own password by adding key:value pair with unique identifying token for the user
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
// user.id and user.token are passed to ensure logout of correct user
const logout = function () {
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// gets a list of all vegetables currently in the db
const requestAllVegetables = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/vegetables',
    method: 'GET'
  })
}

// adds a vegetable to the user's garden
const addAVegetable = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gardens',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const deleteAVegetable = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gardens/' + data,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
// gets list of veggies in the user's garden
const requestGarden = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gardens',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

// adds a comment when the veggie is a plant in user's garden
const updateAComment = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/gardens/' + data.garden.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}
// gets all entries in the Pests table
const requestPests = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pests',
    method: 'GET'
  })
}
// exports all functions to make them available by other files
module.exports = {
  signUp,
  signIn,
  changePassword,
  logout,
  requestAllVegetables,
  requestGarden,
  addAVegetable,
  deleteAVegetable,
  updateAComment,
  requestPests
}
