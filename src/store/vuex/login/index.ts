import { Module } from 'vuex'
import type { ILoginState } from './login-type'
import type { IRootState } from '../type'
const login: Module<ILoginState, IRootState> = {
  namespaced: true,
  state() {
    return {
      login: 'hello we are login module',
    }
  },
  getters: {},
  mutations: {},
  actions: {},
}
export default login
