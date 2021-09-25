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
            state.showLogin=payload;                                         
            state.showMainMenu=payload;                                         
            state.showFolder=payload;                                           
            state.showVisualizer=payload;                                       
            state.showCards=payload;                                            
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
        updateContent({state,commit}){
            if(!state.user.loggedIn){
                return commit('setShowLogin',true)
            }
            if(state==='')
                return
            commit('resetAll')
            switch(state){
                case 'main':
                    commit('setShowMainMenu',true)
                    commit('setShowFolder',true)
                break;
                case 'study':
                case 'test':
                    commit('setShowCards',true)
                break;
            }
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
