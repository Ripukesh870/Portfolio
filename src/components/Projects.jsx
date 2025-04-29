



import { motion } from "framer-motion";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import "../css/Project.css";
import img1 from "../assets/img1.jpg";

const projects = [
  {
    title: "Portfolio Website",
    description: "A responsive personal portfolio built using React, Tailwind CSS, and Framer Motion.",
    tools: ["React", "Tailwind CSS", "Framer Motion"],
    image: img1,
    github: "#",
    demo: "#",
  },
  {
    title: "Image Compressor App",
    description: "Compress images easily using React and browser APIs.",
    tools: ["React", "Compressor.js", "Bootstrap"],
    image: img1,
    github: "#",
    demo: "#",
  },
  {
    title: "Image Compressor App",
    description: "Compress images easily using React and browser APIs.",
    tools: ["React", "Compressor.js", "Bootstrap"],
    image: img1,
    github: "#",
    demo: "#",
  },
  {
    title: "Image Compressor App",
    description: "Compress images easily using React and browser APIs.",
    tools: ["React", "Compressor.js", "Bootstrap"],
    image: img1,
    github: "#",
    demo: "#",
  },
  {
    title: "Image Compressor App",
    description: "Compress images easily using React and browser APIs.",
    tools: ["React", "Compressor.js", "Bootstrap"],
    image: img1,
    github: "#",
    demo: "#",
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
                  <p className="card-text color-black flex-grow-1 mt-0">{project.description}</p>

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
