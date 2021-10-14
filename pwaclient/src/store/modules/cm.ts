import { Module } from "vuex";
import { IRootState } from "..";

// --TODO-- corrent typings
// To get correct typings need creating trees for mutations, getters and setters
//
interface ICMState {
    showLogin:boolean;
    showMainMenu:boolean;                                                     
    showFolder:boolean;                                                       
    showVisualizer:boolean;                                                   
    showCards:boolean;                                                         
}

const contentManagerConfig:Module<ICMState,IRootState>={
    namespaced:true,                                                            
    state:{                                                                     
        showLogin:false,
        showMainMenu:false,                                                     
        showFolder:false,                                                       
        showVisualizer:false,                                                   
        showCards:false                                                         
    },                                                                          
    mutations:{                                                                 
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
    },
    actions:{
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
    },
    getters:{
        getContentVars(){
            return this
        }
    }
}                                                                               
                                                                                 
export default contentManagerConfig                
