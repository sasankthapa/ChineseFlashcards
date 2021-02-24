import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import Form from '../../Form/Form';
import {AddCardComponentProps, formElement, FormProps} from '../../../types/UI';
import conv from 'pinyin-tone';

const AddCardComponent:React.FC<AddCardComponentProps> = ({handleAddCard,closeForm}) => {

    const [meaning,setMeaning] = React.useState('');
    const [character,setCharacter] = React.useState('');
    const [pinyin,setPinyin] = React.useState('');
    const [lastPinyinIndex,setLastIndex] = React.useState(0);

    const updateMeaning:formElement["handler"]=(e)=>{
        setMeaning(e.target.value); 
    }

    const updateCharacter:formElement["handler"]=(e)=>{
        setCharacter(e.target.value);
    }

    const validEntries:number[]=[1,2,3,4]; 

    const updatePinyin:formElement["handler"]=(e)=>{
        const val:string=e.target.value; 
        const lastCharacter=val.charAt(val.length-1);
        if(lastCharacter in validEntries){
            const newConverted= conv(val.slice(lastPinyinIndex));
            const toLoad=val.slice(0,lastPinyinIndex)+newConverted;
            setPinyin(toLoad);    
            setLastIndex(toLoad.length);
        }else if(lastCharacter===' '){
            setPinyin(val);
            setLastIndex(lastPinyinIndex+1);
        }else if(val.length < lastPinyinIndex){
            setPinyin(val);
            setLastIndex(val.length);
        }else{
            setPinyin(val);
        }
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
