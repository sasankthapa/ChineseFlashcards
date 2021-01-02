import * as React from 'react';
import Header from './components/Header/Header';
import './App.css';
import LoginComponent from './components/UI/loginComponent/LoginComponent'
import RegisterComponent from './components/UI/registerComponent/RegisterComponent'
import {handleLogin,handleRegister} from './types/UI';
import {loginAccount,registerAccount,logoutAccount} from './API/axios';

interface AppState{
    name:string;
    token:string;
    loggingIn:boolean;
    loggedIn:boolean;
    addingCard:boolean;
    focused:boolean;
    registering:boolean;
}

class App extends React.Component<{},AppState,{}>{

    state={
        name:'',
        token:'',
        loggingIn:false,
        loggedIn:false,
        addingCard:false,
        focused:false,
        registering:false
    }

    render(){
        let toRender:any='Please Login';
        if(this.state.loggingIn){
            toRender=<LoginComponent handleLogin={this.handleLogin}/>
        }else if(this.state.registering){
            toRender=<RegisterComponent handleRegister={this.handleRegister}/> 
        }else if(this.state.focused){

        }else if(this.state.loggedIn){
            toRender=<div>Logged In</div>
        }
        return (
            <div className="App">
                <Header 
                    name={this.state.name}
                    loginIn={this.setLoggingIn.bind(this)} 
                    logout={this.handleLogout.bind(this)}
                    register={this.setRegistering.bind(this)}
                    addCard={this.setAddingCard.bind(this)}
                />
                <div className="main">
                {this.state.loggedIn? 
                    <h1>loggedIn</h1>:
                    toRender}
                </div>
           </div>
      );
    }

    private setLoggingIn = () => {
        this.setState({loggingIn:true});
    }

    private setRegistering = () => {
        this.setState({registering:true});
    }

    private setAddingCard = () => {
        this.setState({addingCard:true});
    }

    private handleLogin:handleLogin = (email,password) => {
        this.setState({loggingIn:false});
        loginAccount(email,password,(name,token)=>{
            this.setState({token,loggedIn:true,name});
        });
    }

    private handleRegister:handleRegister = (email, name, password) => {
        this.setState({registering:false});
        registerAccount(name,email,password,(name,token)=>{
            this.setState({token,loggedIn:true,name});
        });
    }
    
    private handleLogout = () => {
        this.setState({token:'',loggedIn:false,focused:false})
        logoutAccount(this.state.token);
    }
}

export default App;
