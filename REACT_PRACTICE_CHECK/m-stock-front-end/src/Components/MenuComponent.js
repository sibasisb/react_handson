import React, { useContext } from 'react';
import {useHistory,Link} from 'react-router-dom'
import '../Stylesheets/mystyles.css'
import 'bootstrap/dist/css/bootstrap.css'
import { UserContext } from '../App';

const MenuComponent=()=>{
    const {state,dispatch}=useContext(UserContext)
    const history=useHistory()

    const renderList=()=>{
        if(state){
            return ([
                <li key={1} className="nav-item"><Link className="nav-link" to="Companies">Companies</Link></li>,
                <li key={2} className="nav-item"><Link className="nav-link" to="Watchlist">Watch List</Link></li>,
                <li key={3} className="nav-item"><Link className="nav-link" to="Performance">Compare Performance</Link></li>,
                <li key={4} className="nav-item"><Link className="nav-link" to="#" onClick={()=>handleLogout()}>Logout</Link></li>
            ]);    
        }
        
        return ([
                <li key={5} className="nav-item"><Link className="nav-link" to="Login">Login</Link></li>,
                <li key={6} className="nav-item"><Link className="nav-link" to="Companies">Companies</Link></li>
        ])
    }

    const handleLogout=()=>{
        localStorage.clear()
        dispatch({type:"CLEAR"})
        history.push('/Login')
    }

    return (
        <div>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <Link to="Companies" className="navbar-brand">mStock App</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">  
                <ul className="navbar-nav mr-auto">  
                {renderList()}
                </ul>
                </div>
            </nav>
        </div>
    );
}

export default MenuComponent;