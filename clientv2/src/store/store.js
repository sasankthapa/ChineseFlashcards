import { createStore } from 'vuex'
import userConfig from './modules/user'
import folderComponentConfig from './modules/folder'
import visualizerComponentConfig from './modules/visualizer'
import contentManagerConfig from './modules/cm'

const store=createStore({
    state:{
        current:'',
        time:0,
        currentWord:'',
    },
    modules:{
        user:userConfig,
        folder:folderComponentConfig,
        visualize:visualizerComponentConfig,
        cm:contentManagerConfig
    },
    mutations:{
        updateAppState(state,payload){
            state.current=payload;
        }
    },
    actions:{
        switchCurrent(context,payload){
            context.commit('updateAppState',payload);
            context.dispatch('cm/updateContent')
        }
    },
    getters:{
        currentState(state){
            return state.current
        },
        getTimeLeft({time}){
            return time
        }
    }
})

export default store;
