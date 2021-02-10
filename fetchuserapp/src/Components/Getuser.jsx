import React, { Component } from 'react'
import '../Stylesheets/mystyles.css'
export class Getuser extends Component {
    constructor(props){
        super(props);
        this.state={
            loading:true,
            person:null
        }
    }

    async componentDidMount(){
        const url="https://api.randomuser.me/";
        const response=await fetch(url);
        const data=await response.json();
        this.setState(state=>({
            loading:false,
            person:data.results[0]
        }));
        console.log(data.results[0]);
    }

    render(){
        return (
            <div>
                {
                    this.state.loading?
                    (<h1>Loading ...</h1>):
                    (<div className="image-container">
                        <b><span>{this.state.person.name.title} {this.state.person.name.first} {this.state.person.name.last}</span></b>
                        <br/>
                        <img src={this.state.person.picture.large} width="200" height="200" alt="Image of random user" />
                    </div>)
                    
                }
            </div>
        );
    }

}