/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import JavascriptImg from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import NodeImg from "../assets/node.png";
import GithubImg from "../assets/github.png";
import PythonImg from "../assets/python.png";
import CssImg from "../assets/css.png";
import HtmlImg from "../assets/html.png";
import MongoImg from "../assets/mongo.png";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#0a192f] w-full h-screen text-gray-300">
      {/* conatiner */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600  text-gray-300">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8 ">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={HtmlImg} alt="HTML icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={CssImg} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={JavascriptImg}
              alt="Javascript icon"
            />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={ReactImg} alt="React icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={GithubImg} alt="Github icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={NodeImg} alt="Node icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={MongoImg} alt="Mongo icon" />
            <p className="my-4">MONGO DB</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img className="w-20 mx-auto" src={PythonImg} alt="Python icon" />
            <p className="my-4">PYTHON</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
