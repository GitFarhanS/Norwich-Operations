import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Testimonials from "./pages/Testimonials";
import Featured from "./pages/Featured";
import Treatments from "./pages/Treatments";
import Links from "./pages/Links";
import Media from "./pages/Media";

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/featured" element={<Featured />} />
            <Route path="/treatments" element={<Treatments />} />
            <Route path="/links" element={<Links />} />
            <Route path="/media" element={<Media />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
