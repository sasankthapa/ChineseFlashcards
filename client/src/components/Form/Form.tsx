import React, {FormEvent} from 'react';
import './Form.css'
import {FormProps} from '../../types/UI';

const Form:React.FC<FormProps> = ({title,elements,buttonName,onClick,closeForm}) => {

    const submit=(e:FormEvent<HTMLButtonElement>)=>{
        e.preventDefault();
        onClick();
    }

    return (
        <form className="form">
            <div onClick={closeForm} className="cross clickable">
                <i className="close-icon"></i>
            </div>
            <h2>{title}</h2>
            {elements.map((element)=>{
                return <div key={element.label} className="form-control">
                    <label htmlFor={element.label}>{element.label}</label>
                    <input 
                        placeholder={element.placeholder?element.placeholder:''}
                        onChange={element.handler}
                        value={element.value}
                        type={element.type} 
                        id={element.label} />
                    {element.helpText?<small className="small">{element.helpText}</small>:''}
                </div>
            })}
            <button onClick={submit} type="submit">{buttonName}</button>
        </form>
    );
}

export default Form;
