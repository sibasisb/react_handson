import React from 'react';
import '../Stylesheets/mystyles.css';

const handleSubmit=(e)=>{
    e.preventDefault();
    let amount=document.querySelector("#amount").value;
    if(isNaN(amount) || amount===''){
        alert("Amount must be a number");
        return;
    }
    amount=amount / 87.99;
    amount=amount.toFixed(2);
    alert("Amount converted to Euro currency= " + amount);
}

export const CurrencyConvertor=()=>{
    return (
        <div>
            <h1 className="heading">Currency Convertor!!!</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" id="amount"/><br/>
                <input type="text" value="Euro" disabled /><br/>
                <input type="submit" value="Submit" /><br/>
            </form>
        </div>
    );
}