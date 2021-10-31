<template>
    <div class="flex w-full h-full justify-center">
        <!-- this should be done through routing -->
        <MainMenu v-if="showMainMenu"/>
        <Visualizer v-if="showVisualizer"/>
        <Folder v-if="showFolder"/>
        <div v-if="showCards" class="justify-center">

        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { onMounted } from "@vue/runtime-core";
import { useStore } from 'vuex'
import { computed } from 'vue';
import LoginRegister from './LoginRegister.vue';
import MainMenu from './MainMenu.vue'
import Folder from './Folder.vue'
import Visualizer from './Visualizer.vue'

export default defineComponent({
    setup() {
         const store=useStore();

        const switchCurrent=(curr)=>{
            store.dispatch('switchCurrent',curr);
        }

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

