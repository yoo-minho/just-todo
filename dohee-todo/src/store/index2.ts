import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { Item, State } from '@/store/store.interface'
import AxiosService from '@/service/axios.service'
import { AxiosResponse } from 'axios'

Vue.use(Vuex)

const store: StoreOptions<State> = {
  state: {
    todoList: []
  },
  mutations: {
    addItem (state, item: Item): void {
      state.todoList.push(item)
    },
    changeStatus (state, { id, status }: { id: number, status: 'active' | 'clear' }): void {
      state.todoList[id].status = status
    },
    removeItem (state, id: number): void {
      state.todoList.splice(id, 1)
    },
    setTodoList (state, todoList: Item[]) {
      state.todoList = todoList
    }
  },
  actions: {
    async initData ({ commit }) {
      const response: AxiosResponse<{todoList: Item[]}> = await AxiosService.instance.get('/data.json')
      commit('setTodoList', response.data.todoList)
    }
  },
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => state.todoList.filter(({ status }: Item) => status === 'active'),
    clearTodoList: (state) => state.todoList.filter(({ status }: Item) => status === 'clear')
  }
}

export default new Vuex.Store(store)
