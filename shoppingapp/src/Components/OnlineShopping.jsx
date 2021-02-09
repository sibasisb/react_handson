import React,{Component} from 'react';
import {Cart} from './Cart';
import '../Stylesheets/mystyle.css';

export class OnlineShopping extends Component{
    render(){
        const cartInfo=[{itemname:"Laptop",price:40000},
        {itemname:"TV",price:120000},
        {itemname:"Washing Machine",price:50000},
        {itemname:"Mobile",price:30000},
        {itemname:"Fridge",price:70000}];
        return (
            <div className="mydiv">
             <h1>Items Ordered:</h1>
             <Cart items={cartInfo}/>   
            </div>
        );
    }
}