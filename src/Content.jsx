import React from "react";
import { openGmail } from "./Header";
//import image from "/home/rog/portfolio/portfolio/src/assets/Daco_4263064.png";


export const Content = () => {
  return (
    <div >
      <div className="text-center mt-48">
      
        

        <h1 className="text-center mt-6 cursor-pointer hover:-translate-y-1 hover:scale-110 transition ease-in-out hover:text-transparent bg-clip-text hover:bg-gradient-to-r to-orange-400 from-purple-500 tracking-tighter text-7xl text-white max-w-[600px] mx-auto font-bold">
          ARUNKABISH !
        </h1>
        <h3 className="text-center mt-2 font-bold  bg-gradient-to-r from-blue-600 via-green-500 to-indigo-400 inline-block text-transparent bg-clip-text text-2xl hover:animate-shake animate-once">
          CODER WITH PASSION
        </h3>
        <p className="text-center mt-9 font-medium">
          Passionate Software Engineer with a focus on React WebApp development,
          <br />
          dedicated to crafting elegant and user-friendly mobile applications.
        </p>

        <button className="bn5 mt-10 border-color-white" onClick={openGmail}>
          Contact
        </button>
      </div>

      <div className=" justify-center text-center mt-48">
        <h1 className="text-5xl font-bold ">ABOUT MYSELF</h1>
        <h4
          className="text-center font-normal mt-2 bg-gradient-to-r from-blue-600 via-red-500 to-green-400 inline-block text-transparent bg-clip-text text-2xl hover:animate-pulse
"
        >
          EXPLORE NOW
        </h4>
        <div className="max-w-[1000px] mx-auto text-center mt-9 font-medium">
          <p>
            Hi, I'm Arun, a dedicated web developer with a passion for creating
            meaningful and intuitive digital experiences. I thrive on turning
            complex ideas into elegant solutions through the art of code.
          </p>
          <p className="mt-4">
            My journey into web development started with Pupilfirst in 2021.
            Since then, I've been on a continuous learning path, staying
            up-to-date with the latest technologies and trends in the
            ever-evolving world of web development.
          </p>
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
          <a href="arunkabish@gmail.com">@arunkabish</a>.
        </p>
      </div>
    </div>
  );
};

export default Content;
