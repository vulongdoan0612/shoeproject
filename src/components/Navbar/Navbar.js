import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import useScrollY from "../Hooks/ScrollY";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Badge } from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
const cx = classNames.bind(styles);
export default function Navbar2() {
  const [scrollY] = useScrollY();
  const cart = useSelector((state) => state.add.cart);

  return (
    <Navbar
      style={
        scrollY < 50
          ? {
              background: "#f0f0f0",
              transition: "all 2.5s ease",
              position: "fixed",
              marginLeft: "3vw",
              marginRight: "3vw",
              right: 0,
              left: 0,

              top: 0,
              zIndex: 10,
            }
          : {
              transition: "all 1.5s ease",
              backdropFilter: "blur(5px)",
              position: "fixed",
              top: 0,
              marginLeft: "3vw",
              marginRight: "3vw",
              left: 0,
              right: 0,

              zIndex: 10,
            }
      }
      // bg="light"
      expand="lg"
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse
          id="basic-navbar-nav"
          style={{ justifyContent: "center" }}
        >
          <Nav style={{ alignItems: "center" }}>
            <Nav.Link style={{ marginRight: "35px" }}>Home</Nav.Link>
            <Nav.Link style={{ marginRight: "35px" }}>Home</Nav.Link>

            <Nav.Link style={{ marginRight: "35px" }}>Link</Nav.Link>
            <Link to="/">
              <Navbar.Brand>
                <img
                  style={{ width: "277px" }}
                  src="https://wootten.com.au/assets/images/logos/wootten-cordwainer-and-leather-craftsmen-2x.5611a81.png"
                  alt=""
                ></img>
              </Navbar.Brand>
            </Link>
            <Nav.Link style={{ marginRight: "35px" }}>Home</Nav.Link>
            <Nav.Link style={{ marginRight: "35px" }}>Home</Nav.Link>

            <Link to="/cart" style={{ marginRight: "35px", color: "black" }}>
              <Badge badgeContent={cart.length} color="primary">
                <ShoppingCartIcon color="black" />
              </Badge>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
