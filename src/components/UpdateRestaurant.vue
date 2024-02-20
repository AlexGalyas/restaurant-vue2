<template>
    <div>
        <HeaderComponent/>
        <h1>Hello {{name}}, Welcome on Update Restaurant Page</h1>
        <form class="add">
            <input name="name" type="text" placeholder="Enter Name" v-model="restaurant.name"/>
            <input name="address" type="text" placeholder="Enter Address" v-model="restaurant.address"/>
            <input name="contact" type="text" placeholder="Enter Contact" v-model="restaurant.contact"/>
            <button type="button" v-on:click="updateRestaurant">Update Restaurant</button>
        </form>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'

export default {
    name:'UpdateRestaurant',
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
    components:{
        HeaderComponent
    },
    async mounted()
    {
        let user = localStorage.getItem('user-info');
        this.name = JSON.parse(user).name;
        if(!user){
            this.$router.push({name:'SignUp'})
        }
        const result = await axios.get('http://localhost:3000/restaurants/' + this.$route.params.id)
        this.restaurant = result.data
    },
    methods: {
        async updateRestaurant(){
            const result = await axios.put('http://localhost:3000/restaurants/' + this.$route.params.id , {
                name:this.restaurant.name,
                contact:this.restaurant.contact,
                address:this.restaurant.address,
            });
            if(result.status === 200){
                this.$router.push({name:'HomePage'})
            }
        }
    },
}
</script>