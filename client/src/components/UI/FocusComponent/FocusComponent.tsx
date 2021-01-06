import React from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import {tilesCurrent} from '../../../types/Dashboard';
import {FocusCardComponentProps} from '../../../types/UI'
import './FocusComponent.css'

const FocusComponent:React.FC<FocusCardComponentProps> = ({elements,close}) => {
    
    const [element,setElement] = React.useState(0);
    const [current,setCurrent] = React.useState<tilesCurrent>('inCharacter');

    const arr=['inCharacter','inPinyin','inMeaning'].filter((element)=>{
        if(element===current) return false;
        return true;
    });

    const getCurrent = current==='inCharacter'?'character':current==='inMeaning'?'meaning':'pinyin';

    return <BoxComponent>
        <div className="Focus">
            <p id="main">{elements[element][getCurrent]}</p>            
            <span className="clickable" id="next" onClick={()=>setElement(element+1)}>next</span>
            <span className="clickable" id="prev" onClick={()=>setElement(element-1)}>prev</span>
            <span className="clickable" id="change1" onClick={()=>setCurrent(arr[0] as tilesCurrent)}>{arr[0]}</span>
            <span className="clickable" id="change2" onClick={()=>setCurrent(arr[1] as tilesCurrent)}>{arr[1]}</span>
        </div>
    </BoxComponent>
}

export default FocusComponent
