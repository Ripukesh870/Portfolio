// import Navbar from "./components/Navbar";
// import Home from "./components/Home";
// import About from "./components/About";
// import Projects from "./components/Projects";
// import Contact from "./components/Contact";
// import Footer from "./components/Footer";
// import img2 from "./assets/img2.jpg"
// import Qualification from "./components/Qualification";
// import Honors from "./components/Honors"
// function App() {
//   return (
//     <div className="bg-gray-900 text-white"  style={{ backgroundImage:`url(${img2})`, backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", }}>
//       <Navbar />
//       <Home />
//       <About />
//       <Projects />
//       <Qualification/>
//       <Honors/>
//       <Contact />
//       <Footer />
//     </div>
//   );
// }

// export default App;





import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import img2 from "./assets/img2.jpg";
import Qualification from "./components/Qualification";
import Honors from "./components/Honors";
import Resources from "./components/Resources"; // ✅ import new component
import SubjectPage from "./components/SubjectPage";

function App() {
  return (
    <div
      className="bg-gray-900 text-white"
      style={{
        backgroundImage: `url(${img2})`,
        backgroundSize: "cover",
        backgroundPosition: "top",
        backgroundRepeat: "no-repeat",
      }}
    >
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
              <About />
              <Projects />
              <Qualification />
              <Honors />
              <Contact />
              <Footer />
            </>
          }
        />
        {/* <Route path="/resources" element={<Resources />} /> */}
        <Route path="/resources" element={<Resources />} />
        <Route path="/learn/:subject" element={<SubjectPage />} />
      </Routes>
    </div>
  );
}

export default App;
