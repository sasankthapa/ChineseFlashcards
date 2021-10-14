<template>
    <div class="flex flex-col w-screen h-screen bg-gray-600 md:justify-evenly md:flex-row">
        <div v-if="showLogin" class="flex flex-col items-center justify-center w-full h-full text-center transition-all">
            <LoginRegister />
        </div>
        <MainMenu v-if="showMainMenu"/>
        <Visualizer v-if="showVisualizer"/>
        <Folder v-if="showFolder"/>
        <div v-if="showCards" class="justify-center">
        </div>
    </div>
</template>

<script>
import { onMounted } from "@vue/runtime-core";
import { computed, defineComponent } from 'vue';
import { useStore } from '../store/index';
import LoginRegister from './LoginRegister.vue';
import MainMenu from './MainMenu.vue'
import Folder from './Folder.vue'
import Visualizer from './Visualizer.vue'

export default defineComponent({
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
})
</script>

