import React from "react";
import LMS from "./assets/image.png";
import node from "./assets/image2.png";
import sp from "./assets/image3.png";



export const Projects = () => {
  return (
<div id="projects" className="mt-10 items-center   flex felx-col   ml-96 gap-4">
    <div className="" id="projects" >
      <a
        href="https://lms-app-4x6h.onrender.com/index" target="_blank"
        className="flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover rounded-lg w-1/2 "
          src={LMS}
          alt="lms"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
          Learning Management System
          </h5>
          <p className="mb-3 font-normal text-gray-400">
            {" "}
            Build using Nodejs and Postgress database and
            Deployed on Render.
          </p>
          <a href="https://github.com/arunkabish1/lms_application" target="_blank" className="font-medium text-blue-600 hover:underline dark:text-blue-500" > View Code</a>
          
        </div>
      </a>
    </div>
    <div>
      <a
        href="https://sports-app-arunkabish.netlify.app/scorepanel" target="_blank"
        className="flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover rounded-lg w-1/2 "
          src={sp}
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Sport News App
          </h5>
          <p className="mb-3 font-normal ">
            {" "}
           Build using Reactjs and Typescript ,Taiwind and
            Deployed on Netlify.
          </p>
          <a href="https://github.com/arunkabish1/Sports-Application" className="font-medium text-blue-600 hover:underline dark:text-blue-500" > View Code</a>
        </div>
      </a>
    </div>
    <div className="flex flex-row">
      
    <div className="">
      <a
        href="https://wd201-unxw.onrender.com/" target="_blank"
        className="flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover rounded-lg w-1/2 "
          src={node}
          alt="nodejs task manager"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
            Nodejs Task Manager
          </h5>
          <p className="mb-3 font-normal ">
            {" "}
           Build using Postgress database and
            Deployed on Render.
          </p>
          <a href="https://github.com/arunkabish1/wd201" className="font-medium text-blue-600 hover:underline dark:text-blue-500" > View Code</a>
        </div>
      </a>
    </div>

    </div>
    </div>
  );
};

export default Projects;
