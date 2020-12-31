import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import Form, {formElement} from '../../Form/Form';

interface LoginComponentProps{
    handleLogin: (username:string,password:string) => void;
}

const LoginComponent:React.FC<LoginComponentProps> = ({handleLogin}) => {

    const [username,setUsername] = React.useState('');
    const [password,setPassword] = React.useState('');

    const updateUserName:formElement["handler"]=(e)=>{
        setUsername(e.target.value); 
    }

    const updatePassword:formElement["handler"]=(e)=>{
        setPassword(e.target.value);
    }

    const loginElements:formElement[]=[
        {label:'Username',type:'text',value:username,handler:updateUserName},
        {label:'Password',type:'password',value:password,handler:updatePassword}
    ];

    return <BoxComponent>
        <div>
            <Form title="Login" elements={loginElements}/>
        </div>
    </BoxComponent>
}

export default LoginComponent;
