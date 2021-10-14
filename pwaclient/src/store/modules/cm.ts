import { ActionTree, GetterTree, Module, MutationTree } from "vuex";
import { IRootState } from "../index";

interface ICMState {
    showLogin:boolean;
    showMainMenu:boolean;                                                     
    showFolder:boolean;                                                       
    showVisualizer:boolean;                                                   
    showCards:boolean;                                                         
}

const getters:GetterTree<ICMState,IRootState>={
    getContentVars(state):ICMState{
        return {...state}
    }
}

export const actions:ActionTree<any,any>={
    updateContent({rootState,commit}){
        commit('resetAll')
        if(!rootState.user.loggedIn){
            return commit('setShowLogin',true)
        }
        if(rootState.current==='')
            return
        switch(rootState.current){
            case 'main':
                commit('setShowMainMenu',true)
                commit('setShowFolder',true)
                commit('setShowVisualizer',true)
            break;
            case 'study':
            case 'test':
                commit('setShowCards',true)
            break;
        }
    },
    showVisualizer({commit},payload){
        commit('setShowVisualizer',payload)
    }
}

export const mutations:MutationTree<ICMState>={                                                                 
    resetAll(state){
        state.showLogin=false;                                         
        state.showMainMenu=false;                                         
        state.showFolder=false;                                           
        state.showVisualizer=false;                                       
        state.showCards=false;                                            
    },
    setShowMainMenu(state,payload){                                         
        state.showMainMenu=payload;                                         
    },                                                                      
    setShowFolder(state,payload){                                           
        state.showFolder=payload;                                           
    },                                                                      
    setShowLogin(state,payload){                                         
        state.showLogin=payload;                                         
    },                                                                      
    setShowVisualizer(state,payload){                                       
        state.showVisualizer=payload;                                       
    },                                                                      
    setShowCards(state,payload){                                            
        state.showCards=payload;                                            
    }                                                                       
}

export const contentManagerConfig:Module<ICMState,IRootState>={
    namespaced:true,                                                            
    state:{                                                                     
        showLogin:false, 
        showMainMenu:false,                                                     
        showFolder:false,                                                       
        showVisualizer:false,                                                   
        showCards:false                                                         
    },                                                                          
    mutations,
    actions,
    getters
}                                                                               
                                                                                 
export default contentManagerConfig                
