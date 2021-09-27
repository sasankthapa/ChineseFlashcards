<template>
    <div v-if="showLogin" class="flex flex-col items-center justify-center w-screen h-screen text-center transition-all">
        <LoginRegister />
    </div>
    <div v-else class="flex h-screen">
        <div v-if="showMainMenu" class="flex justify-center h-full align-center">
            main menu
        </div>
        <div v-if="showFolder" class="flex justify-center h-full align-center">
            folder
        </div>
        <div v-if="showCards" class="flex justify-center h-full align-center">
            cardos
        </div>
        <div v-if="showVisualizer" class="flex justify-center h-full align-center">
            visualizer
        </div>
    </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import { computed } from 'vue';
import LoginRegister from './LoginRegister.vue';

export default {
    setup(){
        const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('switchCurrent',curr);
        }

        onMounted(async()=>{
            const api_key=localStorage.getItem('API_KEY')
            if(api_key!==null){
                await store.dispatch('user/loginUser',api_key)
            }
            store.dispatch('cm/updateContent')
        });        

        return {
            showMainMenu:computed(()=>store.state.cm.showMainMenu),
            showLogin:computed(()=>store.state.cm.showLogin),
            showFolder:computed(()=>store.state.cm.showFolder),
            showCards:computed(()=>store.state.cm.showCards),
            showVisualizer:computed(()=>store.state.cm.showVisualizer),
            switchCurrent,
        };
    },
    components:{LoginRegister}
}
</script>

