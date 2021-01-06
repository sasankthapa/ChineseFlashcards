import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import Form from '../../Form/Form';
import {RegisterComponentProps, formElement, FormProps} from '../../../types/UI';

const RegisterComponent:React.FC<RegisterComponentProps> = ({handleRegister,closeForm}) =>{

    const [name,setName] = React.useState('');
    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const updatePassword:formElement["handler"]=(e)=>{
        setPassword(e.target.value);
    }

    const updateEmail:formElement["handler"]=(e)=>{
        setEmail(e.target.value); 
    }

    const updateName:formElement["handler"]=(e)=>{
        setName(e.target.value);
    }

    const registerElements:formElement[]=[
        {label:'Name',type:'text',value:name,handler:updateName},
        {label:'Email',type:'text',value:email,handler:updateEmail},
        {label:'Password',type:'password',value:password,handler:updatePassword},
    ];

    const onClick:FormProps["onClick"]=()=>{
        handleRegister(email,name,password); 
    }

    return <BoxComponent>
        <div>
            <Form 
                title="Register User" 
                elements={registerElements} 
                buttonName="Register"
                onClick={onClick}
                closeForm={closeForm}
            />
        </div>
    </BoxComponent>
}

export default RegisterComponent;
