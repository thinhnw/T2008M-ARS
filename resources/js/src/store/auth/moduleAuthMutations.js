/*=========================================================================================
  File Name: moduleAuthMutations.js
  Description: Auth Module Mutations
  ----------------------------------------------------------------------------------------
  Item Name: Vuexy - Vuejs, HTML & Laravel Admin Dashboard Template
  Author: Pixinvent
  Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/

import axios from '../../http/axios/index.js'
import Vue from 'vue'

export default {
  SET_BEARER (state, accessToken) {
    axios.defaults.headers.common['Authorization'] = `Bearer ${accessToken}`
  },
  UPDATE_USER_INFO(state, userInfo) {
    console.log('UPDATE', userInfo)
    // state.userInfo = userInfo
    Object.keys(userInfo).forEach(key => {
      Vue.set(state.userInfo, key, userInfo[key])
    })
  },
  CLEAR_USER_INFO(state) {
    state.userInfo = {}
  }
}
