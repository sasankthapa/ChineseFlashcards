import React from 'react';
import './Backdrop.css'

interface backdropProps{
    show:boolean;
}

const Backdrop:React.FC<backdropProps> = ({show}) => {
    if(show){
        return <div className="backdrop"></div>
    }else{
        return (null)
    }
}

export default Backdrop;
