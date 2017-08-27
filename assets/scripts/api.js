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
const requestAllVegetables = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/vegetables',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const deleteAVegetable = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/vegetables/' + data.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const addAVegetable = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/vegetables',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

// const updateAComment = function (vegetable) {
//   const data = vegetable
//   return $.ajax({
//     url: config.apiOrigin + '/vegetables/' + vegetable.id,
//     method: 'PATCH',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data
//   })
// }
module.exports = {
  signUp,
  signIn,
  changePassword,
  logout,
  requestAllVegetables,
  deleteAVegetable,
  addAVegetable
  // updateAComment
}
