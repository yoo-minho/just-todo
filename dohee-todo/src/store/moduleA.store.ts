import { Action, Module, getModule, Mutation, VuexModule } from 'vuex-module-decorators'
import store from '@/store/store'

@Module({ namespaced: true, store, name: 'moduleA' })
class ModuleA extends VuexModule {
  data222 ='moduleA1111'

  @Mutation
  setData (data:string):void {
    this.data222 = data
  }

  @Action
  setRootData2 (data:string):void {
    this.context.commit('setData', data)
    console.log('aaaaa', this.context.getters)
  }

  get moduleAData ():string {
    return this.data222
  }
}

export default ModuleA

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
