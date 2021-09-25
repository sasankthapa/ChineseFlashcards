import {loginAccount} from '../../api/axios'

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
        }
    },
    actions:{
        async loginUser(context,data){
            const user=await loginAccount(data.username,data.password);
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
