import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-2xl mx-auto p-3 text-center">
        <div className="">
          <h1 className="text-3xl font font-semibold text-center my-7">
            About J0ras Blog
          </h1>
          <div className="text-md text-gray-500 flex flex-col gap-6">
            <p>
              Welcome to joras Blog! This blog was created by saroj adhikari as
              a personal project to share ideas with this world. saroj is
              passionate developer who loves to share his thoughts and ideas
              with the world. Saroj is a passionate developer who loves to weite
              about the technology, coding, and everything in between
            </p>
            <p>
              On this blog, you'll find weekly articles and tutorials on topics
              such as web development, software engineering and programming
              languages. saroj is always lerning and exploring new technologies,
              so be sure to check back often for new content!
            </p>
            <p>
              We encourage you to leave comments on our posts and engage with
              other readers. you can like other people's comments and reply to
              them as well. we believe that a community of learners can help
              other grow and improve
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
