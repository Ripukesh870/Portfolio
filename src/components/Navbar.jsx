
import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../css/navbar.css";

const navLinks = [
  { id: "", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "honors",label:"Honors & Award"},
  { id: "contact", label: "Contact" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false); // close menu on mobile
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-lg py-2 px-4 " 
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6 }}
      style={{ backdropFilter: "blur(30px)" }}
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-2" href="#">
          <span style={{ color: "#FF416C" }}>Portfolio </span>
        </a>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? (
            <FaTimes size={26} color="#fff" />
          ) : (
            <FaBars size={26} color="#fff" />
          )}
        </button>

        {/* Nav Links */}
        <div
          className={`collapse navbar-collapse justify-content-end ${
            isMenuOpen ? "show" : ""
          }`}
        >
          <ul className="navbar-nav gap-3 align-items-center">
            {navLinks.map((item) => (
              <li className="nav-item" key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`nav-link fs-5 px-2 position-relative text-light ${
                    activeSection === item.id ? "fw-bold text-warning underline-animate" : ""
                  }`}
                  onClick={() => handleLinkClick(item.id)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
