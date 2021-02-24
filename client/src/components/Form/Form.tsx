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
            <div className="cross">
                <i onClick={closeForm} className="close-icon clickable"></i>
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
                </div>
            })}
            <button onClick={submit} type="submit">{buttonName}</button>
        </form>
    );
}

export default Form;
