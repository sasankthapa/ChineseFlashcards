const contentManagerConfig={                                                    
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
        getContentVars(state){
            return {
                ...state.cm
            }
        }
    }
}                                                                               
                                                                                 
export default contentManagerConfig                
