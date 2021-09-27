<template>
    <div class="flex items-center justify-center w-full p-20 px-10 ">
        <div class="block w-full h-full bg-gray-200 rounded-2xl">
            
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed } from 'vue';
export default {
    setup() {
        const store=useStore();
        
        return{
            folderList:computed(()=>store.state.folder.folderList),
            addingCard:computed(()=>store.state.visualize.addingCard)
        }
    },
}
</script>
