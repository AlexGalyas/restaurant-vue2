<template>

  <div id="app">
    <!-- <SignUp/> -->
      <router-view></router-view>
  </div>
</template>


<script>
// import SignUp from './components/SignUp.vue'

export default {
  name: 'App'
  // components:{
  //   SignUp
  // }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
  padding:0;
  margin:0;
}
.logo{
    width:100px;
    margin-top:20px;
}
.register input, .login input, .add input{
    width:300px;
    height:40px;
    padding-left:20px;
    display:block;
    margin-bottom:30px;
    margin-left:auto;
    margin-right:auto;
    border:1px solid red;
    border-radius:0.5rem;
    outline:none;
}

.register button, .login button, .add button{
    width:320px;
    height:40px;
    border:1px solid red;
    background-color:red;
    color:#fff;
    border-radius:0.5rem;
    cursor:pointer;
}
.formButton{
  color:red;
  text-decoration:none;
  border:1px solid red;
  padding:10px;
  font-size:14px;
  border-radius:0.5rem;
  transition:0.2s all ease;
}
.formButton:hover{
  background:red;
  color:#fff;
}
</style>
