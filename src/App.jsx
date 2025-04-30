import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import img2 from "./assets/img2.jpg"
import Qualification from "./components/Qualification";
function App() {
  return (
    <div className="bg-gray-900 text-white"  style={{ backgroundImage:`url(${img2})`, backgroundSize: "cover", backgroundPosition: "top", backgroundRepeat: "no-repeat", }}>
      <Navbar />
      <Home />
      <About />
      <Projects />
      <Qualification/>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
