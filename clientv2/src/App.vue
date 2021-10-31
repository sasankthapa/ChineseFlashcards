<script setup>
import { computed, onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'
import LoginRegister from './components/LoginRegister.vue'
import ContentManager from './components/ContentManager.vue'
import Header from './components/Header.vue'

const store=useStore();

const loggedIn=computed(()=>store.state.user.loggedIn);

onMounted(async()=>{
    const api_key=localStorage.getItem('API_KEY')
    if(api_key!==null){
        console.log("trying to get key")
        await store.dispatch('user/refreshUser',api_key)
    }

    // has key?
    if(store.state.user.api_key){
        store.dispatch('cm/updateContent')                
    }

    store.dispatch('cm/updateContent')
});        

</script>

<template>
<div>
<Header />
<ContentManager v-if="loggedIn"/>
<LoginRegister v-if="!loggedIn"/>
</div>
</template>
