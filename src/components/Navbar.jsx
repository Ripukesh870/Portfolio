
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "../css/navbar.css";

// const navLinks = [
//   { id: "", label: "Home" },
//   { id: "about", label: "About" },
//   { id: "projects", label: "Projects" },
//   { id: "honors",label:"Honors & Award"},
//   { id: "contact", label: "Contact" },
//   { id: "resources", label: "Resources"}
// ];

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [activeSection, setActiveSection] = useState("");

//   const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

//   const handleLinkClick = (sectionId) => {
//     setActiveSection(sectionId);
//     setIsMenuOpen(false); // close menu on mobile
//   };

//   return (
//     <motion.nav
//       className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-lg py-2 px-4 " 
//       initial={{ y: -80 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.6 }}
//       style={{ backdropFilter: "blur(30px)" }}
//     >
//       <div className="container-fluid">
//         {/* Logo */}
//         <a className="navbar-brand fw-bold fs-2" href="#">
//           <span style={{ color: "#FF416C" }}>Portfolio </span>
//         </a>

//         {/* Mobile Toggle */}
//         <button
//           className="navbar-toggler border-0"
//           type="button"
//           onClick={handleMenuToggle}
//         >
//           {isMenuOpen ? (
//             <FaTimes size={26} color="#fff" />
//           ) : (
//             <FaBars size={26} color="#fff" />
//           )}
//         </button>

//         {/* Nav Links */}
//         <div
//           className={`collapse navbar-collapse justify-content-end ${
//             isMenuOpen ? "show" : ""
//           }`}
//         >
//           <ul className="navbar-nav gap-3 align-items-center">
//             {navLinks.map((item) => (
//               <li className="nav-item" key={item.id}>
//                 <a
//                   href={`#${item.id}`}
//                   className={`nav-link fs-5 px-2 position-relative text-light ${
//                     activeSection === item.id ? "fw-bold text-warning underline-animate" : ""
//                   }`}
//                   onClick={() => handleLinkClick(item.id)}
//                 >
//                   {item.label}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;





import { motion } from "framer-motion";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "../css/navbar.css";
import { useNavigate } from "react-router-dom"; // ✅ Add this
import { useLocation } from "react-router-dom";

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "honors", label: "Honors & Award" },
  { id: "contact", label: "Contact" },
  { id: "resources", label: "Resources", isRoute: true }, // 📌 mark route links
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const navigate = useNavigate(); // ✅
  const location = useLocation(); // ✅ get current route

  const handleMenuToggle = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsMenuOpen(false);
    if (window.location.pathname !== "/") {
      navigate("/");

      // wait for the page to load before scrolling
      setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    } else {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-black fixed-top shadow-lg py-2 px-4"
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
              <li className="nav-item" key={item.id || item.label}>
                {item.isRoute ? (
                  // ✅ Route navigation
                  <Link
                    to="/resources"
                    className="nav-link fs-5 px-2 text-light"
                    onClick={() => handleLinkClick(item.id)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  // ✅ Scroll navigation
                  <a
                    href={`#${item.id}`}
                    className={`nav-link fs-5 px-2 position-relative text-light ${
                      activeSection === item.id
                        ? "fw-bold text-warning underline-animate"
                        : ""
                    }`}
                    onClick={(e) => { 
                      e.preventDefault();
                      handleLinkClick(item.id)}}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
