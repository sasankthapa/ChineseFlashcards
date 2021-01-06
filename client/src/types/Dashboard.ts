export type character={
        id:string,
        meaning:string,
        pinyin:string,
        character:string,
}

export type tilesCurrent='inCharacter'|'inPinyin'|'inMeaning';

export interface DashboardState{
    elements:Array<character>;
    tilesCurrent:tilesCurrent;    
    changeCurrent:boolean;
    addingCard:boolean;
    deletingCard:boolean;
    focus:boolean;
    page:number;
    itemsOnPage:number;
}

export interface DashboardProps{
    token:string;
}

export interface TilesProps{
    elements:Array<character>
    tilesCurrent:tilesCurrent;
    changeCurrent:boolean;
    deletingCard:boolean;
    handleDeleteCard:(id:string)=>void;
}

export interface TileProps{
    character:character;
    tilesCurrent:tilesCurrent;
    changeCurrent:boolean;
    deletingCard:boolean;
    handleDeleteCard:(id:string)=>void;
};
