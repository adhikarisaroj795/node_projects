import React from "react";
import styled from "styled-components";
import product1 from "../assets/product1.jpg";
import product2 from "../assets/product2.jpg";
import product3 from "../assets/product3.jpg";
import product4 from "../assets/product4.jpg";
import { TitleStyles, imageZoomEffect } from "../components/ReusableStyles";

const Products = () => {
  const data = [
    {
      image: product1,
      name: "Chicken Burger",
      price: "$22.4/pcs",
    },
    {
      image: product2,
      name: "Toasted Bread",
      price: "$5.4/pcs",
    },
    {
      image: product3,
      name: "Egg Sandwich",
      price: "$22/pcs",
    },
    {
      image: product4,
      name: "Chicken Burger",
      price: "$12.5/pcs",
    },
  ];
  return (
    <Section id="products">
      <div className="title">
        <h1>
          <span>Favourate</span>All the time!
        </h1>
      </div>
      <div className="products">
        {data.map((product, index) => {
          return (
            <div className="product" key={index}>
              <div className="image">
                <img src={product.image} alt="product" />
              </div>
              <h2>{product.name}</h2>
              <h3>{product.price}</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Veniam, ratione.
              </p>
              <button>Buy Now</button>
            </div>
          );
        })}
      </div>
    </Section>
  );
};

const Section = styled.section`
  ${TitleStyles};
  .products {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 3rem;
    margin-top: 3rem;
    .product {
      display: flex;
      flex-direction: column;
      gap: 0.6rem;
      justify-content: center;
      align-items: center;
      h3 {
        color: #fc4958;
      }
      p {
        text-align: center;
        font-size: 1.1rem;
        line-height: 2rem;
        letter-spacing: 0.1rem;
      }
      ${imageZoomEffect}
      .image {
        max-height: 20rem;
        overflow: hidden;
        border-radius: 1rem;
        img {
          height: 20rem;
          width: 15rem;
        }
      }
      button {
        border: none;
        padding: 1rem 4rem;
        color: white;
        font-size: 1.4rem;
        border-radius: 4rem;
        cursor: pointer;
        background: linear-gradient(to right, #fc4958, #e85d05);
        &:hover {
          background: linear-gradient(to left, #fc4958, #e85d05);
        }
      }
    }
  }
  @media screen and (min-width: 260px) and (max-width: 720px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    .products {
      grid-template-columns: repeat(auto-fill, minmax(2, 1fr));
    }
  }
`;

export default Products;
