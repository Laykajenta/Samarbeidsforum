import { HashRouter, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import News from "./components/News";
import Events from "./components/Events";
import Members from "./components/Members";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import Login from "./pages/Login";

export default function App() {
  return (
    <HashRouter>
      <NavBar />

      <Routes>
        {/* 🟢 FULL FORSIDE */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <News />
              <Events />
              <Members />
              <Contact />
              <Footer />
            </>
          }
        />

        {/* 🟢 MEDLEMMER (egen side, men samme komponent) */}
        <Route path="/medlemmer" element={<Members />} />

        {/* 🔐 LOGIN */}
        <Route path="/login" element={<Login />} />
      </Routes>
    </HashRouter>
  );
}