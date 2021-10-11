<template>
    <div class="flex items-center md:h-full">
        <div class="flex w-64 h-3/4 rounded-2xl bg-red-50">
            <div>
                Visual
            </div>
        </div>
    </div>
</template>

<script>
import { useStore } from 'vuex'
import { computed, ref } from 'vue';
export default {
    setup() {
        const store=useStore();
        const word=ref('')

        const wordUpdate=()=>{
            console.log(word)
        }
        
        return{
            folderList:computed(()=>store.state.folder.folderList),
            addingCard:computed(()=>store.state.visualize.addingCard),
            wordUpdate
        }
    },
}
</script>
