import axios from 'axios';

type loginAccountType = (arg1:string,arg2:string) => Promise<object|null>;
type logoutAccountType = (arg1:string) => void;
type addCardType = (token:string,meaning:string,pinyin:string,characters:string) => void
//type deleteCardType= (token:string,id:string) => void

const baseUrl = 'http://localhost:3001';

const getConfig = (token:string)=>{
    return {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    }
}

export const loginAccount:loginAccountType = async (email,password) => {
    return (await axios.post(baseUrl+'/users/login',{email,password}))
}

export const logoutAccount:logoutAccountType = (token) => {
    axios.post(baseUrl+'/users/logout',{},getConfig(token));
}

export const createAccount= async(username:string,email:string,password:string):Promise<Object> =>{
    return await axios.post(baseUrl+'/users/register',{username,email,password})
}

export const loginUserWithKey=async(api_key:string)=>{
    return await axios.get(baseUrl+'/me',getConfig(api_key))
}

export const getAllCards = async(token:string) => {
    const response=await axios.get(baseUrl+'/cards',getConfig(token));
    return response.data.map((element:any)=>{
        return {id:element._id,meaning:element.meaning, character:element.characters, pinyin:element.pinyin}; 
    });
}

export const addCard:addCardType = (token, meaning, pinyin, characters) => {
   axios.post(baseUrl+'/cards',{meaning,pinyin,characters},getConfig(token))
   .then(()=>{
        console.log('success');
   }); 
}

export const deleteCard= async(token:string,id:string,done:()=>void) => {
    await axios.delete(baseUrl+'/cards/'+id,getConfig(token));
    done()
}
