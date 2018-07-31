<template>
	<div class="test">
		
		<!-- simple data binding -->
		<hr>
		<h1>----- Simple data binding -----</h1>
		<h1>{{title}}</h1>
		<h1>This is new test app created in VUE.JS</h1>
		
		<!-- dynamic data binding -->
		<hr>
		<h1>----- Dynamic binding -----</h1>
		<input type="text" name="" value="" placeholder="" v-model="title2">
		<h1>{{title2}}</h1>

		<!-- displaying data coming in an object -->
		<hr>
		<h1>----- Data comming from object -----</h1>
		<p>Hey {{user.first_name}}</p>
		
		<!-- text binding -->
		<hr>
		<h1>----- Text binding -----</h1>
		<p v-text="user.last_name"></p>
		
		<!-- html binding -->
		<hr>
		<h1>----- Html binding -----</h1>
		<span>{{user.to_do}}</span>
		<span v-html="user.to_do"></span>
		
		<!-- Conditionals -->
		<hr>
		<h1>----- Conditionals -----</h1>
		<h1 v-if="showFullName">{{user.first_name}} {{user.last_name}}</h1>
		<!-- only v-else can be used too -->
		<h1 v-else="showFullName">Can't show the full name</h1>

		<!-- Loop -->
		<hr>
		<h1>----- Loops -----</h1>
		<ul>
			<li v-for="item in items">{{item.title}}</li>
		</ul>

		<!-- Events -->
		<hr>
		<h1>----- Events -----</h1>
		<button v-on:click="greet" >Say Greeting</button>
		<br>
		<br>
		<!-- Event with parameter -->
		<button v-on:click="greet2('Heelo world')" >Say Greeting</button>
		<br>
		<br>
		<!-- Event with with action like 'Enter' -->
		<input type="text" v-on:keyup="keyPressed" v-on:keyup.enter="enterHit" placeholder="type somthing here an enter" />
		
		<hr>
		<h1>----- Computed properties -----</h1>
		<label><input type="text" name="" value="" v-model="user.first_name"></label>
		<br>
		<label><input type="text" name="" value="" v-model="user.last_name"></label>
		<h1>{{fullName}}</h1>
		
		<hr>
		<h1>----- Component properties -----</h1>
		<h1>{{msg}}</h1>
	</div>
</template>

<script>
	export default{
		name:'test',
		// component properties
		props:{
			msg:{
				type:String,
				default:'fooBar Oye'
			}
		},
		// data() function is going to return all the content required in webpage including objects,arrays,properties
		data(){
			return {
				title:'Hello Fuckin World',
				title2:'Hello Fuckin World2',
				user:{
					first_name:'Awais',
					last_name:'Fiaz',
					to_do:'<h4>Alot in life</h4>'
				},
				items:[
					{title:'Item 1'},
					{title:'Item 2'},
					{title:'Item 3'},
					{title:'Item 4'},
					{title:'Item 5'}
				],
				showFullName:0
			}
		},
		// methods object is going to contain all the custom methods you will define in a component
		methods:{
			greet:function () {
				alert("Hello motha fucka");
			},
			greet2:function (param) {
				alert(param);
			},
			keyPressed:function(e) {
				console.log(e.target.value); 
			},
			enterHit:function () {
				alert('You hit enter');
			}
		},
		// defining computed methods (methods which will do computation in run time and will return computed properties)
		computed:{
			fullName:function () {
				return this.user.first_name+" "+this.user.last_name;
			}
		}

	}
</script>

<style scoped>
		
</style>