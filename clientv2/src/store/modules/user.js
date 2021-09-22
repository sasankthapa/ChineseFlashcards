import {loginAccount} from '../../api/axios'

const user={
    namespaced:true,
    state:{
        name:'Sasank',
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
        login(_,{email,password}){
            loginAccount(email,password).then((data)=>{
                console.log(data);
            })
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
