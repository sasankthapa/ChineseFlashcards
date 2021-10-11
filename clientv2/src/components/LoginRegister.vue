<template>
    <div class="h-auto p-8 font-bold text-center bg-purple-100 rounded-lg shadow-xl w-72">
        <h1 v-if="register" class="mb-3 text-lg ">Register</h1>
        <h1 v-else class="mb-3 text-lg ">Login</h1>
        <div class="p-1 text-left">
            <label class="" for="username">Username:</label>
            <input v-model="username" id="username" autocomplete="off" class="w-full p-1 text-center rounded-sm shadow-md focus:outline-none focus:ring ring-red-400" type="text" @change="hel"/>
        </div>
        <div v-if="register" class="p-1 text-left">
            <label class="pb-2" for="email">Email:</label>
            <input v-model="email" id="email" autocomplete="off" class="w-full p-1 text-center rounded-sm shadow-md focus:outline-none focus:ring ring-red-400" type="text" @change="hel"/>
        </div>
        <div class="p-1 text-left">
            <label class="pb-2" for="password">Password:</label>
            <input v-model="password" id="password" autocomplete="off" class="w-full p-1 text-center rounded-sm shadow-md focus:outline-none focus:ring ring-red-400" type="password" @change="hel"/>
        </div>
        <button @click="submit" class="block w-full p-2 mt-5 bg-blue-300 rounded-md hover:border-2 hover:bg-blue-500">Submit</button>
        <span @click="switchCurrent" class="block mt-5 text-sm font-normal text-blue-700 cursor-pointer">
        <span v-if="register">Login</span>
        <span v-else>Register</span>
        </span>
        <div class="p-4 bg-red-200 cursor-pointer" @click="fakeLogin">
            fake
        </div>
    </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import {useStore} from 'vuex';

export default {
    setup(){
        const store=useStore();
        const register=ref(false);
        const username=ref('')
        const email=ref('');
        const password=ref('');

        const fakeLogin=()=>{
            store.dispatch('user/fakeLogin');
        }

        const loginUser=()=>{
            store.dispatch('user/loginUser',{
                username:username.value,password:password.value
            });
        }

        const registerUser=()=>{
            store.dispatch('user/registerUser',{
                username:username.value,email:email.value,password:password.value
            })
        }

        const submit=()=>{
            console.log(username.value,email.value,password.value)
            if(register.value){
                registerUser()
            }else{
                loginUser()
            }
        }
    
        const switchCurrent=()=>{
            register.value=!register.value;
        }

        return{
            register,
            username,
            email,
            password,
            switchCurrent,
            submit,
            fakeLogin
        }
    }
}
</script>
