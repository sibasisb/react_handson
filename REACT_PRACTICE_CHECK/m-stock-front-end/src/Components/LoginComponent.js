import React, { useContext, useState } from 'react'
import {UserContext} from '../App'
import '../Stylesheets/mystyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { useHistory } from 'react-router-dom'

export const LoginComponent=()=>{
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [emailerror,setEmailError]=useState("")
    const [pwderror,setPwdError]=useState("")
    const [loggedInError,setLoginError]=useState("")
    const {state,dispatch}=useContext(UserContext)
    const history=useHistory()
    const handleSubmit=(event)=>{
        event.preventDefault();
        let errorsjsx=''
        let pwderrorjsx=''
        let loginerrorjsx=''
        let flag=0
        
        const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
        if(email==""){
            errorsjsx=<li>Email is required</li>
            flag=1
        }
        else if(!regex.test(email)){
            errorsjsx=<li>Email is invalid</li>
            flag=1      
        }

        if(password==""){
            pwderrorjsx=<li>Password is required</li>
            flag=1
        }

        setEmailError(errorsjsx)
        setPwdError(pwderrorjsx)
        if(flag==1){
            return;
        }

        /*const data={
            user:{
                name:"siba"
            },
            token:"aanfdskjkssjasja"
        }
        localStorage.setItem("user",JSON.stringify(data.user));
        localStorage.setItem("token",data.token);
        dispatch({type:"USER",payload:data.user});
        history.push('/Companies');*/

        fetch("http://localhost:8080/users",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                email:email,
                password:password
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if(data=="Invalid Credentials"){
                loginerrorjsx=<li>Email or password is invalid</li>
                setLoginError(loginerrorjsx)
            }
            else{
                localStorage.setItem("user",JSON.stringify(data))
                dispatch({type:"USER",payload:data})
                history.push('/Companies')  
            }     
        })
        .catch(err=>{
            console.log(err)
            loginerrorjsx=<li>Email or password is invalid</li>
            setLoginError(loginerrorjsx)
        });
        
        
    }

    return (
        <div className="container">
        <div className="card login-card">
            <div className="card-body">
                <h2 className="card-title">Let's get started by login</h2>
                <font color="red">Fields marked with * are mandatory.</font>
                <ul className="error-list">
                    {emailerror}
                    {pwderror}
                    {loggedInError}
                </ul>
                
                <div id="email-error"></div>
                <div id="password-error"></div>
                <form className="login-form">
                    <div className="row">
                    <div className="form-group col-xs-12 col-md-5">
                        <label htmlFor="email">Email address<font color="red">*</font></label>
                        <input id="email" type="text" onChange={(event)=>setEmail(event.target.value)} className="form-control" />
                    </div>
                    </div>
                    <div className="row">
                    <div className="form-group col-xs-12 col-md-5">
                        <label htmlFor="password">Password<font color="red">*</font></label>
                        <input id="password" type="password" onChange={(event)=>setPassword(event.target.value)} className="form-control" />
                    </div>
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
        </div>
        </div>
    );
}