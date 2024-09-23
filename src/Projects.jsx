import React from "react";
import LMS from "./assets/image.png";
import node from "./assets/image2.png";
import sp from "./assets/image3.png";
import ietec from "./assets/image4.png";
import foodies from "./assets/foodies.png"

export const Projects = () => {
  return (
    <div id="projects" className="mt-10  lg:flex flex-row flex-wrap justify-center gap-4">
      <div>
        <a
          href="https://lms-app-4x6h.onrender.com/index"
          target="_blank"
          className="flex hover:scale-105  flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover rounded-lg w-1/2"
            src={LMS}
            alt="lms"
          />
          <div className="flex flex-col items-center lg:justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Learning Management System
            </h5>
            <p className="mb-3 mx-12 lg:mx-0 font-normal text-gray-400">
              Build using Nodejs and Postgress database and Deployed on Render.
            </p>
            <a
              href="https://github.com/arunkabish1/lms_application"
              target="_blank"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View Code
            </a>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://sports-app-arunkabish.netlify.app/scorepanel"
          target="_blank"
          className="flex hover:scale-105 flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover rounded-lg w-1/2"
            src={sp}
            alt=""
          />
          <div className="flex flex-col items-center lg:justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Sport News App
            </h5>
            <p className="mb-3 mx-12 lg:mx-0 font-normal">
              Build using Reactjs and Typescript, Taiwind and Deployed on Netlify.
            </p>
            <a
              href="https://github.com/arunkabish1/Sports-Application"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View Code
            </a>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://wd201-unxw.onrender.com/"
          target="_blank"
          className="flex hover:scale-105 flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover rounded-lg w-1/2"
            src={node}
            alt="nodejs task manager"
          />
          <div className="flex flex-col items-center lg:justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Nodejs Task Manager
            </h5>
            <p className="mb-3 font-normal mx-20 lg:mx-0">
              Build using Postgress database and Deployed on Render.
            </p>
            <a
              href="https://github.com/arunkabish1/wd201"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View Code
            </a>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://arunkabish1.github.io/ietec/Home"
          target="_blank"
          className="flex hover:scale-105 flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover rounded-lg w-1/2"
            src={ietec}
            alt="IETEC Website Clone"
          />
          <div className="flex flex-col items-center lg:justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              IETEC Website Clone
            </h5>
            <p className="mb-3 font-normal mx-20 lg:mx-0">
              Build using HTML and CSS and Deployed on Github.
            </p>
            <a
              href="https://github.com/arunkabish1/arunkabish1.github.io"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View Code
            </a>
          </div>
        </a>
      </div>
      <div>
        <a
          href="https://tryingfoodies.netlify.app/"
          target="_blank"
          className="flex hover:scale-105 flex-col items-center border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl"
        >
          <img
            className="object-cover rounded-lg w-1/2"
            src={foodies}
            alt=""
          />
          <div className="flex flex-col items-center lg:justify-between p-4 leading-normal">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">
              Trying Foodies
            </h5>
            <p className="mb-3 font-normal mx-20 lg:mx-0">
              Build using React and Dummy API and Deployed on Netlify.
            </p>
            <a
              href="https://github.com/arunkabish1/Try-Foodies"
              className="font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              View Code
            </a>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Projects;
