import React, { useContext, useEffect, useState } from 'react'
import '../Stylesheets/mystyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { UserContext } from '../App'

export const WatchListComponent=()=>{

    const [companyList,setCompanyList]=useState([])
    const {state,dispatch}=useContext(UserContext)
    useEffect(()=>{
        if(state==null){
            console.log("state is null")
            return
        }        
        fetch("http://localhost:8080/watchList/"+state.id,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(result=>{
            setCompanyList(result)
        })
        .catch(err=>console.log(err))
    },[])

    
    const renderCompanyList=()=>{
        return (
            companyList.map((company)=>{
                return (
                    <div className="col-xs-12 col-sm-6 col-lg-4 card mycard">
                        <div className="card-body">
                            <h5 className="card-title">{company.company.companyName}</h5>
                            <p className="card-text">{company.company.description}</p>
                            <p>
                                <b>Today's Price : ${company.company.currentStockPrice}</b>
                                <button type="submit" className="btn btn-primary btn-danger watch-button" onClick={()=>{handleRemove(company)}}>Remove</button>
                            </p>
                        </div>
                    </div>
                );
            })
        );
    }

    const handleRemove=(company)=>{
        fetch("http://localhost:8080/watchList/"+state.id + "/" + company.company.companyId,{
            method:"DELETE"
        })
        .then(res=>res.text())
        .then(res=>{
            console.log(res);
            if(res=="Deletion successful"){
                const newCompanyList=companyList.filter(companies=>companies.company.companyId!==company.company.companyId);
                console.log(newCompanyList)
                setCompanyList(newCompanyList)
                alert("Removed successfully from the watch list")
            }
        })
        .catch(err=>{
            console.log(err)
        })

    }

    return (
        <div>
            {(companyList==null || companyList.length==0 || state==null)?
                (<h3>No company stock prices added to watch list</h3>):
                (<div className="gallery">
                    <div className="row">
                    {
                        renderCompanyList()
                    }
                    </div>
                </div>)
            }
        </div>
    );
}