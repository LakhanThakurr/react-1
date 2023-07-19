import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Work";
import './Nav.css';
import Card from "./Card";
import Card2 from "./Card2";
import Card3 from "./Card3";
import Progress from "./Pro";
import './font/stylesheet.css';
import Footer from "./Footer";
import Intro from "./About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <><Work />
            <Card />
            <Card2 />
            <Progress />
            <Card3 />
            <Footer />
          </>}>
        </Route>

        <Route path="About" element={<>
        <Intro />
        <Footer/>
        </>} >

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
