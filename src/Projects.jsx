import React from "react";
// import nodejs image
//import Node from "/home/rog/portfolio/portfolio/src/assets/nodejs-icon-512x512-vl7ew1eg.png";

export const Projects = () => {
  return (
<div className="mt-10 flex flex-wrap ml-96 gap-2">
    <div className="">
      <a
        href="https://lms-app-4x6h.onrender.com/index"
        className="flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
       // <img
        //  className="object-cover w-full rounded-t-lg h-96 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg"
        //  src={Node}
        //  alt="nodejs task manager"
       // />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Learning Management System
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            This is a Learning Management System.Build using Nodejs andPostgress database and
            Deployed on Render.
          </p>
          <a href="https://github.com/arunkabish1/lms_application" className="font-medium text-blue-600 hover:underline dark:text-blue-500" > View Code</a>
          
        </div>
      </a>
    </div>
    <div>
      <a
        href="https://wd201-unxw.onrender.com/"
        className="flex flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
      >
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-40 md:w-48 md:rounded-none md:rounded-s-lg"
          src={Node}
          alt="nodejs task manager"
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Nodejs Task Manager
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {" "}
            This is a Nodejs task manager.Build using Postgress database and
            Deployed on Render.
          </p>
          <a href="https://github.com/arunkabish1/wd201" className="font-medium text-blue-600 hover:underline dark:text-blue-500" > View Code</a>
        </div>
      </a>
    </div>
    </div>
  );
};

export default Projects;
