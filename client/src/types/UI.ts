import {ChangeEvent} from 'react';
import {character} from './Dashboard';

export type handleLogin = (email:string,password:string) => void;
export type handleRegister = (email:string ,name:string, password:string) => void
export type handleAddCard = (meaning:string,pinyin:string,characters:string) => void

export interface LoginComponentProps{
    handleLogin:handleLogin; 
    closeForm:() => void;
}

export interface RegisterComponentProps{
    handleRegister: handleRegister;
    closeForm:() => void;
}

export interface AddCardComponentProps{
    handleAddCard: handleAddCard;
    closeForm:() => void;
}

export interface FocusCardComponentProps{
    elements:character[];
    close: () =>void;
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
    buttonName: string
    onClick: ()=>void;
    closeForm: () => void;
}
