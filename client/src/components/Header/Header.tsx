import * as React from 'react';

interface headerProps{
    name?:string;
    loginIn:()=>void;
    logout:()=>void;
    register:()=>void;
}

const Header:React.FC<headerProps> = ({name,loginIn,logout,register}) => {
    return <div className="Header">
        <p id="title">中文FlashCards</p>
        {name!==''?
            <React.Fragment>
                <p>{name}</p>
                <p onClick={logout}>Logout</p>
            </React.Fragment>:
            <React.Fragment>
                <p onClick={loginIn}>Login</p>
                <p onClick={register}>Register</p> 
            </React.Fragment>}
    </div>
}

export default Header;
