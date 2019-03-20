import Vue from 'vue'
import AuthService from '../msal/msal'

Vue.prototype.$AuthService = new AuthService()
