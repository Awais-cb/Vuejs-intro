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
				{{user.name}} : {{user.email}}
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
					{
						name:'Jhon doe',
						email:'jhondoe@gmail.com',
						contacted:0
					},
					{
						name:'Jeen doe',
						email:'jeendoe@gmail.com',
						contacted:0
					},
					{
						name:'Sarah tom',
						email:'sarahtom@gmail.com',
						contacted:0
					},
					{
						name:'Thomas nick',
						email:'thomasnick@gmail.com',
						contacted:0
					},
					{
						name:'Aslam peepa',
						email:'aslampeepa@gmail.com',
						contacted:0
					},
					{
						name:'Jeera malangi',
						email:'jeeramalangi@gmail.com',
						contacted:0
					},
					{
						name:'Jazib aslam',
						email:'jazibaslam@gmail.com',
						contacted:0
					},
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
			}
		}
	}
</script>

<style scoped>
	.contacted{
		text-decoration: line-through;
	}	
</style>