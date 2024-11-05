import React, { useState } from "react";
import LMS from "./assets/image.png";
import node from "./assets/image2.png";
import sp from "./assets/image3.png";
import spp from "./assets/Screenshot (7).png";
import sppp from "./assets/download.png";
import ietec from "./assets/image4.png";
import foodies from "./assets/foodies.png";

export const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      url: "https://sports-app-arunkabish.netlify.app/scorepanel",
      img: sp,
      title: "Sport News App",
      description: "Built using React.js and TypeScript, Tailwind and Deployed on Netlify.",
      codeUrl: "https://github.com/arunkabish1/Sports-Application",
    },
    {
      url: "https://chatbot-using-gemini-six.vercel.app/",
      img: spp,
      title: "Chatbot Using Gemini AI",
      description: "Built using React.js and Node.js, Tailwind and Deployed on Vercel.",
      codeUrl: "https://github.com/arunkabish1/Chatbot-using-Gemini",
    },
    {
      url: "https://newsletter-five-gold.vercel.app/",
      img: sppp,
      title: "Responsive Subscription Mailer System",
      description: "Built using React.js and Tailwind and Deployed on Vercel.",
      codeUrl: "https://github.com/arunkabish1/Subscription-Mailer",
    },
    {
      url: "https://arunkabish1.github.io/ietec/Home",
      img: ietec,
      title: "IETEC Website Clone",
      description: "Built using HTML and CSS and Deployed on GitHub.",
      codeUrl: "https://github.com/arunkabish1/arunkabish1.github.io",
    },
    {
      url: "https://tryingfoodies.netlify.app/",
      img: foodies,
      title: "Trying Foodies",
      description: "Built using React and Dummy API and Deployed on Netlify.",
      codeUrl: "https://github.com/arunkabish1/Try-Foodies",
    },
    {
      url: "https://lms-app-4x6h.onrender.com/index",
      img: LMS,
      title: "Learning Management System",
      description: "Built using Node.js and Postgres database and Deployed on Render.",
      codeUrl: "https://github.com/arunkabish1/lms_application",
    },
    {
      url: "https://wd201-unxw.onrender.com/",
      img: node,
      title: "Node.js Task Manager",
      description: "Built using Postgres database and Deployed on Render.",
      codeUrl: "https://github.com/arunkabish1/wd201",
    },
  ];

  const handleProjectClick = (url) => {
    setSelectedProject(url);
    open(url)
  };

  return (
    <div id="projects" className="mt-10 flex flex-col justify-center items-center space-y-6">
      {projects.map((project, index) => (
        <div
          key={index}
          className="bg-gray-800 flex-row flex md:flex-none border md:w-2/4  w-96  border-gray-700 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105"
          onClick={() => handleProjectClick(project.url)} 
        >
          <img
            src={project.img}
            alt={project.title}
            className="object-cover md:w-full w-1/3"
          />
          <div className="p-4">
            <h5 className="mb-2 text-2xl font-bold text-white">{project.title}</h5>
            <p className="mb-3 text-gray-300">{project.description}</p>
            <a
              href={project.codeUrl}
              className="font-medium text-blue-400 hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Code
            </a>
          </div>
        </div>
      ))}
     
    </div>
  );
};

export default Projects;
