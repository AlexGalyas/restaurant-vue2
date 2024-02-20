<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/add">Add Restaurant</router-link>
        <a v-on:click="logout()" href="#">Logout</a>

    </div>
</template>

<script>
export default {
    name:'HeaderComponent',
    methods:{
        logout(){
            localStorage.clear();
            this.$router.push({name:'Login'})
        }
    }
}
</script>

<style>
    .nav{
        background-color:red;
        overflow:hidden;
    }
    .nav a{
        float:left;
        color:#fff;
        text-decoration:none;
        padding:1rem;
        font-size:1rem;
        margin-right:5px;
        transition:0.2s all ease;
    }
    .nav a:hover{
        background:#fff;
        color:red;
    }
</style>