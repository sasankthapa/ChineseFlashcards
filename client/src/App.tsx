import * as React from 'react';
import Header from './components/Header/Header';
import './App.css';
import LoginComponent from './components/UI/loginComponent/LoginComponent'

interface AppState{
    token:string;
    loggingIn:boolean;
    loggedIn:boolean;
    focused:boolean;
}

class App extends React.Component<{},AppState,{}>{

    state={
        token:'',
        loggingIn:false,
        loggedIn:false,
        focused:false
    }

    render(){
        let toRender:any='Please Login';
        if(this.state.loggingIn){
            toRender=<LoginComponent handleLogin={this.handleLogin}/>
        }else if(this.state.focused){
        
        }else if(this.state.loggedIn){

        }
        return (
            <div className="App">
                <Header loginIn={this.setLoggingIn.bind(this)}/>
                <div className="main">
                {this.state.loggedIn? 
                    <h1>loggedIn</h1>:
                    toRender}
                </div>
           </div>
      );
    }

    private setLoggingIn = () => {
        this.setState({loggingIn:true})
    }

    private handleLogin = (username:string,password:string) => {
        console.log("anoueao"); 
    }
}

export default App;
