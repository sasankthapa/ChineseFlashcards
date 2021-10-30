import React, { useState } from 'react'

const Register:React.FC<{}>=()=>{
    const [username, setUsername]=useState('');
    const [email, setEmail]=useState('');
    const [password,setPassword]=useState('');
    const [password2,setPassword2]=useState('');

    return <div className="flex">
        {username}
    </div>
}

export default Register;
