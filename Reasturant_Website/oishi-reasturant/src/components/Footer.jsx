import React from "react";
import styled from "styled-components";
import logo from "../assets/logo.png";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter } from "react-icons/bs";
import { GrLinkedinOption } from "react-icons/gr";
import { FaFacebookF } from "react-icons/fa";
import {} from "react-icons/gr";
const Footer = () => {
  return (
    <div className="footer">
      <Section>
        <div className="brand container">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Illo,
            quia. consectetur adipisicing elit.
          </p>
          <ul>
            <li>
              <AiFillInstagram />
            </li>
            <li>
              <FaFacebookF />
            </li>
            <li>
              <GrLinkedinOption />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
        <div className="container about">
          <div className="title">
            <h3>About Us</h3>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
            quidem, amet, nesciunt maiores dolores commodi sequi earum animi
            dicta distinctio voluptatem voluptas qui! Eos, debitis!
          </p>
        </div>
        <div className="contact container">
          <div className="title">
            <h3>Contact Us</h3>
          </div>
          <p> +977 9861617100</p>
          <p>Oishii@gmail.com</p>
          <p>@Oiishirestro&bar</p>
          <p>Chandragadi, Jhapa, Nepal</p>
        </div>
      </Section>
      <LowerFooter className="lower footer">
        <h2>
          Copyright &copy; 2024 <span>Oishi Reasturant & Bar</span>
        </h2>
      </LowerFooter>
    </div>
  );
};

const Section = styled.footer`
  margin: 0;
  background: linear-gradient(to right, #fc4958, #e85d05);
  color: white;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10vw;
  padding: 4vw;
  .brand {
    img {
      background-color: #fff;
      border-radius: 1.5rem;
      border: 0.3rem solid #f9c74f;
      width: 20vw;
    }
  }
  p {
    font-size: 1.1rem;
    line-height: 2rem;
    letter-spacing: 0.1rem;
  }
  ul {
    display: flex;
    list-style-type: none;
    gap: 4vw;
    margin-top: 2vw;
    li {
      padding: 0.8rem;
      border-radius: 2rem;
      background-color: white;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      svg {
        display: flex;
        justify-content: center;
        align-items: center;
        color: #fc4958;
        font-size: 1.6rem;
        transition: 0.3s ease-in-out;
      }
      &:hover {
        background-color: black;
        svg {
          transform: scale(1.2);
        }
      }
    }
  }
  img {
    /* filter: brightness(0) invert(1); */
    //invering image
  }
  .container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    h3 {
      font-size: 2rem;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    grid-template-columns: 1fr;
    .container {
      img {
        height: 4rem;
        width: 10rem;
      }
    }
  }
`;
const LowerFooter = styled.div`
  margin: 0;
  text-align: center;
  background-color: black;
  color: white;
  padding: 1rem;
  h2 {
    span {
      color: #fc4958;
      text-transform: uppercase;
    }
  }
  @media screen and (min-width: 260px) and (max-width: 450px) {
    h2 {
      display: block;
    }
  }
`;
export default Footer;
