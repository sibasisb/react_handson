import React, { useContext, useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../Stylesheets/mystyles.css'
import { UserContext } from '../App'

const CompanyDetailsComponent=({company})=>{
    const {state}=useContext(UserContext)

    const handleSubmit=(company)=>{
        fetch("http://localhost:8080/watchList",{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                userId:state.id,
                companyId:company.companyId
            })
        })
        .then(()=>{
            alert("Successfully added to the watch list");
        })
        .catch(err=>{
            console.log("Hi, this is\n"+err)
        });
    }

    return (
        <div className="col-xs-12 col-sm-6 col-lg-4 card mycard">
            <div className="card-body">
                <h5 className="card-title">{company.companyName}</h5>
                <p className="card-text">{company.description}</p>
                <p>
                    <b>Today's Price : ${company.currentStockPrice}</b>
                    {
                        state?
                        <button type="submit" className="btn btn-primary watch-button" onClick={()=>{handleSubmit(company)}}>Watch</button>:
                        <></>
                    }
                    
                </p>
            </div>
        </div>
    );
}

export const CompaniesListComponent=()=>{
    const [companiesList,setCompaniesList]=useState([])

    useEffect(()=>{
        fetch("http://localhost:8080/companies",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(result=>{
            setCompaniesList(result)
        })
        .catch(err=>console.log(err))
    },[])   
    
    return (
        <div className="gallery">
            <div className="row">
            {
                companiesList.map((company,index)=>{
                    return (
                        <CompanyDetailsComponent key={company.companyId} company={company} />
                    );
                })
            }
            </div>
        </div>
    );
}
