import Home from "./components/Home.jsx";
import Navbar from "./components/Navbar.jsx";
import About from "./components/About.jsx";
import Projects from "./components/Projects.jsx";
import Experience from "./components/Experience.jsx";
import Technologies from "./components/Technologies.jsx";
//import Contact from "./components/Contact.jsx";

function App() {
  return (
    <div className=" ">
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Technologies/>
      <Experience/>
      {/* <Contact/> */}
    </div>
  );
}

export default App;
