import React from "react";
import styled from "styled-components";
import hero from "../assets/01.jpg";
import heroDesign from "../assets/HeroDesign.png";

const Hero = () => {
  return (
    <Section id="home">
      <Background>
        <img src={hero} alt="Background" />
      </Background>
      <Content>
        <div className="sale">
          <img src={heroDesign} alt="hero design" />
          <h1>
            Big Discount <span>50% Off</span>
          </h1>
        </div>
        <div className="info">
          <h2>RETAILER</h2>
          <em>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odio quos
            id rem nostrum consectetur quas explicabo commodi rerum perspiciatis
            dolorem.
          </em>
          <button>ORDER NOW</button>
        </div>
      </Content>
    </Section>
  );
};

const Section = styled.section`
  height: 90vh;
  width: 100vw;
  position: relative;
`;

const Background = styled.div`
  height: 100%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    filter: brightness(60%);
  }
`;

const Content = styled.div`
  position: absolute;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;

  .sale {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-left: 10%;

    img {
      max-width: 80%;
      height: auto;
      margin-bottom: 1rem;
    }

    h1 {
      color: white;
      font-size: 3rem;
      text-align: center;

      span {
        display: block;
        font-size: 4vw;
      }
    }
  }

  .info {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10%;

    h2 {
      color: #f9c74f;
      font-size: 3rem;
      letter-spacing: 0.5rem;
      margin-bottom: 1rem;
    }

    em {
      color: white;
      text-align: center;
      font-size: 1rem;
      width: 80%;
      margin-bottom: 1rem;
    }

    button {
      padding: 1rem 2rem;
      font-size: 1.4rem;
      background-color: #fc4958;
      border: none;
      color: white;
      font-weight: 800;
      letter-spacing: 0.2rem;
      cursor: pointer;
      transition: background-color 0.3s ease-in-out;
    }
  }

  @media screen and (max-width: 1080px) {
    flex-direction: column;

    .sale {
      margin-left: 0;
      margin-bottom: 2rem;
    }

    .info {
      margin-right: 0;
      text-align: center;
    }

    h2 {
      font-size: 2rem;
    }

    em {
      width: 90%;
    }
  }
`;

export default Hero;
