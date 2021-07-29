<template>
	<div class="container">
		<h1>Home</h1>
		<div v-if="isLogged">
			Hello, {{ userInfo.name }}
      <vs-button  type="border" @click="logout">Logout</vs-button>
		</div>
		<div v-else>
			<router-link to="login">Login</router-link>
		</div>
	</div>	
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	computed: {
		...mapGetters({
			userInfo: 'auth/userInfo',
			isLogged: 'auth/isLogged'
		})
	},
	methods: {
		...mapActions({
			logout: 'auth/logout'
		})
	},
	mounted() {
		console.log(this.userInfo)
	}
}
</script>

<style>

</style>