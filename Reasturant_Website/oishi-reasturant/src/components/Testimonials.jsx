import React from "react";
import styled from "styled-components";
import Avtar1 from "../assets/avatar1.jpg";
import { imageZoomEffect, TitleStyles } from "./ReusableStyles";

const Testimonials = () => {
  return (
    <Section id="testimonials">
      <div className="container">
        <div className="title">
          <h1>
            <span>What</span>Customers Says
          </h1>
        </div>
        <div className="testimonials">
          <div className="testimonial">
            <div className="image">
              <img src={Avtar1} alt="avtar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet. <span>Lorem ipsum</span>s dolor sit
              amet.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={Avtar1} alt="avtar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet. <span>Lorem ipsum</span>s dolor sit
              amet.
            </p>
          </div>
          <div className="testimonial">
            <div className="image">
              <img src={Avtar1} alt="avtar" />
            </div>
            <p>
              Lorem ipsum dolor sit amet. <span>Lorem ipsum</span>s dolor sit
              amet.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  margin: 5vw;
  background: linear-gradient(to right, #fc4958, #e85d05);
  padding: 0.2rem;
  border-radius: 1.5rem;
  position: relative;
  .container {
    margin: 0.5rem;
    padding-top: 1vw;
    padding-bottom: 4vw;
    background-color: white;
    border-radius: 1rem;
    ${TitleStyles}
    .title {
      position: absolute;
      top: -1rem;
      left: 25%;
      padding: 0 2rem;
      background-color: white;
    }
    .testimonials {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 6vw;
      background-color: white;
      margin-top: 3vw;
      .testimonial {
        padding: 0 4vw;
        display: flex;
        flex-direction: column;
        align-items: center;
        text-align: center;
        gap: 1rem;

        p {
          font-size: 1.1rem;
          line-height: 2rem;
          letter-spacing: 0.1rem;
        }
        ${imageZoomEffect}
        .image {
          overflow: hidden;
          width: max-content;
          max-height: 10rem;
          border-radius: 10rem;
          img {
            height: 10rem;
          }
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 1080px) {
    .container {
      .title {
        position: initial;
        background-color: transparent;
      }
      .testimonials {
        flex-direction: column;
      }
    }
  }
`;
export default Testimonials;
