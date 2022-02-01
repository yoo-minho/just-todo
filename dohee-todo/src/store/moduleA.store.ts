import { Module, VuexModule, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true, name: 'moduleA' })
export default class ModuleA extends VuexModule {
  data ='moduleA'

  setData (data:string):void {
    this.data = data
  }
}

// import { Module } from 'vuex'
// import { RootState } from '@/store/store'
//
// interface moduleA {
//   data: string
// }
//
// const module : Module<moduleA, RootState> = {
//   namespaced: true,
//   state: {
//     data: 'moduleA'
//   },
//   mutations: {
//     setData (state, data:string) {
//       state.data = data
//     }
//   },
//   actions: {
//     setRootData ({ commit }, data:string) {
//       commit('setData', data)
//     }
//   },
//   getters: {
//     data: (state) => state.data
//   }
// }
//
// export default module
