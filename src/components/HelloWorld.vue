<template>
	<div class="hello">
		<div class="hello">
			<button @click="show = !show" role="show-text">Show text</button>
			<div v-if="show">{{ msg }}</div>
		</div>

		<form @submit.prevent="submit">
			<label for="name">name</label>
			<input v-model="name" type="text" placeholder="name here" />
			<button role="button" :disabled="!name.length">Submit</button>
		</form>
	</div>
</template>

<script>
export default {
	name: 'HelloWorld',
	props: {
		msg: String,
	},
	data() {
		return {
			show: false,
			name: '',
		};
	},
	methods: {
		submit() {
			this.$emit('submit', { name: this.name });
			console.log('here');
		},
	},
};
</script>

<style scoped></style>
