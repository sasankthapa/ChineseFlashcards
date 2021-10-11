<template>
    <div class="flex flex-col w-screen h-screen bg-gray-600 md:flex-row">
        <div v-if="showLogin" class="flex flex-col items-center justify-center w-full h-full text-center transition-all">
            <LoginRegister />
        </div>
        <div v-if="showMainMenu">
            <MainMenu />
        </div>
        <div v-if="showVisualizer" class="p-2">
            <Visualizer />
        </div>
        <div v-if="showFolder" class="p-2">
            <Folder />
        </div>
        <div v-if="showCards" class="justify-center">
            cardos
        </div>
    </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import { computed } from 'vue';
import LoginRegister from './LoginRegister.vue';
import MainMenu from './MainMenu.vue'
import Folder from './Folder.vue'
import Visualizer from './Visualizer.vue'

export default {
    setup(){
        const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('switchCurrent',curr);
        }

        onMounted(async()=>{
            const api_key=localStorage.getItem('API_KEY')
            if(api_key!==null){
                await store.dispatch('user/refreshUser',api_key)
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
    components:{LoginRegister,MainMenu,Folder,Visualizer}
}
</script>

