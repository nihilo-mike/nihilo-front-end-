import React from 'react';
import{Nav,NavItem,NavLink} from 'reactstrap';



export const Header=()=>{
           
    
    return ( 
            <div className="Header">
                <Nav tabs>
                    <NavItem>
                    <NavLink href="#" className="NavBar">Dashboard</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="navLink">Transactions</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#" className="navLink">analysis</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#"className="navLink">Summary</NavLink>
                    </NavItem>
                </Nav>
            </div>

         );
    }


 
export default Header
;



