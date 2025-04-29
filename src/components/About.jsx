
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section id="about" className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-4 bg-dark text-light text-center" >
//       <motion.h2
//         className="display-4 fw-bold mb-4 text-danger"
//         initial={{ opacity: 0, x: -100 }}
//         animate={{ opacity: 1, x: 0 }}
//         transition={{ duration: 1 }}
//       >
//         About Me
//       </motion.h2>

//       <motion.p
//         className="lead text-secondary w-75"
//         initial={{ opacity: 0 }}
//         animate={{ opacity: 1 }}
//         transition={{ delay: 0.5, duration: 1 }}
//       >
//         I'm Ripukesh Kumar, a passionate Web Developer and UI/UX Designer. 
//         I love building beautiful and functional websites. Let's work together to bring your ideas to life!
//       </motion.p>
//     </section>
//   );
// };

// export default About;



import { motion } from "framer-motion";
import "../css/about.css"
const skills = [
  {
    title: "Frontend",
    items: ["React", "Redux", "TypeScript", "Tailwind CSS", "Next.js", "Bootstrap"],
  },
  {
    title: "Backend",
    items: ["Node.js", "Express.js", "Django", "Firebase"],
  },
  {
    title: "Database",
    items: ["MongoDB", "MySQL", "PostgreSQL"],
  },
  {
    title: "Languages",
    items: ["JavaScript", "TypeScript", "Python", "C++"],
  },
  {
    title: "Version Control",
    items: ["Git", "GitHub", "GitLab"],
  },
  {
    title: "Tools",
    items: ["VS Code", "Figma", "Postman", "Docker"],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="min-vh-100 d-flex flex-column justify-content-center align-items-center p-4 bg-dark text-light text-center" 
    >
      <hr style={{border:"2px solid gray", width:"full"}}/>
      <motion.h2
        className="display-4 fw-bold mb-4 text-danger"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={{borderBottom:"2px solid gray",paddingTop:""}}
      >
        About Me
      </motion.h2>

      <motion.p
        className="lead text-secondary w-75 mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        I'm Ripukesh Kumar, a passionate Full Stack Developer and UI/UX Designer. 
        I love crafting beautiful, functional, and scalable web applications. 
        Let's collaborate and bring your digital ideas to reality!
      </motion.p>

      <div className="container">
        <div className="row g-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              className="col-md-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
            >
              <div className="card bg-black h-100 shadow rounded-4 card-hover" >
                <div className="card-body" > 
                  <h5 className="card-title text-white fw-bold mb-3">{skill.title}</h5>
                  <ul className="list-unstyled text-light">
                    {skill.items.map((item, idx) => (
                      <li
                        key={idx}
                        className="mb-2"
                        style={{
                          display: "inline-block",
                          margin: "5px",
                          padding: "6px 12px",
                          // border: "2px solid red",
                          borderRadius: "20px",
                          backgroundColor: "#343a40", // dark grey background
                          fontSize: "14px",
                        }}
                      >
                        <i className="bi bi-check-circle-fill text-success me-2"></i> {item}
                      </li>
                    ))}
                  </ul>

                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
