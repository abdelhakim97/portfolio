import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import ScrollProgress from "./Components/ScrollProgress";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Projects from "./Pages/Projects";
import Technologies from "./Pages/Technologies";
function App() {
  return (
    <Router>
      <ScrollToTop />       {/* ✅ يعمل تلقائياً عند أي تنقل */}
      <ScrollProgress />
      <Header />
      <Routes>
        <Route index path="portfolio" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="projects" element={<Projects />} />
        <Route path="technologies" element={<Technologies />} />
      </Routes>

    </Router>
  );
}
export default App;
