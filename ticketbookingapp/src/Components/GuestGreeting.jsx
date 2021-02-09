import React from 'react'


function Login(props){
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

export function GuestGreeting(props){ 
    return (
        <div>
            <h1>Please sign up</h1>
            <Login onClick={props.handleLogin} />
        </div>
    );
}