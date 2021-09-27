<template>
    <div class="flex items-center justify-center w-full p-20 px-10 ">
        <div class="block w-full h-full overflow-y-auto bg-gray-200 rounded-2xl">
            <div class="w-full px-5 py-1 mb-1 bg-green-400 rounded-t-2xl">
                <input v-model="text" class="text-center rounded-md" type="text" placeholder="Text"/>
                <button @click="addFolder()" class="px-2 ml-2 bg-blue-200 rounded-md">Add Folder</button>
                <button class="px-2 ml-2 bg-blue-200 rounded-md">Visualize</button>
            </div>
            <div class="flex flex-col w-full text-center text-md gap-x-3">
                <div v-if="currentFolder!==''" class="w-auto px-2 text-center bg-green-200 rounded-lg cursor-pointer">
                    {{currentFolder}}
                </div>
                <template v-for="name in folderNames">
                    <div @click="changeFolder(name)" v-if="name!==currentFolder" v-bind:key="name" class="w-auto px-2 text-center bg-red-200 rounded-lg cursor-pointer">
                        {{name}}
                    </div>
                </template>
            </div>
            <div v-for="curr in currentRender" v-bind:key="curr._id">
                <h1>{{curr.character}}</h1>
                <h1>{{curr.pinyin}}</h1>
                <h1>{{curr.meaning}}</h1>
            </div>
            <div class="w-full text-sm text-center">
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
        const addingFolder=ref(false)
        const text=ref('')

        const changeFolder=(folderName)=>{
            store.dispatch('folder/changeFolder',folderName)
        }

        const addFolder=()=>{
            store.dispatch('folder/createNewFolder',text.value)
        }
        
        return {
            showFolder:computed(()=>store.state.folder.showFolder),
            folderNames:computed(()=>store.state.folder.folderNames),
            currentRender:computed(()=>store.state.folder.currView),
            currentFolder:computed(()=>store.state.folder.currentFolder),
            folderList:computed(()=>store.state.folder.folderList),
            text,
            addFolder,
            addingFolder,
            changeFolder
        }
    },
}
</script>
