import React from 'react';
import {TileProps} from '../../../../types/Dashboard';
import './Tile.css';

const Tile:React.FC<TileProps> = ({character,tilesCurrent,changeCurrent,deletingCard,handleDeleteCard}) => {
    const [current,setCurrent] = React.useState('inCharacter');
    const [switchedCurrent, setSwitched] = React.useState(false);

    const tile= React.useRef<HTMLDivElement>(null);

    const switchTile=()=>{
        switch(current){
            case 'inCharacter':
                setCurrent('inPinyin');
                break;
            case 'inPinyin':
                setCurrent('inMeaning');
                break;
            case 'inMeaning':
                setCurrent('inCharacter');
                break;
        }
        if(tile.current!==null){
            tile.current.classList.add('flip');
            tile.current.addEventListener("animationend", function(){
                if(tile.current!==null) {
                    tile.current.classList.remove('flip');
                    void tile.current.offsetWidth;
                }})
        }
    }

    const deleteCard=()=>{
        handleDeleteCard(character.id); 
    }

    let toRender='';

    if(switchedCurrent!==changeCurrent){
        setCurrent(tilesCurrent);
        setSwitched(changeCurrent);
    }

    switch(current){
        case 'inCharacter':
            toRender=character.character;
            break;
        case 'inPinyin':
            toRender=character.pinyin;
            break;
        case 'inMeaning':
            toRender=character.meaning;
            break;
    }

    return <div ref={tile} onClick={deletingCard?deleteCard:switchTile} className={deletingCard?"tile deleting":"tile"}>
        <p>{toRender}</p> 
    </div>
}

export default Tile
