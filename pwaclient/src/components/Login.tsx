import React, { useEffect, useState } from 'react'

const Login:React.FC<{}>=()=>{
    const [username, setUsername]=useState('');
    const [password,setPassword]=useState('');

    return <div>
        <div className="flex">
            <h1>login</h1>
        </div>
        {username}
    </div>
}

export default Login;
