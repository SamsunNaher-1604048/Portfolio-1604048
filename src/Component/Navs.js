import React, { useState } from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

const Navs = () => {
  const links = [
    { name:"Home", Link:"/"},
    { name: "About Me", Link: "/Qualification" },
    { name: "Projects", Link: "/project" },
    { name: "Skills", Link: "/skill" },
  ];

  const [Open, Setopen] = useState(false);
  return (
    <div className="shadow-md shadow-red-600 px-7 pt-5 md:py-4 ">
      <Navbar className=" flex flex-col md:flex md:flex-row md:justify-between ">
        <div className="flex justify-between">
          <Nav.Link className="text-2xl font-bold md:text-3xl">
            <div className="flex">
              <p className="text-red-600 ">S</p>amsun Naher
            </div>
          </Nav.Link>
          <button
            onClick={() => Setopen(!Open)}
            className="md:hidden lg:hidden"
          >
            {!Open ? "Show More" : "Show Less"}
          </button>
        </div>
        <div
          className={`flex ${
            Open ? "flex-col text-xl p" : "invisible"
          } md:flex-row md:visible md:space-x-7 md:text-xl lg:text-2xl`}
        >
          {links.map((link) => {
            return (
              <div key={link.name}>
                <Nav
                  className={`${Open ? "py-1 pb-2" : "invisible"} md:visible`}
                >
                  <Nav.Link href={link.Link} className=" hover:text-red-600  ">
                    <p className="transform hover:scale-110 duration-300 font-mono">{link.name}</p>
                  </Nav.Link>
                </Nav>
              </div>
            );
          })}
        </div>
      </Navbar>
    </div>
  );
};

export default Navs;
