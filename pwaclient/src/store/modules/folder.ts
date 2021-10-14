import { Module } from "vuex";
import { createFolder, getFolders } from "../../api/axios";

// --TODO-- corrent typings
// To get correct typings need creating trees for mutations, getters and setters
const folderComponentConfig: Module<any, any> = {
    namespaced: true,
    state: {
        showFolder: true,
        currentFolder: '',
        folderNames: [],
        folderList: [],
        currView: [],
    },
    mutations: {
        setCurrentFolder(state, payload) {
            state.currentFolder = payload;
        },
        setFolderList(state, payload) {
            state.folderList = payload;
        },
        setCurrView(state) {
            state.currView = state.folderList[state.currView];
        },
        setFolderNames(state, payload) {
            state.folderNames = payload;
        },
        setShowFolder(state, payload) {
            state.showFolder = payload;
        }
    },
    actions: {
        async updateFolderInfo(context) {
            const data = await getFolders(context.rootState.user.API_KEY);
            const names: Array<string> = [];
            data.forEach((folder: { name: string }) => {
                names.push(folder.name)
            })
            context.commit('setFolderList', data)
            context.commit('setFolderNames', names)
        },
        changeFolder(context, payload) {
            context.commit('setCurrentFolder', payload);
            context.commit('setCurrView')
            console.log(context.state.currentFolder)
        },
        async createNewFolder(context, payload) {
            const folders = await createFolder(context.rootState.user.API_KEY, payload)
            console.log(folders)
            const names:Array<string> = [];
            folders.forEach((folder) => {
                names.push(folder.name)
            })
            context.commit('setFolderList', folders)
            context.commit('setFolderNames', names)
        }
    }
}

export default folderComponentConfig
