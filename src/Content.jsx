import React from "react";
import { openGmail } from "./Header";
import fotor from "./assets/fotor.png";
import developer from "./assets/developer.png";

export const Content = () => {
  return (
    <div>
      <div className="text-center p-10">
        <img src={fotor} alt="Logo" className="h-auto w-1/4 mx-auto" />
        <h1 className="text-center mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r to-orange-400 from-purple-500 tracking-tighter text-7xl text-white max-w-[600px] mx-auto font-bold">
          ARUNKABISH
        </h1>
        <h3 className="text-center mt-2 font-bold  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl hover:animate-shake animate-once">
          CODER WITH PASSION
        </h3>
        <p className="text-center pt-4 font-medium">
          Passionate Software Engineer with a focus on React WebApp development,
          <br />
          dedicated to crafting elegant and user-friendly mobile applications.
        </p>
        <span className="flex justify-center gap-9 mt-4">
          <a
            className="hover:text-blue-600"
            aria-label="linkedin"
            rel="noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/arunkabish/"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-brand-linkedin"
            >
              <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
              <path d="M8 11l0 5"></path>
              <path d="M8 8l0 .01"></path>
              <path d="M12 16l0 -5"></path>
              <path d="M16 16v-3a2 2 0 0 0 -4 0"></path>
            </svg>
          </a>
          <a
            className="hover:text-blue-600"
            aria-label="github"
            rel="noreferrer"
            target="_blank"
            href="https://github.com/arunkabish1"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="tabler-icon tabler-icon-brand-github"
            >
              <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
            </svg>
          </a>
        </span>
      </div>
      <div className="flex justify-center gap-9 items-center   ">
          <p className="text-center text-2xl font-bold">Tech Stack</p>
          <img className="w-36 cursor-pointer hover:scale-110 transition ease-in-out" src="https://skillicons.dev/icons?i=html,css" alt="" />
          <img className="w-36 cursor-pointer hover:scale-110 transition ease-in-out" src="https://skillicons.dev/icons?i=js,ts" alt="" />
          <img className="w-36 cursor-pointer hover:scale-110 transition ease-in-out" src="https://skillicons.dev/icons?i=nodejs,express" alt="" />
          <img className="w-36 cursor-pointer hover:scale-110 transition ease-in-out" src="https://skillicons.dev/icons?i=react,tailwind" alt="" />
          <img className="w-36 cursor-pointer hover:scale-110 transition ease-in-out" src="https://skillicons.dev/icons?i=github,netlify" alt="" />
      </div>

      <div className=" justify-center flex container h-full w-3/4 mx-auto rounded-3xl text-center mt-48">
      <img src={developer} className="w-1/3 rounded-3xl"  alt="img" />
<div>
<h1 className="text-5xl font-bold" id="about">ABOUT MYSELF</h1>
        <div className="max-w-[1000px] mx-auto text-center mt-9 font-medium">
          <p>
            Hi, I'm Arun, a dedicated web developer with a passion for creating
            meaningful and <br /> intuitive digital experiences. <br /> I thrive on turning
            complex ideas into elegant solutions through the art of code.
          </p>
          <p className="mt-4">
            My journey into web development started with Pupilfirst in 2021. <br />
            Since then, I've been on a continuous learning path, <br /> staying
            up-to-date with the latest technologies and <br /> trends in the
            ever-evolving world of web development.
          </p>
</div>
        
        </div>
      </div>
      <div className=" justify-center text-center mt-48">
        <h1 className="text-5xl font-bold text-center mt-10">MY PROJECTS</h1>
        <h4
          className="font-normal mt-2 bg-gradient-to-r from-blue-600 via-red-500 to-green-400 inline-block text-transparent bg-clip-text text-2xl hover:animate-pulse text-center
          "
        >
          EXPLORE NOW
        </h4>
        <p className="max-w-[1000px] mx-auto text-center mt-9 font-medium">
          Here are some of my projects that I have worked on. If you have a
          project in mind, want to discuss a potential collaboration, or just
          chat about the latest developments in the tech world, feel free to
          <a href="arunkabish@gmail.com" className="font-medium text-blue-600 hover:underline"> contact me</a>.
        </p>
      </div>
    </div>
  );
};

export default Content;
