
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Particles } from "react-tsparticles";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
// import "../css/contact.css"
function Contact() {
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 2000);
  };

  return (
    <div id="contact" className="position-relative min-vh-100 d-flex flex-column justify-content-center align-items-center py-5 bg-dark text-light overflow-hidden" style={{borderTop:"2px solid gray"}}>
      
      {/* Animated Gradient Blobs */}
      <div className="position-absolute w-100 h-100 overflow-hidden" style={{ zIndex: 0 }}>
        <div className="blob" style={{ top: '-10%', left: '-10%' }}></div>
        <div className="blob" style={{ bottom: '-10%', right: '-10%', background: 'linear-gradient(135deg, #ff00ff, #ffff00)' }}></div>
        <div className="blob" style={{ top: '50%', left: '50%', transform: 'translate(-50%, -50%)', background: 'linear-gradient(90deg, #00ffff, #00ff00)' }}></div>
      </div>

      {/* Particles Background */}
      <Particles
        options={{
          fullScreen: { enable: false },
          background: { color: { value: "" } },
          fpsLimit: 60,
          interactivity: {
            events: { onHover: { enable: true, mode: "repulse" }, resize: true },
            modes: { repulse: { distance: 100, duration: 0.4 } }
          },
          particles: {
            color: { value: "#00ffff" },
            links: { color: "#00ffff", distance: 150, enable: true, opacity: 0.5, width: 1 },
            move: { enable: true, speed: 2 },
            number: { density: { enable: true, area: 800 }, value: 40 },
            opacity: { value: 0.5 },
            shape: { type: "circle" },
            size: { value: { min: 1, max: 5 } }
          },
          detectRetina: true,
        }}
        className="position-absolute top-0 start-0 w-100 h-100"
      />

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="mb-5 text-center fw-bold text-info position-relative"
        style={{ zIndex: 1 }}
      >
        Get in Touch
      </motion.h1>

      {/* Main Container */}
      <div className="row w-100 position-relative" style={{ maxWidth: '1200px', zIndex: 1 }}>
        
        {/* Left Contact Info */}
        <motion.div 
          className="col-md-5 mb-5 mb-md-0"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-4 rounded-4 shadow-lg bg-secondary h-100 d-flex flex-column gap-4">
            <h3 className="text-light mb-4">Contact Information</h3>

            <div className="d-flex align-items-center gap-3 contact-item p-3 rounded-4 shadow-lg bg-dark" style={{ transition: '0.3s' }}>
              <FaEnvelope size={30} className="text-primary" />
              <div className="d-flex flex-column">
                <label htmlFor="" className="text-light small mb-1">Email</label>
                <a href="mailto:ripukesh870@gmail.com" className="text-light text-decoration-none fw-bold">
                  ripukesh870@gmail.com
                </a>
              </div>
            </div>

            <div className="d-flex align-items-center gap-3 contact-item p-3 rounded-4 shadow-lg bg-dark" style={{ transition: '0.3s' }}>
            <FaPhone size={30} className="text-success" />
            <a href="tel:+919472469076" className="text-light text-decoration-none fw-bold">
              +91 9472469076
            </a>
          </div>

          <div className="d-flex align-items-center gap-3 contact-item p-3 rounded-4 shadow-lg bg-dark" style={{ transition: '0.3s' }}>
            <FaMapMarkerAlt size={30} className="text-danger" />
            <span className="text-light fw-bold">Jehanabad, Bihar, India</span>
          </div>

          </div>
        </motion.div>

        {/* Right Contact Form */}
        <motion.div 
          className="col-md-7"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="p-4 rounded-4 shadow-lg bg-secondary h-100">
            {submitted ? (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="text-center text-success"
              >
                <h2>Thank you for contacting us!</h2>
                <p>We will get back to you soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit}>
                <motion.div className="mb-3" whileHover={{ scale: 1.02 }}>
                  <label htmlFor="name" className="form-label">Name</label>
                  <input type="text" id="name" className="form-control bg-dark text-light border-0 rounded-3" placeholder="Your Name" required />
                </motion.div>

                <motion.div className="mb-3" whileHover={{ scale: 1.02 }}>
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email" id="email" className="form-control bg-dark text-light border-0 rounded-3" placeholder="your.email@example.com" required />
                </motion.div>

                <motion.div className="mb-3" whileHover={{ scale: 1.02 }}>
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-control bg-dark text-light border-0 rounded-3" rows="5" placeholder="Your message..." required></textarea>
                </motion.div>

                <motion.button 
                  type="submit"
                  className="btn w-100 fw-bold rounded-3 mt-3"
                  style={{
                    backgroundColor: '#00ffff',
                    color: '#0d0d0d',
                    boxShadow: '0 0 20px #00ffff, 0 0 30px #00ffff',
                    border: 'none'
                  }}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="spinner-border spinner-border-sm text-dark"></span>
                  ) : (
                    "Send"
                  )}
                </motion.button>

              </form>
            )}
          </div>
        </motion.div>

      </div>

      {/* Internal Styling */}
      <style>{`
        .blob {
          position: absolute;
          width: 400px;
          height: 400px;
          background: linear-gradient(45deg, #00ffff, #ff00ff);
          opacity: 0.7;
          border-radius: 43% 57% 63% 37% / 46% 39% 61% 54%;
          filter: blur(100px);
          animation: blob 25s infinite alternate;
          z-index: 0;
        }
        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
            border-radius: 43% 57% 63% 37% / 46% 39% 61% 54%;
          }
          50% {
            transform: translate(100px, 50px) scale(1.1);
            border-radius: 53% 47% 33% 67% / 66% 29% 71% 34%;
          }
          100% {
            transform: translate(-100px, -50px) scale(1);
            border-radius: 43% 57% 63% 37% / 46% 39% 61% 54%;
          }
        }
        .contact-item:hover {
          color: #00ffff;
          transform: scale(1.05);
          transition: all 0.3s ease;
          cursor: pointer;
        }
      `}</style>
    </div>
  );
}

export default Contact;
