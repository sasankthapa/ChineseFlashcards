import axios from 'axios';

type loginAccountType = (arg1:string,arg2:string,arg3:(name:string,token:string)=>void) => void;
type logoutAccountType = (arg1:string) => void;
type registerAccountType = (name:string,email:string,password:string,arg3:(name:string,token:string)=>void)=>void;
type addCardType = (token:string,meaning:string,pinyin:string,characters:string) => void

const baseUrl = 'http://localhost:3001';

const getConfig = (token:string)=>{
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

export const loginAccount:loginAccountType = (email,password,done) => {
    console.log('heeh');
    axios.post(baseUrl+'/users/login',{email,password})
    .then((res)=>{
        done(res.data.user.name.split(' ')[0],res.data.token)
    }).catch((error)=>{
        console.log(error);
    });
}

export const logoutAccount:logoutAccountType = (token) => {
    axios.post(baseUrl+'/users/logout',{},getConfig(token));
}

export const registerAccount:registerAccountType = (name,email,password,done) =>{
    axios.post(baseUrl+'/users/register',{name,email,password})
    .then((res)=>{
        done(res.data.user.name.split(' ')[0],res.data.token)
    }).catch((err)=>{
        console.log(err);
    })
}

export const addCard:addCardType = (token, meaning, pinyin, characters) => {
   axios.post(baseUrl+'/cards',{meaning,pinyin,characters},getConfig(token)); 
}
