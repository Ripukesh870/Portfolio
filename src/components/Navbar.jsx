
// import { motion } from "framer-motion";
// import { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";

// const Navbar = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   const handleMenuToggle = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   return (
//     <motion.nav
//       className="navbar navbar-expand-lg navbar-dark bg-dark py-2 px-4 fixed-top shadow"
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ duration: 0.5 }}
//     >
//       <div className="container-fluid">
//         {/* Logo */}
//         <a className="navbar-brand text-danger fw-bold fs-2" href="#">
//           Ripukesh
//         </a>

//         {/* Hamburger Menu */}
//         <button
//           className="navbar-toggler"
//           type="button"
//           onClick={handleMenuToggle}
//         >
//           {isMenuOpen ? <FaTimes size={25} /> : <FaBars size={25} />}
//         </button>

//         {/* Navigation Links */}
//         <div className={`collapse navbar-collapse ${isMenuOpen ? "show" : ""}`}>
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#">
//                 Home
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#about">
//                 About
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#projects">
//                 Projects
//               </a>
//             </li>
//             <li className="nav-item">
//               <a className="nav-link text-white" href="#contact">
//                 Contact
//               </a>
//             </li>
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

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <motion.nav
      className="navbar navbar-expand-lg navbar-dark bg-black py-2 px-4 fixed-top shadow-lg"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      style={{ backdropFilter: "blur(10px)" }} // thoda glass effect
    >
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand fw-bold fs-2 text-gradient" href="#">
          <span style={{ color: "#FF416C" }}>Ripukesh</span>
        </a>

        {/* Hamburger Menu */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={handleMenuToggle}
        >
          {isMenuOpen ? <FaTimes size={25} color="#fff" /> : <FaBars size={25} color="#fff" />}
        </button>

        {/* Navigation Links */}
        <div className={`collapse navbar-collapse justify-content-end ${isMenuOpen ? "show" : ""}`}>
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#about">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#projects">
                Projects
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-light fs-5" href="#contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
