<template>
	<div class="test">
		<h1>Users</h1>
		<form v-on:submit="addUser">
			<input type="text" v-model="newUser.name" placeholder="Enter name" required><br>
			<input type="email" v-model="newUser.email" placeholder="Enter email" required><br>
			<input type="submit" value="Submit">
		</form>
		<ul>
			
			
		<li v-for="user in users">
			<input type="checkbox" class="toggle" v-model="user.contacted">
			<!-- binding css class with element (bind class contacted if user.contacted is true)-->
			<span :class="{contacted : user.contacted}">
				{{user.name}} : {{user.email}} <button v-on:click="deleteUser(user)">x</button>
			</span>
		</li>
		</ul>
	</div>
</template>

<script>
	export default{
		name:'users',
		// data() function is going to return all the content required in webpage including objects,arrays,properties
		data(){
			return {
				// setting new user to empty object to add users into it afterwards
				newUser:{},
				users:[
					
				]
			}
		},
		// methods object is going to contain all the custom methods you will define in a component
		methods:{
			addUser:function (e) {
				e.preventDefault();
				this.users.push({
					name:this.newUser.name,
					email:this.newUser.email,
					contacted:0
				});
			},
			deleteUser:function (user) {
				this.users.splice(this.users.indexOf(user),1);
			}
		},
		// created is one of the life cycle hooks which is available in vuejs "created" hook can be used to run code right after an instance is created (Templates and Virtual DOM have not yet been mounted or rendered yet.)
		created:function (argument) {
			// using 'http' resource
			// https resource will return a promise which will be handles in 'then()'
			this.$http.get('https://jsonplaceholder.typicode.com/users').then(function (response) {
				this.users = response.data;
			});
		}

	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}	
</style>