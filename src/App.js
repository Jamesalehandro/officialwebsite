import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import NavBar from "./Components/NavBar";
import Projects from "./Components/Projects";

const App = () => {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Routes>
          <Route path="/officialwebsite" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/project" element={<Projects />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
};

export default App;
