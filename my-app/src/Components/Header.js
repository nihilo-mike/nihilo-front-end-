import React from "react";
import { Nav, NavItem, NavLink, Navbar } from "reactstrap";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <Navbar fixed="top" light expand className="Header">
      <Nav navbar>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Dashboard"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Dashboard</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav> 
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Add"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Add</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Income"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Income Statement</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Balance"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Balance Sheet</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Income"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Transactions</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
      <Nav navbar>
        <NavItem>
          <NavLink className="nav-link">
            <Link
              to="/Income"
              style={{
                textDecoration: "none",
              }}
            >
              <NavLink>Analysis</NavLink>
            </Link>
          </NavLink>
        </NavItem>
      </Nav>
    </Navbar>
  );
};

export default Header;



