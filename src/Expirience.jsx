import React from "react";
import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import nptel from "./assets/nptel.png";
import MAPATHON from "./assets/MAPATHON.png";
import { SectionWrapper } from "./utils/SectionWrapper.jsx";
import { textVariant } from "./utils/motion";
import wd101 from "./assets/wd101.jpg"
import wd201 from "./assets/201.jpg"
import wd301 from "./assets/301.jpg"
import wd401 from "./assets/401.jpg"


// Define styles
export const styles = {
  paddingX: "sm:px-16 px-6",
  paddingY: "sm:py-16 py-6",
  padding: "sm:px-16 px-6 sm:py-16 py-10",
  heroHeadText: "font-black text-white lg:text-[80px] sm:text-[60px] xs:text-[50px] text-[40px] lg:leading-[98px] mt-2",
  heroSubText: "text-[#dfd9ff] font-medium lg:text-[30px] sm:text-[26px] xs:text-[20px] text-[16px] lg:leading-[40px]",
  sectionHeadText: "text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]",
  sectionSubText: "sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider",
};

// Define the ExperienceCard component
const ExperienceCard = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #232631" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <img src={experience.icon} alt={experience.company_name} className="w-[60%] h-[60%] object-contain" />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p className="text-secondary text-[16px] font-semibold" style={{ margin: 0 }}>
          {experience.company_name}
        </p>
        <img src={experience.image} className="w-full p-1 h-full object-contain rounded-lg" alt="experience" />
      </div>
      {experience.points.map((point, index) => (
        <p key={`experience-point-${index}`} className="text-white-100 text-[14px] text-center tracking-wider">
          {point}
        </p>
      ))}
    </VerticalTimelineElement>
  );
};

// Define the Experience component
const Experience = () => {
  const experiences = [
    {
      title: "Problem Solving through Programming in C",
      company_name: "NPTEL",
      icon: nptel, // replace tesla with the actual imported icon if different
      iconBg: "#383E56",
      date: "JUL-OCT 2022",
      points: ["Nptel Certification for C language"],
      image: nptel,
    },
    {
      title: "IIT FOOSEE MAPATHON WINNER",
      company_name: "IIT FOOSSEE",
      icon: MAPATHON, // replace tesla with the actual imported icon if different
      iconBg: "#E6DEDD",
      date: "FEB-MAY 2023",
      points: ["Mapathon is a map-making competition for creating thematic maps, using open-source data and mapping software."],
      image: MAPATHON,
    },
    {
        title: "WD101 - Introduction to Web Development Course",
        company_name: "AICTE PUPILFIRST",
        icon: wd201,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
          "Developing and maintaining web applications using Node.js and other related technologies.",
        ],
        image: wd201
      },
    {
        title: "WD201 - Web Development Course",
        company_name: "AICTE PUPILFIRST",
        icon: wd301,
        iconBg: "#E6DEDD",
        date: "Jan 2021 - Feb 2022",
        points: [
          "Developing and maintaining web applications using Node.js and other related technologies.",
        ],
        image: wd201
      },
      {
        title: "WD301 - Reactjs Development Course",
        company_name: "AICTE PUPILFIRST",
        icon: wd301,
        iconBg: "#383E56",
        date: "Jan 2022 - Jan 2023",
        points: [
          "Developing and maintaining web applications using React.js and other related technologies.",
        ],
        image: wd301
      },
      {
        title: "WD401-Production Web Development Course",
        company_name: "AICTE PUPILFIRST",
        icon: wd401,
        iconBg: "#E6DEDD",
        date: "Jan 2023 - Present",
        points: [
          "Developing and maintaining web applications from scratch using company production and other related technologies.",
        ],
         image: wd401
       },
    
  ];

  return (
    <>
      <div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>What I have done so far</p>
        <h2 className={`${styles.sectionHeadText} text-center`}>The Path</h2>
      </div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={`experience-${index}`} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
