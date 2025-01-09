import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Sponsor from "./Sponsor";
import Company from "./company";
import Footer from "./assets/Footer";
import Highlights from "./Highlights";
function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Navbar */}
      <NavBar />

      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/companies" element={<Company />} />
        <Route path="/sponsors" element={<Sponsor />} />
        <Route path="/highlights" element={<Highlights/>} />
        
        <Route path="*" element={<div className="text-center mt-10 text-xl text-red-600">Page not found</div>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
