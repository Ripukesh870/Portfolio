
import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import "../css/qualification.css";

const qualifications = [
  {
    title: "MSc (Computer Science)",
    subtitle: "Magadh University, Bodh-Gaya",
    year: "2024 - 2026",
  },
  {
    title: "Bachelor's of Computer Application",
    subtitle: "Magadh University, Bodh-Gaya",
    year: "2020 - 2024",
  },
  {
    title: "Higher Secondary",
    subtitle: "Magadh Inter College, Shakurabad",
    year: "2018 - 2020",
  },
 
];

const Qualification = () => {
  return (
    <div className="qualification-section" id="qualification bg-dark" style={{borderTop:"2px solid gray"}}>
      <motion.h2
        className="text-center mb-5 fw-bold section-title text-light"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        🎓 My Qualification
        <div className="underline" />
      </motion.h2>

      <div className="timeline-container container">
        <div className="timeline-line" />

        {qualifications.map((item, index) => {
          const directions = [
            { x: -100, y: 0 }, // left
            { x: 100, y: 0 },  // right
            { x: 0, y: 100 },  // bottom
          ];
          const direction = directions[index % 3];

          return (
            <motion.div
              key={index}
              className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
              initial={{ opacity: 0, ...direction }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true, amount: 0.2 }}
              // style={{border:"2px solid red"}}
            >
              <Tilt
                glareEnable={true}
                glareMaxOpacity={0.15}
                glareColor="#ffffff"
                scale={1.04}
                transitionSpeed={1000}
                // style={{border:"2px solid red"}}
              >
                <div className="qualification-card glass" style={{border:"2px solid red"}}>
                  <div className="arrow" />
                  <h5 className="title">{item.title}</h5>
                  <p className="subtitle">{item.subtitle}</p>
                  <p className="year">{item.year}</p>
                </div>
              </Tilt>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Qualification;


