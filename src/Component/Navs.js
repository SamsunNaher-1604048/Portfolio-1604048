import React, { useState } from "react";
import { Link } from "react-scroll";

const Navs = () => {
  const links = [
    { name: "About Me", Link: "/Qualification" },
    { name: "Skills", Link: "/skill" },
    { name: "Projects", Link: "/project" },
    { name: "Contact", Link: "/Contact" },
  ];

  const [Open, Setopen] = useState(false);
  return (
    <div className="shadow-md shadow-cyan-700 px-10 pt-5 md:py-4 sm:pt-20 ">
      <nav className=" flex flex-col lg:flex lg:flex-row lg:justify-between  ">
        <div
          className="flex  justify-between"
          data-aos="fade-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="3000"
        >
          <Link
            to="/"
            smooth={true}
            duration={500}
            offset={-125}
            className="flex text-4xl font-bold cursor-pointer "
          >
            <p className="text-cyan-700">S</p>amsun Naher
          </Link>

          <button
            onClick={() => Setopen(!Open)}
            className="md:visible lg:hidden text-2xl"
          >
            {!Open ? "Show More" : "Show Less"}
          </button>
        </div>
        <div
  
          className={`flex ${
            Open ? "flex-col text-xl" : "invisible"
          } lg:flex-row lg:visible lg:space-x-7 text-2xl`}
        >
          {links.map((link) => {
            return (
              <div
                key={link.name}
                className={`${
                  Open ? "py-1 pb-2 visible" : "invisible"
                } lg:visible `}
              >
                <Link
                  to={link.Link}
                  smooth={true}
                  duration={500}
                  offset={-125}
                  className=" hover:text-cyan-700"
                >
                  <p className="transform hover:scale-110 duration-300  cursor-pointer">
                    {link.name}
                  </p>
                </Link>
              </div>
            );
          })}
        </div>
      </nav>
    </div>
  );
};

export default Navs;
