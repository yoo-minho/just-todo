import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'
import { Item, State } from '@/store/store.interface'

Vue.use(Vuex)

const store: StoreOptions<State> = {
  state: {
    todoList: [
      { id: 0, title: 'test', status: 'active' },
      { id: 1, title: 'test1', status: 'clear' },
      { id: 2, title: 'test2', status: 'active' }
    ]
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
    }
  },
  actions: {},
  getters: {
    allTodoList: (state) => state.todoList,
    activeTodoList: (state) => state.todoList.filter(({ status }: Item) => status === 'active'),
    clearTodoList: (state) => state.todoList.filter(({ status }: Item) => status === 'clear')
  }
}

export default new Vuex.Store(store)
