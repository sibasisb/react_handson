import React from 'react';
import '../Stylesheets/mystyle.css';

const percentToDecimal=(decimal)=>{
    return (decimal.toFixed(2) + "%" );
};

const calcScore=(total,goal)=>{
    return percentToDecimal(total/goal);
};

export const CalculateScore=({name,school,total,goal})=>{
    return (
        <div className="format-style">
            <h1><font color="brown">Student Details</font></h1>
            <div className="name">
                <span><b>Name:</b></span>
                <span>{name}</span>    
            </div>
            <div className="school">
                <span><b>School:</b></span>
                <span>{school}</span>    
            </div>
            <div className="total">
                <span><b>Total:</b></span>
                <span>{total}</span>
                <span> Marks</span>    
            </div>
            <div className="score">
                <span><b>Score:</b></span>
                <span>{calcScore(total,goal)}</span>    
            </div>
        </div>
    );
}; 