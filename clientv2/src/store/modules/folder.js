import {createFolder, getFolders} from "../../api/axios";

const folderComponentConfig={
    namespaced:true,
    state:{
        showFolder:true,
        currentFolder:'',
        folderNames:[],
        folderList:[],
        currView:[],
    },
    mutations:{
        setCurrentFolder(state,payload){
            state.currentFolder=payload;
        },
        setFolderList(state,payload){
            state.folderList=payload;
        },
        setCurrView(state){
            state.currView=state.folderList[state.currView];
        },
        setFolderNames(state,payload){
            state.folderNames=payload;
        },
        setShowFolder(state,payload){
            state.showFolder=payload;
        }
    },
    actions:{
        async updateFolderInfo(context){
            const {folders}=await getFolders(context.rootState.user.API_KEY);
            const names=[];
            folders.forEach((folder)=>{
                names.push(folder.name)
            })
            context.commit('setFolderList',folders)
            context.commit('setFolderNames',names)
        },
        changeFolder(context,payload){
            console.log(payload)
            context.commit('setCurrentFolder',payload);
            context.commit('setCurrView')
            console.log(context.state.currentFolder)
        },
        async createNewFolder(context,payload){
            const res=await createFolder(context.rootState.user.API_KEY,payload)
            console.log(res)
        }
    }
}

export default folderComponentConfig
