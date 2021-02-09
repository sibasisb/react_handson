import React from 'react'


function Logout(props){
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

export function UserGreeting(props){ 
    return (
        <div>
            <h1>Welcome Back</h1>
            <Logout onClick={props.handleLogout} />
        </div>
    );
}