import React, { useState, useLayoutEffect } from "react";
import { Link } from "react-router-dom";
// import "./Navbar.css";
export default function Navbar() {
  const [list, setList] = useState(true);
  const [list1, setList1] = useState(false);
  
  const listDisplay = () => {
    setList1(!list1);
  };
  useLayoutEffect(() => {
    function updateSize() {
      if (window.innerWidth < 601) {
        setList(false);
      } else {
        setList(true);
        setList1(false);
      }
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  const hideList =() => {
      setList1(false);
  }
  return (
    <>
      <nav className="navbar">
        <div className="container flex">
          <h1>Codilar</h1>
          {list && (
            <ul className="list">
              <li>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li>
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li>
                <Link to={"/Product"} className="nav-link">
                  Product
                </Link>
              </li>
              <li className="dropdown">
                <Link to={"/"} className="nav-link">
                  dropdown
                </Link>
                <div className="dropdown-content">
                  <Link to={"/link1"} className="nav-link">
                    Link 1
                  </Link>
                  <Link to={"/link2"} className="nav-link">
                    Link 2
                  </Link>
                  <Link to={"/link3"} className="nav-link">
                    Link 3
                  </Link>
                </div>
              </li>
            </ul>
          )}

          {list1 && (
            <ul className="list">
            <li onClick={hideList}>
                <Link to={"/"} className="nav-link">
                  {" "}
                  Home{" "}
                </Link>
              </li>
              <li onClick={hideList}> 
                <Link to={"/contact"} className="nav-link">
                  Contact
                </Link>
              </li>
              <li onClick={hideList}>
                <Link to={"/about"} className="nav-link">
                  About
                </Link>
              </li>
              <li onClick={hideList}>
                <Link to={"/Product"} className="nav-link">
                  Product
                </Link>
              </li>
              <li className="dropdown" onClick={hideList}>
                <Link to={"/"} className="nav-link">
                  dropdown
                </Link>
                <div className="dropdown-content">
                  <Link to={"/link1"} className="nav-link">
                    Link 1
                  </Link>
                  <Link to={"/link2"} className="nav-link">
                    Link 2
                  </Link>
                  <Link to={"/link3"} className="nav-link">
                    Link 3
                  </Link>
                </div>
              </li>
            </ul>
          )}
          <div className="icon" onClick={listDisplay}>
            <i className="fa fa-bars"></i>
          </div>
        </div>
      </nav>
    </>
  );
}
