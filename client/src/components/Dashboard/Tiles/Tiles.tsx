import React from 'react';
import Tile from './Tile/Tile';
import {TilesProps} from '../../../types/Dashboard'

const Tiles:React.FC<TilesProps> = ({elements,tilesCurrent,changeCurrent,deletingCard,handleDeleteCard}) => {
    const toReturn=elements.map((element,index)=>{
        return <Tile 
                key={index+element.pinyin+element.character}
                character={element} 
                tilesCurrent={tilesCurrent}
                changeCurrent={changeCurrent}
                deletingCard={deletingCard}
                handleDeleteCard={handleDeleteCard}
            />
    })
    return <React.Fragment>
        {toReturn}
    </React.Fragment>
}

export default Tiles;
