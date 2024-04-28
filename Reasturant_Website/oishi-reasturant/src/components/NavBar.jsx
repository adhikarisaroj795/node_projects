import React, { useState } from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { VscChromeClose } from "react-icons/vsc";

const NavBar = () => {
  const [navbarState, setNavbarState] = useState(false);

  return (
    <>
      <Nav>
        <div className="brand">
          <a href="#home">
            <img src={logo} alt="logo" />
          </a>
          <div className="toggle" onClick={() => setNavbarState(!navbarState)}>
            {navbarState ? <VscChromeClose /> : <GiHamburgerMenu />}
          </div>
        </div>
        <ul className={navbarState ? "links show" : "links"}>
          <li>
            <a href="#home" className="active">
              Home
            </a>
          </li>
          <li>
            <a href="#services">Our Services</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <a href="#testimonials">Testimonials</a>
          </li>
          <li>
            <a href="#products">Products</a>
          </li>
          <li>
            <a href="#newsletter">News Letter</a>
          </li>
        </ul>
      </Nav>
    </>
  );
};

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4vw;

  .brand {
    display: flex;
    align-items: center;
    gap: 1rem;

    a {
      color: red;
      text-decoration: none;
      font-size: 1.7rem;
      cursor: pointer;
      padding: 1rem;
    }
  }

  .toggle {
    display: none;
    cursor: pointer;
    font-size: 2.7rem;
    color: red;
  }

  .links {
    display: flex;
    list-style-type: none;
    gap: 2rem;
    transition: opacity 0.3s ease-in-out;

    li {
      a {
        color: #fc4958;
        font-weight: 700;
        text-decoration: none;
        text-transform: uppercase;
        letter-spacing: 0.2rem;
        transition: 0.3s ease-in-out;

        &:hover {
          color: #f9c74f;
        }
      }

      .active {
        color: #f9c74f;
      }
    }
  }

  @media screen and (max-width: 1080px) {
    .toggle {
      display: block;
    }

    .links {
      position: absolute;
      top: 100%;
      left: 0;
      width: 100%;
      background-color: #fff;
      padding: 1rem;
      box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
      opacity: 0;
      pointer-events: none;
      transition: opacity 0.3s ease-in-out;

      &.show {
        opacity: 1;
        pointer-events: auto;
      }

      li {
        width: 100%;

        a {
          display: block;
          text-align: center;
        }
      }
    }
  }
`;

export default NavBar;
