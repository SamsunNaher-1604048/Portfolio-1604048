import React from "react";
import Navs from "./Component/Navs";
import Home from "./Component/page/Home";
import Project from "./Component/page/Project";
import Skill from "./Component/page/Skill";
import Qualification from "./Component/page/Qualification";
import Contact from "./Component/page/Contact";

const App = () => {
  return (
    <div className="snap-none">
      <Navs/>
      <Home/>
      <Qualification/>
      <Skill/>
      <Project />
      <Contact/>
    </div>
  );
};

export default App;
