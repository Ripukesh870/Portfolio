
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import { FaLinkedin, FaGithub, FaInstagram,FaYoutube } from "react-icons/fa";

const Home = () => {
  return (
    <section
      className="vh-100 d-flex flex-column justify-content-center align-items-center bg-light text-center"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Profile Image */}
      <img
        src={img1}
        alt="img1"
        className="img-fluid rounded-circle mb-4"
        style={{
          width: "150px",
          height: "150px",
          objectFit: "cover",
          border: "3px solid white",
        }}
      />

      {/* Heading */}
      <motion.h1
        className="display-4 fw-bold mb-3"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      > <Typewriter
      options={{
        autoStart: true,
        loop: true,
        delay: 200,
        strings: [
          `<span style="color:black;">Hi, I'm </span><span style="color:red;">Ripukesh Kumar</span>`
        ],
        html: true, // Important: Allow HTML inside Typewriter
      }}
    />
        {/* <span style={{ color: "black" }}>Hi, I'm </span>{" "}
        <span className="text-danger">Ripukesh Kumar</span> */}
      </motion.h1>

      {/* Typewriter Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="fs-4 text-secondary mb-4"
      >
        <Typewriter
          options={{
            strings: ["Web Developer", "UI/UX Designer", "Freelancer"],
            autoStart: true,
            loop: true,
          }}
        />
      </motion.div>

      {/* Download Resume Button */}
      <a
        href="https://1drv.ms/b/c/762fda53f8675c9a/ETJ_VWKhYRpKoSMtjPKPWcQBK-6Bc8oY3bbvX0UWFt5gGg?e=eIuHSN" // <-- Apna resume ka URL yaha daalo
        download
        className="btn btn-danger rounded-pill px-4 py-2 mb-4 fw-bold"
      >
        Download Resume <i className="bi bi-file-earmark-arrow-down ms-2"></i>
      </a>

      {/* Social Media Icons */}
      <div className="d-flex gap-4">
        <a href="https://www.linkedin.com/in/ripukesh-kumar-376207281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
          <FaLinkedin />
        </a>
        <a href="https://github.com/Ripukesh870" target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/ripukesh___sharma?igsh=d3owaG91aWs4OHhm" target="_blank" rel="noopener noreferrer" className="text-dark fs-3" >
          <FaInstagram />
        </a>
        <a href="https://www.youtube.com/@TADream0" target="_blank" rel="noopener noreferrer" className="text-dark fs-3">
          <FaYoutube />
        </a>

      </div>
    </section>
  );
};

export default Home;
