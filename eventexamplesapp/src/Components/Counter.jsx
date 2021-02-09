import React, { Component } from 'react';
import { CurrencyConvertor } from './CurrencyConvertor';
import '../Stylesheets/mystyles.css';

export class Counter extends Component {
    constructor(props){
        super(props);
        this.state={count:0};
        this.handleIncrement=this.handleIncrement.bind(this);
        this.handleDecrement=this.handleDecrement.bind(this);
        this.handleWelcome=this.handleWelcome.bind(this);
        this.onPress=this.onPress.bind(this);
    }

    handleIncrement(){
        this.setState(state=>({
            count:state.count + 1
        }));
        alert("Hello, you have incremented the counter");
    }

    handleDecrement(){
        this.setState(state=>({
            count:state.count - 1
        }));
        alert("Hello, you have decremented the counter");
    }

    handleWelcome(msg){
        alert(msg + " to my app!!!");
    }

    onPress(){
        alert("I was clicked");
    }

    render(){
        return (
            <div className="mydiv">
                <b>{this.state.count}</b><br/>
                <button onClick={this.handleIncrement}>Increase</button><br/>
                <button onClick={this.handleDecrement}>Decrease</button><br/>
                <button onClick={()=>this.handleWelcome("Welcome")}>Say welcome</button><br/>
                <button onClick={this.onPress}>Click on me</button><br/>

                <CurrencyConvertor/>
            </div>
        );
    }

}