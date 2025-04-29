// import { useState } from 'react';
import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../css/Project.css";
import img1 from "../assets/img1.jpg";
import portfolioimg from "../assets/portfolioimg.png";
import musicimg from "../assets/musicimg.png";
import youtubeimg from "../assets/youtubeimg.png";
import textutilsimg from "../assets/textutilsimg.png"

const projects = [
  {
    title: "Portfolio Website",
    // description: "A responsive personal portfolio built using React, Tailwind CSS, and Framer Motion.",
    description: "Built a responsive portfolio website using React.js, styled with Material UI and Bootstrap. Added animations with Framer Motion and particle effects using tsParticles. Used Typewriter Effect and React Icons for visual elements, and ensured code quality with Testing Library and Web Vitals.",
    tools: ["React","MUI","Frame-Motion","React Icon","Bootstrap", "Typewriter Effect"],
    image: portfolioimg,
    github: "https://github.com/Ripukesh870/Portfolio",
    demo: "https://ripukeshportfolio.netlify.app/",
  },
  {
    title: "music web app",
    description: "Developed a music web app using React.js with Material UI (MUI) for UI components and layouts. Integrated Redux Toolkit for state management and React Router for efficient navigation. Enhanced performance with Web Vitals and testing using React Testing Library. Employed modern JavaScript libraries and tools to create a smooth and interactive user experience.",
    tools: ["React","MUI","redux toolkit","react-router-dom", "react-redux"],
    image: musicimg,
    github: "https://github.com/Ripukesh870/RipuMusic",
    demo: "https://ripumusic.netlify.app/",
  },
  {
    title: "youtube clone",
    description: "Built a YouTube clone using React.js, Redux, and React Router for efficient state management and routing. Leveraged Material UI (MUI) for responsive design and Tailwind CSS for utility-first styling. Implemented Redux Toolkit for simplified state management and used Emotion.js for custom styling. Integrated React Icons for scalable icons, and Tailwind Scrollbar for customized scrollbars.",
    tools: ["React", "redux", "react icon", "Tailwind CSS","Emotion.js","Tailwind Scrollbar" ,"MUI"],
    image: youtubeimg,
    github: "https://github.com/Ripukesh870/Youtube_Clone",
    demo: "https://ripu-youtube-clone.netlify.app/",
  },
  {
    title: "TextUtils",
    description: "Compress images easily using React and browser APIs.",
    tools: ["React", "Compressor.js", "Bootstrap"],
    image: textutilsimg,
    github: "https://github.com/Ripukesh870/textUtils",
    demo: "https://textutils1219.netlify.app/",
  },
  
];

const Projects = () => {

  return (
    <section id="projects" className="min-vh-100 p-5 bg-dark text-light">
      <motion.h2
        className="text-center fw-bold display-5 mb-5 text-info"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Featured Projects
      </motion.h2>

      <div className="container">
        <div className="row justify-content-center g-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="col-12 col-md-6 col-lg-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div
                className="card h-100 shadow-lg rounded-4 border-0 project-card"
                style={{
                  overflow: "hidden",
                  background: "linear-gradient(135deg,rgb(168, 162, 155),rgb(66, 66, 85))", // Dark gradient background
                }}
              >
                {/* Project Image */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid"
                  style={{
                    height: "200px",
                    objectFit: "cover",
                    borderTopLeftRadius: "10px",
                    borderTopRightRadius: "10px",
                  }}
                />

                <div className="card-body d-flex flex-column p-3">
                  {/* Title */}
                  <h3 className="card-title h5 fw-bold text-light">{project.title}</h3>

                  {/* Description */}

                  <p className="card-text color-black flex-grow-1 mt-0 truncate-2-lines" style={{fontFamily: 'Arial, sans-serif'}}> {project.description} </p>

                


                  {/* Tools Used */}
                  <div className="mb-2">
                    {project.tools.map((tool, idx) => (
                      <span
                        key={idx}
                        className="badge me-2 mb-2"
                        style={{ backgroundColor: "#43448f" }} // Light Blue Badge
                      >
                        {tool}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="mt-auto d-flex gap-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-dark d-flex align-items-center gap-2 w-50 justify-content-center"
                    >
                      <FaGithub /> GitHub
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-light d-flex align-items-center gap-2 w-50 justify-content-center"
                    >
                      <FaExternalLinkAlt /> Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
