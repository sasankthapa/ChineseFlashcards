import React from 'react';
import Backdrop from '../UI/Backdrop/Backdrop'
import "./SideDrawer.css";

interface SideDrawerProps{
    open:boolean;
    name?:string;
    loginIn:()=>void;
    logout:()=>void;
    register:()=>void;
}

const SideDrawer:React.FC<SideDrawerProps> = ({open,name,loginIn,logout,register}) => {
    const classNames=['Sidedrawer'];
    if(open){
        classNames.push('Open');
    }else{
        classNames.push('Closed');
    }
    return <React.Fragment>
    <Backdrop show={false}/>
    <div className={classNames.join(' ')}>
        <p id="title">Chinese FlashCards</p>
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
    </React.Fragment>
}

export default SideDrawer;
