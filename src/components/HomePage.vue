<template>
    <div>
        <HeaderComponent/>
        <h1>Hello {{name}}, Welcome on Home Page</h1>

        <table border='1'>
            <tr>
                <td>Id</td>
                <td>Name</td>
                <td>Contact</td>
                <td>Address</td>
                <td>Actions</td>
            </tr>
            <tr v-for="item in restaurants" :key="item.id">
                <td>{{item.id}}</td>
                <td>{{item.name}}</td>
                <td>{{item.contact}}</td>
                <td>{{item.address}}</td>
                <td>
                <router-link :to='"/update/" + item.id'>Update</router-link>
                <button v-on:click="deleteRestaurant(item.id)">Delete</button>
                </td>
            </tr>
        </table>
    </div>
</template>

<script>
import HeaderComponent from './HeaderComponent.vue'
import axios from 'axios'

export default {
    name:'HomePage',
    data(){
        return{
            name:'',
            restaurants:[],
        }
    },
    components:{
        HeaderComponent
    },
    mounted()
    {
       this.loadData()
    },
    methods:{
        async deleteRestaurant(id){
            let result = await axios.delete('http://localhost:3000/restaurants/' + id);
            if(result.status === 200){
                this.loadData();
            }
        },
        async loadData(){
            let user = localStorage.getItem('user-info');
            this.name=JSON.parse(user).name;
            if(!user){
                this.$router.push({name:'SignUp'})
            }

            let result = await axios.get('http://localhost:3000/restaurants');
            this.restaurants = result.data;
        }
    }
}
</script>

<style>
    td{
        width:160px;
        height:50px;
    }
    table{
        border-collapse:collapse;
    }
</style>