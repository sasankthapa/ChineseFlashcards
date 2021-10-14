import { Module } from 'vuex';
import { IRootState } from '..';
import {createAccount, loginAccount, loginUserWithKey} from '../../api/axios'

interface IUserState{
    loggedIn:boolean,
    name:string,
    API_KEY:string,
}

const user:Module<IUserState,IRootState>={
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
        setLogin(state,payload){
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
            if(user===null) {
                return
            }
            context.commit('setAPI_KEY',user.data.token)
            context.commit('setLogin',true)
            context.dispatch('switchCurrent','main',{root:true})
            context.dispatch('folder/updateFolderInfo',null,{root:true})
        },
        async registerUser(context,{username,password,email}){
            const user:any=await createAccount(username,email,password);
            context.commit('setAPI_KEY',user.data.token)
            context.commit('setLogin',true)
            context.dispatch('switchCurrent','main',{root:true})
            context.dispatch('updateFolderInfo',null,{root:true})
        },
        fakeLogin(context){
            context.commit('setAPI_KEY',null)
            context.commit('setLogin',true)
            context.dispatch('switchCurrent','main',{root:true})
            context.dispatch('updateFolderInfo',null,{root:true})
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
