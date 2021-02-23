import React from 'react';
import{NavItem} from 'reactstrap';
import { Link } from 'react-router-dom'
import {ReactComponent as Logo} from "../Assets/nihilo.svg";


export const SideBar=()=>{

return(

<div className="sideBarCont">

  <Logo className="logo"/>
   
   <div className="optionContainer">
   <div className="options">
     <NavItem>
        <Link to="/DashBoard">DashBoard</Link>
     </NavItem>
   </div>
   <div className="options">
     <NavItem>
        <Link to="/Add">Add a Transaction</Link>
     </NavItem>
   </div>
   <div className="options">
     <NavItem>
        <Link to="/Income">Income Statements</Link>
     </NavItem>
   </div>
   </div>
    </div>


); 

}