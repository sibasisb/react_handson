import React,{Component} from 'react'
import '../Stylesheets/mystyles.css'

export class Register extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            email:"",
            password:""
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleEmailChange=this.handleEmailChange.bind(this);
        this.handlePasswordChange=this.handlePasswordChange.bind(this);
    }

    handleNameChange(event){
        this.setState(state=>({
            name:event.target.value
        }))
    }

    handleEmailChange(event){
        this.setState(state=>({
            email:event.target.value
        }))
    }

    handlePasswordChange(event){
        this.setState(state=>({
            password:event.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        const cname=this.state.name;
        const ctid=this.state.tid;
        alert(" Thanks  " + cname + "\n Your complaint was submitted" + "\n Your transaction ID is " + ctid);
        this.setState(state=>({
            name:"",
            complaint:""
        }));
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