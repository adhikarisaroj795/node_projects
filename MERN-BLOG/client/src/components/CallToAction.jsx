import { Button } from "flowbite-react";
import React from "react";

const CallToAction = () => {
  return (
    <div className="flex flex-col sm:flex-row p-3 border border-teal-500 justify-center items-center rounded-tl-3xl rounded-br-3xl text-center">
      <div className="flex-1 justify-center flex flex-col">
        <h2 className="text-2xl">Want to learn more about javaScript ? </h2>
        <p className="text-gray-500 my-2">
          Checkout my projects javaScripts projects
        </p>
      </div>
      <Button
        gradientDuoTone={"purpleToPink"}
        className="rounded-tl-xl rounded-bl-none"
      >
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visit my Portfolio
        </a>
      </Button>
      <div className="p-7 flex-1">
        <img src="https://bairesdev.mo.cloudinary.net/blog/2023/08/What-Is-JavaScript-Used-For.jpg" />
      </div>
    </div>
  );
};

export default CallToAction;