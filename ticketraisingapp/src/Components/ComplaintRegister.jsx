import React, { Component } from 'react'
import '../Stylesheets/mystyles.css'
export class ComplaintRegister extends Component{

    constructor(props){
        super(props);
        this.state={
            name:"",
            complaint:"",
            tid:1000
        }
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleNameChange=this.handleNameChange.bind(this);
        this.handleComplaintChange=this.handleComplaintChange.bind(this);
    }

    handleNameChange(event){
        this.setState(state=>({
            name:event.target.value
        }))
    }

    handleComplaintChange(event){
        this.setState(state=>({
            complaint:event.target.value
        }))
    }

    handleSubmit(e){
        e.preventDefault();
        this.setState(state=>({
            tid:state.tid + 1
        }));
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
                <h2 className="complaint-heading">Register your Complaints here !!!</h2>
                <form onSubmit={this.handleSubmit}>
                    <table className="mytable">
                    <tr>                    
                        <td><label for="cname">Name : </label></td>
                        <td><input id="cname" type="text" value={this.state.name} onChange={this.handleNameChange}/><br/></td>
                    </tr>
                    <tr>
                        <td><label for="complaint">Complaint : </label></td>
                        <td><textarea id="complaint" rows="8" value={this.state.complaint} onChange={this.handleComplaintChange} /><br/></td>
                    </tr>
                    </table>
                    <input type="submit" value="Submit"/><br/>
                </form>
            </div>
        );
    }
}