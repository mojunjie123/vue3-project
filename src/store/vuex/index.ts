// 1.在这里导入useStore,为了区别自己导出的useStore给他取一个别名为useVuexStore(随意)
import { createStore, Store, useStore as useVuexStore } from 'vuex'
// 2.导入整个store的类型
import type { IStore } from './type'
const store = createStore<IStore>({
  state: () => {
    return {
      name: 'red',
      age: 20,
      home: { invitationProgress: 18 },
      login: { login: 'hello' },
    }
  },
  getters: {},
  mutations: {},
  actions: {},
})
export default store
//2.自己写一个useStore并导出. 函数返回值是Store,Store的类型的是自己编写的IStore.
export function useStore(): Store<IStore> {
  // 执行从vuex导入useStore并return出去
  return useVuexStore()
}
