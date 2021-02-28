import * as React from 'react';
import Header from './components/Header/Header';
//import SideDrawer from './components/Sidedrawer/SideDrawer';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import LoginComponent from './components/UI/loginComponent/LoginComponent'
import RegisterComponent from './components/UI/registerComponent/RegisterComponent'
import {handleLogin,handleRegister} from './types/UI';
import {loginAccount,registerAccount,logoutAccount} from './API/axios';

interface AppState{
    name:string;
    token:string;
    loggingIn:boolean;
    loggedIn:boolean;
    registering:boolean;
}

class App extends React.Component<{},AppState,{}>{

    state={
        name:'',
        token:'',
        loggingIn:false,
        loggedIn:false,
        registering:false
    }

    componentDidMount(){
        if(window.innerWidth<500){
            alert("Not supported on phone yet, sorry, please try again on computer.");
        }
    }

    render(){
        let toRender:any='Please Login';
        if(this.state.loggingIn){
            toRender=<LoginComponent handleLogin={this.handleLogin} closeForm={()=>this.setLoggingIn(false)}/>
        }else if(this.state.registering){
            toRender=<RegisterComponent handleRegister={this.handleRegister} closeForm={()=>this.setRegistering(false)}/> 
        }else if(this.state.loggedIn){
            toRender=<Dashboard token={this.state.token}/>
        }
        return (
            <div className="App">
                {/*<SideDrawer 
                    open={true}
                    name={this.state.name}
                    loginIn={()=>this.setLoggingIn(true)} 
                    logout={()=>this.handleLogout()}
                    register={()=>this.setRegistering(true)}
                />*/}
                <Header 
                    name={this.state.name}
                    loginIn={()=>this.setLoggingIn(true)} 
                    logout={()=>this.handleLogout()}
                    register={()=>this.setRegistering(true)}
                />
                <div className="main">
                    {toRender}
                </div>
           </div>
      );
    }

    private setLoggingIn = (value:boolean) => {
        this.setState({loggingIn:value});
    }

    private setRegistering = (value:boolean) => {
        this.setState({registering:value});
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
        this.setState({name:'',token:'',loggedIn:false})
        logoutAccount(this.state.token);
    }
}

export default App;
