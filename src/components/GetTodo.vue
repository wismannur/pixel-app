<template>
	<div id="getTodo">
		<h5 class="title-add">Add New ToDoList</h5>
		<input class="form-control" :value="newTodo" v-on:keyup.enter="submit" @change="getTodo" placeholder="I need to...">
		<button class="btn btn-primary" @click="addTodo">Add Todo</button>
	</div>
</template>
<script type="text/javascript">
/* eslint-disable */
	export default {
		methods: {
			getTodo(e) {
				this.$store.dispatch('getTodo', e.target.value)
			},
			addTodo() {
				this.$store.dispatch('addTodo')
				this.$store.dispatch('clearTodo')
			},
			submit(e) {
				this.$store.dispatch('getTodo', e.target.value)
				this.addTodo()
			}
		},
		computed: {
			newTodo() {
				return this.$store.getters.newTodo
			}
		}
	}
</script>
