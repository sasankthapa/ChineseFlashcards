import {createAccount, loginAccount, loginUserWithKey} from '../../api/axios'

const user={
    namespaced:true,
    state:{
        loggedIn:false,
        name:'',
        API_KEY:''
    },
    mutations:{
        setName(state,payload){
            state.name=payload;
        },
        setAPI_KEY(state,payload){
            state.API_KEY=payload;
        },
        setLogin(state){
            state.loggedIn=true;
        }
    },
    actions:{
        async refreshUser(context,API_KEY){
            const user=await loginUserWithKey(API_KEY);
            console.log(user);
        },
        async loginUser(context,{username,password}){
            const user=await loginAccount(username,password);
            console.log(user.data.token)
            context.commit('setAPI_KEY',user.data.token)
            context.dispatch('switchCurrent','main',{root:true})
            console.log(user)
        },
        async registerUser(context,{username,password,email}){
            const user=await createAccount(username,email,password);
            context.commit('setAPI_KEY',user.data.token)
            context.dispatch('switchCurrent','main',{root:true})
            console.log(user)
        }
    },
    getters:{
        getName({name}){
            return name
        },
        getApiKey({API_KEY}){
            return API_KEY
        }
    }
}

export default user;
