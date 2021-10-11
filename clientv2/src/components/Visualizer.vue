<template>
    <div class="flex items-center md:h-full">
        <div class="flex items-start w-64 h-3/4 rounded-2xl bg-red-50">
            <div class="flex justify-center w-full p-1 bg-green-400 rounded-t-2xl">
                <input @change="wordUpdate" v-model="word" class="text-center rounded-md" type="text" placeholder="Character"/>
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
            console.log(word.value)
            store.dispatch('visualizer/wordChange',word.value);
        }
        
        return{
            folderList:computed(()=>store.state.folder.folderList),
            addingCard:computed(()=>store.state.visualize.addingCard),
            wordUpdate
        }
    },
}
</script>
