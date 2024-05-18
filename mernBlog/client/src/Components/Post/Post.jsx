import React from "react";
const post = () => {
  return (
    <div className="post">
      <div className="image">
        <img
          src="https://img.freepik.com/free-photo/modern-sports-car-speeds-through-dark-curve-generative-ai_188544-9136.jpg"
          alt=""
        />
      </div>
      <div className="text">
        <h2>Full-House battery backup comming this year</h2>
        <p className="info">
          <a className="author">Saroj Adhikari</a>
          <time>2023-01-06 16:45</time>
        </p>
        <p className="summary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          quidem officia explicabo incidunt deleniti sed, provident rem,
          quisquam, obcaecati recusandae soluta sint ipsam quas? Nam inventore
          nemo saepe adipisci accusantium.
        </p>
      </div>
    </div>
  );
};

export default post;
