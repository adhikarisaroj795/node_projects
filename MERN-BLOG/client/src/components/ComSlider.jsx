import React, { useState } from "react";
import data from "./Data";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../index.css";

const SampleNextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      &gt;
    </div>
  );
};

const SamplePrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={`${className}`} onClick={onClick}>
      &lt;
    </div>
  );
};

const ComSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow className="slick-next" />,
    prevArrow: <SamplePrevArrow className="slick-prev" />,
    afterChange: (current) => setSlideIndex(current),
  };

  return (
    <div className="w-3/4 m-auto">
      <div className="mt-20">
        <Slider {...settings}>
          {data.map((d) => (
            <div
              key={d.id}
              className="bg-white h-[450px] text-black rounded-xl"
            >
              <div className="h-56 rounded-t-xl bg-indigo-500 flex justify-center items-center">
                <img
                  src={d.img}
                  alt="profile"
                  className="h-44 w-44 rounded-full"
                />
              </div>
              <div className="flex flex-col justify-center items-center gap-4 p-4">
                <p className="text-xl font-semibold">{d.name}</p>
                <p>{d.review}</p>
                <button className="bg-indigo-500 text-white text-lg px-6 py-1 rounded-xl">
                  Readmore
                </button>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default ComSlider;
