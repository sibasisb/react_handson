import React, { createContext, useContext, useEffect, useReducer } from 'react'
import {Switch,BrowserRouter,Route, useHistory} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import MenuComponent from './Components/MenuComponent';
import { CompaniesListComponent } from './Components/CompanyDetailsComponent';
import { LoginComponent } from './Components/LoginComponent';
import { WatchListComponent } from './Components/watchlistcomponent';
import { PerformanceComponent } from './Components/performancecomponent';
import userReducer, { initialState } from './Reducers/userReducer';

export const UserContext=createContext()

const Routing=()=>{
  const {state,dispatch}=useContext(UserContext)
  const history=useHistory()
  useEffect(()=>{
    const user=JSON.parse(localStorage.getItem("user"))
    if(user){
      dispatch({type:"User",payload:user})
    }
    
  },[])
  return (
    <Switch>
      <Route exact path="/"><LoginComponent/></Route>
      <Route path="/Login"><LoginComponent/></Route>
      <Route path="/Companies"><CompaniesListComponent/></Route>
      <Route path="/Watchlist"><WatchListComponent/></Route>
      <Route path="/Performance"><PerformanceComponent/></Route>
    </Switch>
  )
}

function App() {
  const [state,dispatch]=useReducer(userReducer,initialState)
  return (
    <div>
      <UserContext.Provider value={{state,dispatch}}>
        <BrowserRouter>
          <MenuComponent/>
          <Routing/>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
