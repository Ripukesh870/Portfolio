// // src/components/Honors.js

// import cert1 from "../assets/mysirg.png";
// import cert2 from "../assets/ineuron.png";

// const Honors = () => {
//   return (
//     <section id="honors" className="py-5 bg-dark text-white">
//       <div className="container">
//         <h2 className="mb-5 text-warning text-center display-5">🎖️ Honors & Awards</h2>

//         {/* Certificate 1 */}
//         <div className="card bg-secondary mb-5 shadow">
//           <div className="row g-0">
//             <div className="col-md-6">
//               <img src={cert1} alt="MySirG Certificate" className="img-fluid rounded-start" />
//             </div>
//             <div className="col-md-6 d-flex align-items-center">
//               <div className="card-body">
//                 <h5 className="card-title text-white">C++ Language with Standard Template Library</h5>
//                 <p className="card-text text-light">
//                   Completed a detailed course on C++ and STL from <span className="text-warning fw-bold">MySirG.com</span>, covering templates, iterators, containers, and algorithms.
//                   <br />
//                   <strong>Duration:</strong> Jan 27 – May 1, 2022
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Certificate 2 */}
//         <div className="card bg-secondary mb-5 shadow">
//           <div className="row g-0">
//             <div className="col-md-6">
//               <img src={cert2} alt="iNeuron Certificate" className="img-fluid rounded-start" />
//             </div>
//             <div className="col-md-6 d-flex align-items-center">
//               <div className="card-body">
//                 <h5 className="card-title text-white">Job Ready Bootcamp in C++, DSA, and IoT</h5>
//                 <p className="card-text text-light">
//                   Successfully completed an intensive bootcamp from <span className="text-warning fw-bold">iNeuron</span>, focused on C++ programming, Data Structures & Algorithms, and IoT fundamentals.
//                   <br />
//                   <strong>Awarded:</strong> June 17, 2024
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default Honors;






import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
import cert1 from "../assets/mysirg.png";
import cert2 from "../assets/ineuron.png";
import "../css/honors.css"

const honors = [
  {
    img: cert1,
    title: "C++ Language with Standard Template Library",
    org: "MySirG.com",
    description:
      "Completed a detailed course on C++ and STL covering templates, iterators, containers, and algorithms.",
    date: "Jan 27 – May 1, 2022",
  },
  {
    img: cert2,
    title: "Job Ready Bootcamp in C++, DSA, and IoT",
    org: "iNeuron",
    description:
      "Successfully completed an intensive bootcamp focused on C++ programming, DSA, and IoT fundamentals.",
    date: "Awarded: June 17, 2024",
  },
];

const floatVariant = {
  initial: { y: 0 },
  animate: {
    y: [0, -8, 0],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

const Honors = () => {
  return (
    <section id="honors" className="py-5 bg-black text-white position-relative">
      <div className="container">
        <motion.h2
          className="mb-5 text-center text-warning display-5"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          🎖️ Honors & Awards
        </motion.h2>

        {honors.map((item, index) => (
          <motion.div
            key={index}
            className="mb-5"
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <motion.div variants={floatVariant} initial="initial" animate="animate" > 
              <Tilt
                glareEnable
                glareMaxOpacity={0.2}
                glareColor="#00f0ff"
                scale={0.9999}
                transitionSpeed={1000}
              >
                <div
                  className="card bg-dark text-light border border-info shadow-lg"
                  style={{
                    backdropFilter: "blur(10px)",
                    borderRadius: "16px",
                    overflow: "hidden",
                  }}
                >
                  <div className="row g-0">
                    <div className="col-md-6">
                      <img
                        src={item.img}
                        alt={item.title}
                        className="img-fluid h-100 w-100"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                    <div className="col-md-6 d-flex align-items-center">
                      <div className="card-body">
                        <h5 className="card-title text-info fw-bold">{item.title}</h5>
                        <p className="card-text text-light">
                          {item.description}
                          <br />
                          <span className="text-warning fw-semibold">{item.org}</span>
                          <br />
                          <strong className="text-muted">{item.date}</strong>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Tilt>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Honors;


