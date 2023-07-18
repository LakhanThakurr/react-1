import React from "react";
import Navbar from "./Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Work from "./Work";
import './Nav.css';
import Card from "./Card";
import Progress from "./Pro";


function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <><Work />
            <Card />
            <Card />
            <Progress/>
            <Card />
          </>
        }>

        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
