import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todos: [],
    newTodo: ''
  },
  mutations: {
    GET_TODO (state, todo) {
      state.newTodo = todo
    },
    ADD_TODO (state) {
      state.todos.push({
        title: state.newTodo,
        completed: false
      })
      alert('Berhasil menambahkan satu ToDoList.!!!')
    },
    EDIT_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      state.todos = todos
      state.newTodo = todo.title
      alert('Berhasil mengubah satu ToDoList.!!!')
    },
    REMOVE_TODO (state, todo) {
      var todos = state.todos
      todos.splice(todos.indexOf(todo), 1)
      alert('Berhasil menghapus satu ToDoList.!!!')
    },
    COMPLETE_TODO (state, todo) {
      todo.completed = !todo.completed
      alert(todo.title + ' Completed.!')
    },
    CLEAR_TODO (state) {
      state.newTodo = ''
    },
    GET_ALL_TODO (state, todo) {
      state.todos = todo.data
    }
  },
  actions: {
    getTodo ({ commit }, todo) {
      commit('GET_TODO', todo)
    },
    addTodo ({ commit }) {
      commit('ADD_TODO')
    },
    editTodo ({ commit }, todo) {
      commit('EDIT_TODO', todo)
    },
    removeTodo ({ commit }, todo) {
      commit('REMOVE_TODO', todo)
    },
    completeTodo ({ commit }, todo) {
      commit('COMPLETE_TODO', todo)
    },
    clearTodo ({ commit }) {
      commit('CLEAR_TODO')
    },
    getAllTodo ({commit}) {
      async function getTodos () {
        try {
          const response = await axios.get('https://jsonplaceholder.typicode.com/todos?userId=1')
          commit('GET_ALL_TODO', response)
          console.log('ini response ', response)
        } catch (error) {
          console.error(error)
          commit('GET_ALL_TODO', error)
        }
      }
      getTodos()
    }
  },
  getters: {
    newTodo: state => state.newTodo,
    todos: state =>
      state.todos.filter(todo => {
        return !todo.completed
      }),
    completedTodos: state =>
      state.todos.filter(todo => {
        return todo.completed
      })
  }
})
