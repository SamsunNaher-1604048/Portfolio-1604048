import React from "react";
import Navs from "./Component/Navs";
import Home from "./Component/page/Home";
import Project from "./Component/page/Project";
import Skill from "./Component/page/Skill";
import Qualification from "./Component/page/Qualification";

const App = () => {
  return (
    <div className="snap-none">
      <Navs/>
      <Home id='/'/>
      <Qualification id="/Qualification"/>
      <Skill id='/skill'/>
      <Project id='/project'/>
    </div>
  );
};

export default App;
