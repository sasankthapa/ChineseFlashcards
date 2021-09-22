import { createStore } from 'vuex'
import userConfig from './modules/user'
import folderComponentConfig from './modules/folder'
import visualizerComponentConfig from './modules/visualizer'

const store=createStore({
    state:{
        current:'main',
        time:0,
        currentWord:'',
        visualize:'',
    },
    modules:{
        user:userConfig,
        folder:folderComponentConfig,
        visualize:visualizerComponentConfig
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
