import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Home from "./pages/Home.jsx";
import Founding from "./pages/Founding.jsx";
import NewEngland from "./pages/NewEngland.jsx";
import Timeline from "./pages/Timeline.jsx";
import Resources from "./pages/Resources.jsx";
import Map from "./pages/Map.jsx";
import CivicLife from "./pages/CivicLife.jsx";

export default function App() {
  return (
    <div className="site">
      <Navbar />
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/founding" element={<Founding />} />
          <Route path="/new-england" element={<NewEngland />} />
          <Route path="/timeline" element={<Timeline />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/map" element={<Map />} />
          <Route path="/civic-life" element={<CivicLife />} />
        </Routes>
      </main>
      <footer className="footer">
        <p>Sources are linked to official government websites. © 2025</p>
      </footer>
    </div>
  );
}
