import * as React from 'react';

interface headerProps{
    userName?:string;
    loginIn:()=>void;
}

const Header:React.FC<headerProps> = ({userName,loginIn}) => {
    return <div className="Header">
        {userName!==undefined?userName:
            <div onClick={loginIn}>login</div>}
    </div>
}

export default Header;
