import React, { KeyboardEventHandler, useEffect, useRef} from 'react';
import BoxComponent from '../../../hoc/BoxComponent/BoxComponent';
import {tilesCurrent} from '../../../types/Dashboard';
import {FocusCardComponentProps} from '../../../types/UI'
import './FocusComponent.css'

const FocusComponent:React.FC<FocusCardComponentProps> = ({elements,close}) => {
    
    const [element,setElement] = React.useState(0);
    const [current,setCurrent] = React.useState<tilesCurrent>('inCharacter');

    const control=useRef<HTMLDivElement>(null);

    const arr=['inCharacter','inPinyin','inMeaning'].filter((element)=>{
        if(element===current) return false;
        return true;
    });

    const getCurrent = current==='inCharacter'?'character':current==='inMeaning'?'meaning':'pinyin';

    const changeToString = (val:string) => {
        switch(val){
            case 'inCharacter':
                return 'Character';
            case 'inMeaning':
                return 'Meaning';
            case 'inPinyin':
                return 'Pinyin';
        }
    }

    const elementChangeHandler = (val:"next"|"prev")=>{
        if(val==="next"){
            if(!(element+1>=elements.length)){
                setElement(element+1); 
            }
        }else if(val==="prev"){
            if(!(element-1<0)){
                setElement(element-1)
            }
        }
    }

    const keyDownHandler:KeyboardEventHandler<HTMLDivElement>=(e)=>{
        if(e.key==="ArrowLeft"){
            elementChangeHandler("prev")
        }else if(e.key==="ArrowRight"){
            elementChangeHandler("next")
        }else if(e.key==="ArrowUp"){
            setCurrent(arr[0] as tilesCurrent);
        }else if(e.key==="ArrowDown"){
            setCurrent(arr[1] as tilesCurrent);
        }else if(e.key==="m"){
            setCurrent('inMeaning' as tilesCurrent);
        }else if(e.key==="p"){
            setCurrent('inPinyin' as tilesCurrent);
        }else if(e.key==="c"){
            setCurrent('inCharacter' as tilesCurrent);
        }
    }

    useEffect(()=>{
        if(control.current){
            control.current.focus()
        }
    },[]);

    const toDisplay=elements[element][getCurrent];
    const displayStyle=toDisplay.length>10?{fontSize:'30px'}:{};
    return <BoxComponent>
        <div ref={control} className="Focus" onKeyDown={keyDownHandler} tabIndex={0}>
            <p id="main" style={displayStyle}>{toDisplay}</p>            
            <span id="count">{element+1}/{elements.length}</span>
            <span className="clickable" id="next" onClick={()=>elementChangeHandler("next")}>Next</span>
            <span className="clickable" id="prev" onClick={()=>elementChangeHandler("prev")}>Prev</span>
            <span className="clickable" id="change1" onClick={()=>setCurrent(arr[0] as tilesCurrent)}>{changeToString(arr[0])}</span>
            <span className="clickable" id="change2" onClick={()=>setCurrent(arr[1] as tilesCurrent)}>{changeToString(arr[1])}</span>
            <span className="close_button clickable" onClick={()=>close()}>x</span>
            <div className="tooltip">
                ?
                <span className="tooltiptext">You can use the arrow keys to move and 
                change the character to pinyin or meaning and vice versa.
                You can also use:
                c - character,
                m - meaning,
                p - pinyin</span>
            </div>
        </div>
    </BoxComponent>
}

export default FocusComponent
