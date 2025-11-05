import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Zodiac from "./pages/Zodiac";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import { LanguageProvider } from "./context/LanguageContext"; // ✅ Import the provider

const App = () => {
  return (
    <LanguageProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />

          {/* Page Routes */}
          <main className="pt-20 grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/zodiac_sign" element={<Zodiac />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>

          {/* Footer */}
          <Footer />
        </div>
      </Router>
    </LanguageProvider>
  );
};

export default App;
