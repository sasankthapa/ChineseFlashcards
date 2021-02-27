import React from 'react'
import Tiles from './Tiles/Tiles';
import AddCardComponent from '../UI/addCardComponent/AddCardComponent';
import FocusComponent from '../UI/FocusComponent/FocusComponent';
import {handleAddCard} from '../../types/UI'
import {tilesCurrent,DashboardProps,DashboardState, character} from '../../types/Dashboard';
import {getAllCards,addCard,deleteCard} from '../../API/axios';
import './Dashboard.css';
import searchIcon from '../../assets/searchIcon.jpeg';

class Dashboard extends React.Component<DashboardProps,DashboardState,{}>{

    state={
        elements:[],
        tilesCurrent:'inCharacter' as tilesCurrent,
        changeCurrent:true,
        addingCard:false,
        deletingCard:false,
        focus:false,
        page:1,
        itemsOnPage:20,
        searching:false,
        displayingElements:[]
    }

   private shuffleArray(arr:Array<any>) {
       for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
       }
    return arr;
}

    private changeCurrentHandler = () => {
        switch(this.state.tilesCurrent){
            case 'inCharacter':
                this.setState({tilesCurrent:'inPinyin',changeCurrent:!this.state.changeCurrent});
                break;
            case 'inPinyin':
                this.setState({tilesCurrent:'inMeaning',changeCurrent:!this.state.changeCurrent});
                break;
            case 'inMeaning':
                this.setState({tilesCurrent:'inCharacter',changeCurrent:!this.state.changeCurrent});
                break;
        }
    }

    private setAddingCard = (value:boolean) => {
        this.setState({addingCard:value});    
    }

    private setFocusingCard = (value:boolean) =>{
        this.setState({focus:value});
    }

    private setDeletingCard = () => {
        this.setState(prevState=>({deletingCard:!prevState.deletingCard}));    
    }

    private handleAddCard:handleAddCard= (meaning,character,pinyin) => {
        this.setState({addingCard:false});
        addCard(this.props.token,meaning,pinyin,character); 
        this.getAllCards();
    }

    private handleDeleteCard=(id:string)=>{
        deleteCard(this.props.token,id,()=>{this.getAllCards()});
    } 

    private changeMaxElements=(width:number,height:number)=>{
        let rowNum=4;
        let colNum=5;
        if(width <450){
            colNum=3;
        }else if(width <888){
            colNum=4;
        }
        if(height <660){
            rowNum=2;
        }else if(height <850){
            rowNum=3;
        }

        this.setState({itemsOnPage:colNum*rowNum})
    }

    private changePage = (todo:"next"|"prev") => {
        let maxPage=Math.ceil(this.state.displayingElements.length/this.state.itemsOnPage);
        let minPage=1;
        if(todo==="next"){
            if(this.state.page>=maxPage) return
            this.setState(prevState => ({page:prevState.page+1}));    
        }else{
            if(this.state.page===minPage) return
            this.setState(prevState=>({page:prevState.page-1}));    
        }
    }

    private getAllCards(){
        getAllCards(this.props.token)
        .then((data)=>{
            if(data){
                data=this.shuffleArray(data);
                this.setState({elements:data,displayingElements:data})
            }
        });
    }

    componentDidMount(){
        if(this.state.elements.length===0){
            this.getAllCards();
        }
        window.addEventListener('resize', ()=>this.changeMaxElements(window.innerWidth,window.innerHeight));
    }

    private filterSearch(val:string){
        if(val.length===0){
            return this.setState({displayingElements:this.state.elements,searching:false}); 
        }
        if(this.state.elements.length>=0){
            const filtered=this.state.elements.filter((elem:character)=>{
                if(elem.meaning.toLowerCase().includes(val.toLowerCase())||elem.character.includes(val)||elem.pinyin.includes(val)){
                    return true;
                }
                return false;
            })
            this.setState({page:1,displayingElements:filtered,searching:true})
        }
    }

    render(){
        const getCurrent = this.state.tilesCurrent==='inCharacter'?'Character':this.state.tilesCurrent==='inMeaning'?'Meaning':'Pinyin';
        const elementsOffset=this.state.itemsOnPage*(this.state.page-1);
        return <div className="Dashboard">
            {this.state.addingCard?<AddCardComponent handleAddCard={this.handleAddCard.bind(this)} closeForm={()=>{this.setAddingCard(false)}}/>:''}
            <div className="DashboardHeader">
                <p className="clickable" onClick={()=>this.setAddingCard(true)}>Add Card</p>
                <p className="clickable" onClick={this.setDeletingCard}>{this.state.deletingCard?'Cancel':'Delete Card'}</p>
                <p className="clickable" onClick={()=>this.setFocusingCard(true)}>Focus</p>
                <p className="clickable" onClick={this.changeCurrentHandler}>Current: {getCurrent} </p>
                <p><i onClick={()=>this.changePage("prev")}className="arrow left clickable"></i>Page: 
{this.state.page}/{Math.ceil(this.state.displayingElements.length/this.state.itemsOnPage)}<i onClick={()=>this.changePage("next")} className="arrow right clickable"></i>
                </p>
            </div>
            <div className="scrollable">
                <div className="DashboardMain">
                    <Tiles
                        elements={this.state.displayingElements.slice(0+elementsOffset, this.state.itemsOnPage+elementsOffset)} 
                        tilesCurrent={this.state.tilesCurrent} 
                        changeCurrent={this.state.changeCurrent}
                        deletingCard={this.state.deletingCard}
                        handleDeleteCard={this.handleDeleteCard.bind(this)}/>
                    <div className={this.state.searching?"search_box searching":"search_box"}>
                        <img className="searchIcon" src={searchIcon} alt="searchIcon"/>
                        <input type="text" onChange={(e)=>this.filterSearch(e.target.value)}/>
                    </div>
                </div>
            </div>
            {this.state.focus?
                <FocusComponent elements={this.state.displayingElements} close={()=>{this.setFocusingCard(false)}}/>:''}
        </div>
    }
}

export default Dashboard
