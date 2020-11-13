import React, { useState, useEffect } from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import { Nav, Navbar, NavDropdown } from "react-bootstrap"
import logo from "../images/logo.png"
import logo2 from "../images/logo2.png"
import netlifyidentity from "netlify-identity-widget"
import "./style.css";


function NavBar() {
  const [user, setuser] = useState<String>()
  console.log(user)

  useEffect(() => {
    netlifyidentity.init({})
    netlifyidentity.close()
  }, [])

  netlifyidentity.on("login", user => {
    netlifyidentity.close()
    setuser(user)
  })

  netlifyidentity.on("logout", () => {
    netlifyidentity.close()
    setuser()
  })

  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      style={{ backgroundColor: "white", marginBottom: "15px" }}
    >
      <Navbar.Brand href="/" className="d-flex align-items-center">
        {" "}
        <img
          src={logo}
          width="60"
          height="60"
          className="d-inline-block align-top"
          alt="logo"
        />{" "}
        <img
          src={logo2}
          width="70"
          height="40"
          className="d-inline-block align-top"
          alt="logo"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav
          style={{ display: "flex", justifyContent: "center", color: "black" }}
        >
          <Nav.Link href="/">Home</Nav.Link>
          <NavDropdown title="Testing" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">test1</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">test 2</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="/About">About Me...</Nav.Link>
<Nav.Link style={{position: "absolute", right: "30px"}}>
          {user ? (
            <> welcome : {user && <>{user.user_metadata.full_name}</>} </>
          ) : (
            <button
            style={{borderRadius: "10px"}}
              className="signin"
              onClick={() => {
                netlifyidentity.open()
              }}
            >
              SignIn
            </button>
          )}
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default NavBar
