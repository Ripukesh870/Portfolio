

import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram, FaYoutube, FaArrowUp } from 'react-icons/fa'; // Importing react-icons
import Particles from "react-tsparticles";

const Footer = () => {
  const [showScroll, setShowScroll] = useState(false);

  // Show scroll-to-top button on scroll
  const checkScrollTop = () => {
    if (!showScroll && window.pageYOffset > 400) {
      setShowScroll(true);
    } else if (showScroll && window.pageYOffset <= 400) {
      setShowScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, [showScroll]);

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{ position: 'relative', overflow: 'hidden', background: 'linear-gradient(135deg,rgb(1, 1, 1),rgb(13, 57, 71),rgb(0, 0, 0))', color: '#f1f1f1' }}>
      
      {/* Particle Background */}
      <Particles
        options={{
          particles: {
            number: {
              value: 80,
              density: { enable: true, value_area: 800 }
            },
            color: { value: "#ffffff" },
            shape: { type: "circle" },
            opacity: { value: 0.5 },
            size: { value: 3 },
            move: { speed: 2 }
          }
        }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1
        }}
      />

      {/* Wave SVG Top Border */}
      <div style={{ position: 'absolute', top: '-80px', left: '0', width: '100%', overflow: 'hidden', lineHeight: '0', transform: 'rotate(180deg)' }}>
        <svg viewBox="0 0 500 150" preserveAspectRatio="none" style={{ height: '80px', width: '100%' }}>
          <path d="M0.00,49.98 C150.00,150.00 350.00,-50.00 500.00,49.98 L500.00,150.00 L0.00,150.00 Z" style={{ stroke: 'none', fill: '#0f2027' }}></path>
        </svg>
      </div>

      {/* Main Content */}
      <div className="container py-5 animate__animated animate__fadeInUp">
        <div className="row align-items-center">
          
          {/* Left Side */}
          <div className="col-md-6 mb-4 mb-md-0 text-center text-md-start">
            <h3 className="fw-bold" style={{ color: '#ff4b5c' }}>Ripukesh Kumar</h3>
            <p className="mt-2" style={{ color: '#d1d1d1' }}>
              Web Developer | UI/UX Designer
            </p>

            {/* Social Icons */}
            <div className="mt-3 d-flex justify-content-center justify-content-md-start">
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="social-icon me-3"><FaLinkedin /></a>
              <a href="https://github.com" target="_blank" rel="noreferrer" className="social-icon me-3"><FaGithub /></a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" className="social-icon me-3"><FaTwitter /></a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" className="social-icon me-3"><FaInstagram /></a>
              <a href="https://youtube.com" target="_blank" rel="noreferrer" className="social-icon"><FaYoutube /></a> {/* Added YouTube Icon */}
            </div>

          </div>

          {/* Right Side Links */}
          <div className="col-md-6 text-md-end mt-4 mt-md-0">
            <a href="#" className="footer-link me-4">Home</a>
            <a href="#about" className="footer-link me-4">About</a>
            <a href="#projects" className="footer-link me-4">Projects</a>
            <a href="#contact" className="footer-link">Contact</a>
          </div>

        </div>

        {/* Bottom Line */}
        <div className="text-center mt-4">
          <small style={{ color: '#aaaaaa' }}>
            &copy; {new Date().getFullYear()} Ripukesh Kumar. All Rights Reserved.
          </small>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScroll && (
        <div onClick={scrollToTop} className="scroll-top-btn animate__animated animate__fadeInUp">
          <FaArrowUp size={30} color="#ff4b5c" />
        </div>
      )}

      {/* Internal Styling */}
      <style>{`
        .footer-link {
          color: #d1d1d1;
          text-decoration: none;
          transition: all 0.4s ease;
          font-weight: 500;
          font-size: 1.1rem;
        }
        .footer-link:hover {
          color: #ff4b5c;
          transform: translateY(-3px);
        }
        footer {
          animation: gradientAnimation 10s ease infinite;
          background-size: 400% 400%;
        }
        @keyframes gradientAnimation {
          0% {background-position: 0% 50%;}
          50% {background-position: 100% 50%;}
          100% {background-position: 0% 50%;}
        }
        .social-icon {
          font-size: 1.8rem;
          color: #d1d1d1;
          transition: transform 0.4s, color 0.4s;
        }
        .social-icon:hover {
          transform: translateY(-5px) scale(1.1);
          color: #ff4b5c;
        }
        .scroll-top-btn {
          position: fixed;
          bottom: 50px;
          right: 50px;
          background: #ffffff;
          padding: 10px;
          border-radius: 50%;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
          cursor: pointer;
          transition: all 0.3s ease;
        }
        .scroll-top-btn:hover {
          transform: scale(1.1);
          background-color: #ff4b5c;
        }
      `}</style>

      {/* Animate.css CDN for fadeIn effect */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </footer>
  );
};

export default Footer;


