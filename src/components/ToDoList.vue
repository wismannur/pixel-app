<template>
  <div id="homeToDoList">
    <div id="mainNavbar">
      <h1>{{ msg }}</h1>
    </div>
    <div id="contentToDoList" class="container">
      <get-todo></get-todo>
      <div class="row">
        <div class="flex-6">
          <current-todos></current-todos>
        </div>
        <div class="flex-6">
          <completed-todos></completed-todos>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/javascript">
/* eslint-disable */
  import axios from 'axios'
  import GetTodo from './GetTodo.vue'
  import CurrentTodos from './CurrentTodos.vue'
  import CompletedTodos from './CompletedTodos.vue'
  export default {
    components: {
      GetTodo,
      CurrentTodos,
      CompletedTodos
    },
    data() {
      return {
        msg: 'Welcome to my ToDoList Web App'
      };
    },
    mounted() {
      // for call all data from jsonplaceholder
      this.$store.dispatch('getAllTodo')
    }
  }
</script>
