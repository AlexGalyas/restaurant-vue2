import Vue from 'vue';
import Router from 'vue-router';

import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'


Vue.use(Router);


const router = new Router ({
    mode:'history',
    routes:[
        {   
            path:'/',
            name:'HomePage',
            component:HomePage,
            
        },
        {
            path:'/sign-up',
            name:'SignUp',
            component:SignUp,
            
        },
        {
            path:'/login',
            name:'Login',
            component:LoginPage,
            
        },
        {
            path:'/add',
            name:'Add',
            component:AddRestaurant,
            
        },
        {
            path:'/update/:id',
            name:'Update',
            component:UpdateRestaurant,
            
        }
    ]
});

export default router;
