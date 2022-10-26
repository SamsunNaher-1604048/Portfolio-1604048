import React, { useState } from "react"
import { Link } from "react-scroll";

const Navs = () => {
  const links = [
    { name: "Home", Link: "/" },
    { name: "About Me", Link: "/Qualification" },
    { name: "Projects", Link: "/project" },
    { name: "Skills", Link: "/skill" },
  ];

  const [Open, Setopen] = useState(false);
  return (
    <div className="shadow-md shadow-red-600 px-10 pt-5 md:py-4  ">
      <nav className=" flex flex-col md:flex md:flex-row md:justify-between  ">
        <div className="flex justify-between">
 
            <div className="flex text-4xl font-bold ">
              <p className="text-red-600 ">S</p>amsun Naher
            </div>
          
          <button
            onClick={() => Setopen(!Open)}
            className="lg:hidden md:hidden"
          >
            {!Open ? "Show More" : "Show Less"}
          </button>
        </div>
        <div
          className={`flex ${
            Open ? "flex-col text-xl p" : "invisible"
          } md:flex-row md:visible md:space-x-7 text-2xl`}
        >
          {links.map((link) => {
            return (
              <div key={link.name}>
                <div
                  className={`${Open ? "py-1 pb-2" : "invisible"} lg:visible md:visible`}
                >
                  <Link to={link.Link} smooth={true} duration={500}  offset={-125} className=" hover:text-red-600  ">
                    <p className="transform hover:scale-110 duration-300 font-mono cursor-pointer">
                      {link.name}
                    </p>
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navs;
