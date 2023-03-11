/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import bookImg from "../assets/projects/bzilla.png";
import cryptoImg from "../assets/projects/crypto.png";
import googleImg from "../assets/projects/googlemomentum.png";
import inventoryImg from "../assets/projects/inventory.png";
import taskImg from "../assets/projects/taskapp.png";
import vodImg from "../assets/projects/vodflix.png";

const Work = () => {
  return (
    <div name="work" className=" w-full md:h-screen bg-[#0a192f] text-gray-300">
      {/* container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>

        {/* grid container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* grid item */}
          <div
            style={{ backgroundImage: `url(${taskImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                MERN Stack ToDo App
              </span>
              <div>
                <a
                  href="https://mern-task-app-frnt.onrender.com"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/mern-task-manager-frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${cryptoImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Crypto Tracker
              </span>
              <div>
                <a href="https://cryptandcave.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/react-crypto-app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${bookImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Book Store Landing Page w/React.Js
              </span>
              <div>
                <a href="https://bookszilla.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/react-book-store-frontend"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${inventoryImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                Inventory Managment w/React Only
              </span>
              <div>
                <a
                  href="https://react-inventory-store.netlify.app"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/react-inventory-store"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${vodImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Movie Catalogue
              </span>
              <div>
                <a href="https://vodflix.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/Voidflix_Movie_Search_Engine"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${googleImg})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* Hover effects */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold text-white tracking-wider">
                React JS Google Momentum Clone
              </span>
              <div>
                <a href="https://googlemomentum.netlify.app" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/bisht11/google-momentum-clone"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 text-gray-700 text-lg font-bold bg-white">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
