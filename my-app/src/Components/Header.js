import React, { Component} from 'react';
import{Nav,NavItem,NavLink} from 'reactstrap';



class Header extends Component{
    state = {  }
    render() { 
        return ( 
            <div className="Header">
                <Nav tabs>
                    <NavItem>
                    <NavLink href="#" className="Dashboard">Dashboard</NavLink>
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
}

 
export default Header
;