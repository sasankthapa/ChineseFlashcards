import {ChangeEvent} from 'react';

export type handleLogin = (email:string,password:string) => void;
export type handleRegister = (email:string ,name:string, password:string) => void
export type handleAddCard = (meaning:string,pinyin:string,characters:string) => void

export interface LoginComponentProps{
    handleLogin:handleLogin; 
}

export interface RegisterComponentProps{
    handleRegister: handleRegister
}

export interface AddCardComponentProps{
    handleAddCard: handleAddCard
}

export type formElement = {
    label : string,
    type : string, 
    value : string,
    handler : (e:ChangeEvent<HTMLInputElement>) => void
};

export interface FormProps{
    title: string;
    elements: formElement[];
    buttonName: string;
    onClick: ()=>void
}
