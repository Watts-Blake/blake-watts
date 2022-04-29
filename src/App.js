import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Components./Home";
import NavBar from "./Components./NavBar";
import Projects from "./Components./Projects";

import About from "./Components./About";
import Contact from "./Components./Contact";
import Skills from "./Components./Skills";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/projects" element={<Projects />} />

          <Route path="/about" element={<About />} />

          <Route path="/contact" element={<Contact />} />

          <Route path="/skills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
