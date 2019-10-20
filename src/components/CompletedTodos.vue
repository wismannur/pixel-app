<template>
	<div id="completed-todos">
		<h3> This Completed Todos </h3>
		<h3>Completed({{completed.length == 0 ? 0 : completed.length}})</h3>
		<ul class="list-group" v-for="(todo, index) in completed" v-bind:key="index">
			<li class="list-group-item">
				<div class="title">
					{{todo.title}}
				</div>
				<div class="btn-group">
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
			remove(todo) {
				this.$store.dispatch('removeTodo', todo)
			}
		},
		computed: {
			completed() {
				return this.$store.getters.completedTodos
			}
		}
	}
</script>
