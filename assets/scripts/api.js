'use strict'

const config = require('./config')
const store = require('./store')

const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up/',
    method: 'POST',
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
const changePassword = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}
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

const requestPests = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/pests',
    method: 'GET'
  })
}

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
