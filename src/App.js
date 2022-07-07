import React from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Introduction from "./components/introSection/Introduction";
import Features from "./components/features/Features";
import DownloadExtension from "./components/downloadExtension/DownloadExtension";
import FAQ from "./components/questions/FAQ";
import Signup from "./components/signup/Signup";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Introduction />
      <Features />
      <DownloadExtension />
      <FAQ />
      <Signup />
      <Footer />
    </>
  );
}

export default App;
