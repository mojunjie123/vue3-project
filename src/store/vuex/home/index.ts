import { Module } from 'vuex'
// 导入home的state类型
import type { IHomeState } from './home-type'
import type { IRootState } from '../type'
// 借助vuex中的 Module接口 给子模块传入本模块与父模块的state的类型.
// 第一个传本模块的类型,第二个传父模块的类型
const home: Module<IHomeState, IRootState> = {
  namespaced: true,
  state() {
    return {
      invitationProgress: 3,
    }
  },
  getters: {},
  mutations: {},
  actions: {},
}
export default home
