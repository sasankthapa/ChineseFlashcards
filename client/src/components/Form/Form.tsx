import React, {ChangeEvent} from 'react';
import './Form.css'

export type formElement = {
    label : string,
    type : string, 
    value : string,
    handler : (e:ChangeEvent<HTMLInputElement>) => void
};

interface FormProps{
    title: string;
    elements: formElement[]
}

const Form:React.FC<FormProps> = ({title,elements}) => {
    return (
        <form className="form">
            <h2>{title}</h2>
            {elements.map((element)=>{
                return <div key={element.label} className="form-control">
                    <label htmlFor={element.label}>{element.label}</label>
                    <input type={element.type} id={element.label} />
                </div>
            })}
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;
