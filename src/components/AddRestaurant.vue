<template>
    <div>
        <HeaderComponent/>
        <h1>Hello {{name}}, Welcome on Add Restaurant Page</h1>
        <form class="add">
            <input name="name" type="text" placeholder="Enter Name" v-model="restaurant.name"/>
            <input name="address" type="text" placeholder="Enter Address" v-model="restaurant.address"/>
            <input name="contact" type="text" placeholder="Enter Contact" v-model="restaurant.contact"/>
            <button type="button" v-on:click="addRestaurant">Add new Restaurant</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios'
import HeaderComponent from './HeaderComponent.vue'

export default {
    name:'AddRestaurant',

    components:{
        HeaderComponent
    },
    data(){
        return{
            name:'',
            restaurant:{
                name:'',
                address:'',
                contact:''
            }
        }
    },
    mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'})
        }
    },
    methods:{
        async addRestaurant(){
            const result = await axios.post('http://localhost:3000/restaurants', {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address,
            });
            if(result.status === 201){
                this.$router.push({name:'HomePage'})
            }
        }
    }
}
</script>