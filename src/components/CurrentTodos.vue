<template>
	<div id="current-todos" class="container">
		<h3> This Current Todos </h3>
		<h3> Current({{todos.length == 0 ? 0 : todos.length}}) </h3>
		<ul class="list-group" v-for="(todo, index) in todos" v-bind:key="index">
			<li class="list-group-item" v-if="!todo.completed">
				<div class="title">
					{{todo.title}}
				</div>
				<div class="btn-group">
					<button type="button" @click="edit(todo)" class="btn btn-warning btn-sm">
						<span class="glyphicon glyphicon-edit"></span> Edit
					</button>
					<button type="button" @click="complete(todo)" class="btn btn-success btn-sm">
						<span class="glyphicon glyphicon-ok-circle"></span> Complete
					</button>
					<button type="button" @click="remove(todo)" class="btn btn-danger btn-sm">
						<span class="glyphicon glyphicon-remove-circle"></span> Remove
					</button>
				</div>
			</li>
		</ul>
	</div>
</template>
<script>
/* eslint-disable */
	export default {
		methods: {
			edit(todo) {
				this.$store.dispatch('editTodo', todo)
			},
			complete(todo) {
				this.$store.dispatch('completeTodo', todo)
			},
			remove(todo) {
				this.$store.dispatch('removeTodo', todo)
			}
		},
		computed: {
			todos() {
				return this.$store.getters.todos
			}
		}
	}
</script>
<style>
	
</style>
