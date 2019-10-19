<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <to-do-list v-bind:todos="todos"></to-do-list>
    <create-to-do v-on:create-todo="createTodo"></create-to-do>
  </div>
</template>

<script>
/* eslint-disable */
import ToDoList from './ToDoList'
import CreateToDo from './CreateToDo'

export default {
  name: 'HelloWorld',
  components: {
    ToDoList,
    CreateToDo
  },
   data() {
    return {
      msg: 'Welcome to my Project ToDo List Vue JS App!',
      todos: [{
        title: 'Todo A',
        project: 'Project A',
        done: false,
      }, {
        title: 'Todo B',
        project: 'Project B',
        done: true,
      }, {
        title: 'Todo C',
        project: 'Project C',
        done: false,
      }, {
        title: 'Todo D',
        project: 'Project D',
        done: false,
      }],
    };
  },
  methods: {
    createTodo(newTodo) {
      this.todos.push(newTodo);
      sweetalert('Success!', 'To-Do created!', 'success');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
