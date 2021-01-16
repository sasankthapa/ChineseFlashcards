import React from 'react';
import Backdrop from '../../components/UI/Backdrop/Backdrop';
import './BoxComponent.css';

const BoxComponent = (props:any) => {
    return <React.Fragment>
        <div className="box-component-HOC">
            <div className="box-component-container">
                {props.children} 
            </div>
        </div>
        <Backdrop show/>
    </React.Fragment>
}

export default BoxComponent;
