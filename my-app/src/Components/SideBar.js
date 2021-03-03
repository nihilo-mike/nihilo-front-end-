import React from "react";
import { NavItem, Nav, NavLink } from "reactstrap";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../Assets/nihilo.svg";

export const SideBar = () => {
  return (
    <Nav vertical className="sideBarCont">
      <Logo className="logo" />
      <div className="optionContainer">
        <NavItem className="nav-item">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/DashBoard"
          >
            <NavLink activeClassName="activeside">DashBoard</NavLink>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/Add"
          >
            <NavLink activeClassName="activeside">Add a Transaction</NavLink>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/Income"
          >
            <NavLink activeClassName="activeside">Income Statements</NavLink>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/Balance"
          >
            <NavLink activeClassName="activeside">Balance Sheet</NavLink>
          </Link>
        </NavItem>
        <NavItem className="nav-item">
          <Link
            style={{
              textDecoration: "none",
            }}
            to="/Analysis"
          >
            <NavLink activeClassName="activeside">Analysis</NavLink>
          </Link>
        </NavItem>
      </div>
    </Nav>
  );
};
