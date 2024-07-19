import React from "react";
import Email from "./components/Email";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SocialMedia from "./components/SocialMedia";
import Aboutme from "./components/Aboutme";
import Experience from "./components/Experience";

function App() {
  return (
    <main className="bg-customBackground">
      <Navbar />
      <Hero />
      <SocialMedia />
      <Email />
      <Aboutme />
      <Experience />
    </main>
  );
}

export default App;
