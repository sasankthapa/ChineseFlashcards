<template>
    <h1 v-if="cm.showMainMenu">hell</h1>
    <div class="flex">
        <div v-if="cm.showLogin" class="flex justify-center h-full align-center">
            login
            <button @click="switchCurrent('main')">button</button>
        </div>
        <div v-if="cm.showMainMenu" class="flex justify-center h-full align-center">
        </div>
        <div v-if="cm.showFolder" class="flex justify-center h-full align-center">
        </div>
        <div v-if="cm.showCards" class="flex justify-center h-full align-center">
        </div>
        <div v-if="cm.showVisualizer" class="flex justify-center h-full align-center">
        </div>
    </div>
    <button @click="switchCurrent('main')">button</button>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import {useStore} from 'vuex'

export default {
    setup(){
        const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('updateAppState',curr);
        }

        onMounted(()=>{
            const api_key=localStorage.getItem('API_KEY')
            if(api_key!==null){
                store.dispatch('user/loginUser')
            }
        });        

        console.log

        return {
            cm:store.getters['cm/getContentVars'],
            switchCurrent
        };
    }
}
</script>

