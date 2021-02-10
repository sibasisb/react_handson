import React,{Component} from 'react'
import '../Stylesheets/mystyles.css'

const validateForm=(state)=>{
    let nameMsg="",emailMsg="",passwordMsg="";
    if(state.name=="" || state.name.length<5){
        nameMsg="Name should have at least 5 characters";
    }
    const regex=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(!regex.test(state.email)){
        emailMsg="Email is invalid";      
    }
    if(state.password=="" || state.password.length<8){
        passwordMsg="Password should have at least 8 characters";
    }

    const res={
        fullName:nameMsg,
        email:emailMsg,
        password:passwordMsg
    }

    console.log(res);

    return res;
}

export class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:"",
            errors:{
                fullName:"",
                email:"",
                password:""
            }
        };
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }

    handleNameChange(event){
        this.setState(state=>({
            name:event.target.value
        }));
    }

    handleEmailChange(event){
        this.setState(state=>({
            email:event.target.value
        }));
    }

    handlePasswordChange(event){
        this.setState(state=>({
            password:event.target.value
        }));
    }

    

    handleSubmit(e){
        e.preventDefault();
        const res=validateForm(this.state);
        this.setState(state=>({
            errors:res
        }),
        ()=>{
            if(res.fullName=="" && res.email=="" && res.password==""){
                alert("Valid Form");
                this.setState(state=>({
                    name:"",
                    email:"",
                    password:"",
                    errors:{
                        fullName:"",
                        email:"",
                        password:""
                    }
                }));
            }
            else {
                let str="";
                if(this.state.errors.fullName!==""){
                    str=str + this.state.errors.fullName;
                }
                if(this.state.errors.email!==""){
                    str=str + "\n" + this.state.errors.email;
                }
                if(this.state.errors.password!==""){
                    str=str + "\n" + this.state.errors.password + "\n";
                }
                alert(str);
            }
            
        });
        
    }


    render(){
        return (
            <div>
                <h2 className="complaint-heading">Register Here !!!</h2>
                <form onSubmit={this.handleSubmit}>
                    <table className="mytable">
                    <tr>                    
                        <td><label for="cname">Name : </label></td>
                        <td><input id="cname" type="text" value={this.state.name} onChange={this.handleNameChange}/><br/></td>
                    </tr>
                    <tr>                    
                        <td><label for="cmail">Email : </label></td>
                        <td><input id="cmail" type="text" value={this.state.email} onChange={this.handleEmailChange}/><br/></td>
                    </tr>
                    <tr>                    
                        <td><label for="cpassword">Password : </label></td>
                        <td><input id="cpassword" type="password" value={this.state.password} onChange={this.handlePasswordChange}/><br/></td>
                    </tr>

                    </table>
                    <input type="submit" value="Submit"/><br/>
                </form>
            </div>
        );
    }
}