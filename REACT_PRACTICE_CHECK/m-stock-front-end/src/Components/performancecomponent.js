import React, { useContext, useState, useEffect } from 'react'
import '../Stylesheets/mystyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { UserContext } from '../App';
import Select from 'react-select'

export const PerformanceComponent=()=>{

    const [firstCompany,setFirstCompany]=useState(null)
    const [secondCompany,setSecondCompany]=useState(null)
    const [companiesInfo,setCompaniesInfo]=useState([])
    const [date1, onChangeDate1] = useState();
    const [date2, onChangeDate2] = useState();
    const [dataList,setDataList]=useState([])
    const {state}=useContext(UserContext)

    useEffect(()=>{
        let dlist=[]
        fetch("http://localhost:8080/companies",{
            method:"GET"
        })
        .then(res=>res.json())
        .then(result=>{
            result.forEach(res=>{
                dlist.push({
                    label:res.companyName,
                    value:res.companyId
                })
            })
            setDataList(dlist)
        })
        .catch(err=>console.log(err))
    },[])

    const handleFetch=(event)=>{
        event.preventDefault()
        let cInfo=[];
        const c1=firstCompany.value
        const c2=secondCompany.value
        const url="http://localhost:8080/stocks/compare-performance?companyCode1="+c1+"&companyCode2="+c2+"&from="+date1+"&to="+date2
        fetch(url,{
            method:"GET"
        })
        .then(res=>res.json())
        .then(res=>{
            let newcInfo=res
            newcInfo.sort((a,b)=>{
                return a.date<b.date
            })
            for(let i=0;i<newcInfo.length;i=i+2){
                cInfo.push({
                    date:newcInfo[i].date,
                    company1:{
                        stockPrice:newcInfo[i].stockPrice,
                        name:newcInfo[i].company.companyName
                    },
                    company2:{
                        stockPrice:newcInfo[i+1].stockPrice,
                        name:newcInfo[i+1].company.companyName
                    }
                })
            }
            setCompaniesInfo(cInfo)    
        })
        .catch(err=>{
            console.log(err)
        })
    }

    

    return (
        <div>
        <div style={{textAlign:'center'}}>
            <h1>Compare potential companies </h1>
            <h2 className="grey-lined">Make smart investing decisions</h2>
            <form className="login-form ml-5">
                <div className="row">
                    <div className="form-group col-xs-8 col-md-6">
                        <label className="grey-lined" htmlFor="company1">Select Company 1</label>
                        <Select id="company1" className="form-control" placeholder="Choose.." options={dataList} value={firstCompany} onChange={(e)=>{setFirstCompany(e)}} />
                    </div>
        
                    <div className="form-group col-xs-8 col-md-6">
                        <label className="grey-lined" htmlFor="company2" >Select Company 2</label>
                        <Select id="company2" className="form-control" placeholder="Choose.." options={dataList} value={secondCompany} onChange={(e)=>{setSecondCompany(e)}} />
                    </div>
                </div>

                <div className="row">
                    <div className="form-group col-xs-8 col-md-6">
                        <label className="grey-lined" htmlFor="fromdate">From Date</label>
                        <input type="date" id="fromdate"  value={date1} onChange={(e)=>{onChangeDate1(e.target.value)}} name="fromdate" className="form-control"/>
                        
                    </div>
        
                    <div className="form-group col-xs-8 col-md-6">
                        <label className="grey-lined" htmlFor="todate">To Date</label>
                        <input type="date" id="todate" value={date2} onChange={(e)=>{onChangeDate2(e.target.value)}} name="todate" className="form-control"/>
                    </div>
                </div>
                <div className="form-group">
                    <div className="row">
                        <button className="btn btn-primary ml-3" onClick={handleFetch}>Fetch Details</button>
                    </div>
                </div>
            </form>
        </div>
        <div className="container ml-4 mt-2 mr-4">
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Date</th>
                            <th scope="col">Company</th>
                            <th scope="col">Stock Price</th>
                        </tr>
                    </thead>
                    {
                        companiesInfo.map((companyInfo,index)=>{
                            return (
                                <tbody key={index}>
                                    <tr>
                                        <th scope="row">{companyInfo.date}</th>
                                        <td>{companyInfo.company1.name}</td>
                                        <td>${companyInfo.company1.stockPrice}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row"></th>
                                        <td>{companyInfo.company2.name}</td>
                                        <td>${companyInfo.company2.stockPrice}</td>
                                    </tr>
                                </tbody>
                            )
                        })
                    }
                </table>
            </div>
        </div>
        </div>
    )
}