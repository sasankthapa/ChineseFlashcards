<template>
    <div class="flex h-10 rounded-2xl bg-red-50">
        <div v-if="addingCard">
            <input @change="wordUpdate()" v-model="word" type="text" placeholder="Word"/>
        </div>
        <div>
            Visual
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
