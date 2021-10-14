import { createStore, useStore as baseUseStore,Store } from 'vuex'
import {InjectionKey} from 'vue';
import cmConfig from './modules/cm';
import userConfig from './modules/user';
import folderComponentConfig from './modules/folder';
import visualizerComponentConfig from './modules/visualizer';

export interface IRootState{
    current:string,
    time:number,
    currentWord:any,
}

export const key: InjectionKey<Store<IRootState>> = Symbol()

export const store=createStore<IRootState>({
    state:{
        current:'',
        time:0,
        currentWord:{},
    },
    modules:{
        cm:cmConfig,
        user:userConfig,
        folder:folderComponentConfig,
        visualize:visualizerComponentConfig,
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

export function useStore () {
  return baseUseStore(key)
}

