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


/*{"data":[{"creditTransId":222,"amount":12,"remark":"te ","date":"2021-02-14T16:00:00Z",
"accountType":{"accTypeId":2,"name":null},"subAccountType":{"subId":2,"name":null}},
{"creditTransId":223,"amount":3,"remark":"st","date":"2021-02-07T16:00:00Z",
"accountType":{"accTypeId":2,"name":null},
"subAccountType":{"subId":2,"name":null}}]*/
