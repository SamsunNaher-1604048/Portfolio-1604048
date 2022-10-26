import React from "react";
import Navs from "./Component/Navs";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Component/page/Home";
import Project from "./Component/page/Project";
import Skill from "./Component/page/Skill";
import Qualification from "./Component/page/Qualification";

const App = () => {
  return (
    <div className="snap-none">
      <BrowserRouter>
        <Navs/>
        <Routes >
          <Route path="/" element={<Home />} />
          <Route path="/project" element={<Project />} />
          <Route path="/skill" element={<Skill />} />
          <Route path="/qualification" element={<Qualification/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
