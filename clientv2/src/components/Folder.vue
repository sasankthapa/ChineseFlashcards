<template>
    <div class="flex flex-col items-center justify-center w-full p-20 px-10 ">
        <div class="block w-full h-full bg-gray-300 rounded-2xl">
            <div class="w-full px-5 py-1 mb-1 bg-green-300 rounded-t-2xl">
                <input class="text-center rounded-md" type="text" placeholder="Search"/>
            </div>
            <div class="flex px-5 overflow-x-auto text-md flex-nowrap gap-x-3">
                <div v-if="currentFolder!==''" class="w-auto px-1 text-center bg-green-200 rounded-lg cursor-pointer">
                    {{currentFolder}}
                </div>
                <template v-for="name in folderNames">
                    <div @click="changeFolder(name)" v-if="name!==currentFolder" v-bind:key="name" class="w-auto p-2 text-center bg-purple-200 rounded-lg cursor-pointer">
                        {{name}}
                    </div>
                </template>
                <div class="w-auto px-1 text-center bg-purple-300 rounded-lg cursor-pointer">
                    Add Folder
                </div>
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

        const changeFolder=(folderName)=>{
            store.dispatch('folder/changeFolder',folderName)
        }

        const addFolder=(folderName)=>{
            store.dispatch('folder/createNewFolder')
        }
        
        return {
            showFolder:computed(()=>store.state.folder.showFolder),
            folderNames:computed(()=>store.state.folder.folderNames),
            currentRender:computed(()=>store.state.folder.currView),
            currentFolder:computed(()=>store.state.folder.currentFolder),
            folderList:computed(()=>store.state.folder.folderList),
            addingFolder,
            changeFolder
        }
    },
}
</script>
