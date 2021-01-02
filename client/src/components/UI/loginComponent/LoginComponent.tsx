import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import Form from '../../Form/Form';
import {LoginComponentProps,formElement, FormProps} from '../../../types/UI';

const LoginComponent:React.FC<LoginComponentProps> = ({handleLogin}) => {

    const [email,setEmail] = React.useState('');
    const [password,setPassword] = React.useState('');

    const updateEmail:formElement["handler"]=(e)=>{
        setEmail(e.target.value); 
    }

    const updatePassword:formElement["handler"]=(e)=>{
        setPassword(e.target.value);
    }

    const loginElements:formElement[]=[
        {label:'Email',type:'text',value:email,handler:updateEmail},
        {label:'Password',type:'password',value:password,handler:updatePassword}
    ];

    const onClick:FormProps["onClick"]=()=>{
        handleLogin(email,password); 
    }

    return <BoxComponent>
        <div>
            <Form 
                title="Login User" 
                elements={loginElements} 
                buttonName="Login"
                onClick={onClick}
            />
        </div>
    </BoxComponent>
}

export default LoginComponent;
