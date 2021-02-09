import React, { Component } from 'react'
import { GuestGreeting } from './GuestGreeting';
import { UserGreeting } from './UserGreeting';

export class Greetings extends Component {
    constructor(props){
        super(props);
        this.state={
            isLoggedIn:false
        };
        this.handleLogout=this.handleLogout.bind(this);
        this.handleLogin=this.handleLogin.bind(this);
    }

    handleLogin(){
        this.setState(state=>({
            isLoggedIn:true
        }))
    }

    handleLogout(){
        this.setState(state=>({
            isLoggedIn:false
        }))
    }

    render(){
        if(this.state.isLoggedIn){
            return (
                <UserGreeting handleLogout={this.handleLogout}/>
            );
        }
        else{
            return (
                <GuestGreeting handleLogin={this.handleLogin}/>
            );
        }
    }
}