import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import Form from '../../Form/Form';
import {AddCardComponentProps, formElement, FormProps} from '../../../types/UI';

const AddCardComponent:React.FC<AddCardComponentProps> = ({handleAddCard,closeForm}) => {

    const [meaning,setMeaning] = React.useState('');
    const [character,setCharacter] = React.useState('');
    const [pinyin,setPinyin] = React.useState('');

    const updateMeaning:formElement["handler"]=(e)=>{
        setMeaning(e.target.value); 
    }

    const updateCharacter:formElement["handler"]=(e)=>{
        setCharacter(e.target.value);
    }

    const updatePinyin:formElement["handler"]=(e)=>{
        setPinyin(e.target.value);
    }

    const addingCardElements:formElement[]=[
        {label:'Character',type:'text',value:character,handler:updateCharacter,placeholder:'你好'},
        {label:'Pinyin',type:'text',value:pinyin,handler:updatePinyin,placeholder:'ni3hao3'},
        {label:'Meaning',type:'text',value:meaning,handler:updateMeaning,placeholder:'Hello'},
    ];

    const onClick:FormProps["onClick"]=()=>{
        handleAddCard(meaning, character, pinyin); 
    }

    return <BoxComponent>
        <div>
            <Form 
                title="Add Card" 
                elements={addingCardElements} 
                buttonName="Add Card"
                onClick={onClick}
                closeForm={closeForm}
            />
        </div>
    </BoxComponent>
}

export default AddCardComponent;
