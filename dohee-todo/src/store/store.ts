import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import moduleA from './moduleA.store'
import moduleB from './moduleB.store'
import { getModule } from 'vuex-module-decorators'

Vue.use(Vuex)

export interface RootState {
  data1: string
}

const store : StoreOptions<RootState> = {
  modules: {
    moduleA,
    moduleB
  },
  state: {
    data1: 'root'
  },
  mutations: {
    setData (state, data:string) {
      state.data1 = data
    }
  },
  actions: {
    setRootData ({ commit }, data:string) {
      commit('setData', data)
    }
  },
  getters: {
    data22: (state) => state.data1
  }
}

const vuexStore = new Vuex.Store(store)
getModule(moduleA, vuexStore)
export default vuexStore
