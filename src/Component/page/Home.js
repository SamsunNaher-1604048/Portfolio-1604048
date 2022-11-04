import React, { useEffect, useState } from "react";

const Home = () => {
  const [subtitle, Setsubtitle] = useState("");
  const [Data, SubData] = useState("");
  const title = "A Fontend Web Developer";
  useEffect(() => {
    setTimeout(() => {
      Setsubtitle(title.slice(0, subtitle.length + 1));
    }, 300);
    SubData(subtitle + "|");
    if (subtitle === title) {
      Setsubtitle("");
      SubData("");
      
    }
  }, [subtitle, Data]);
  return (
    <div
      className="pt-4 mb-16 flex flex-col-reverse items-center lg:flex-row lg:justify-between "
      id="/"
    >
      <div
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
        className="flex flex-col  items-center pt-3 lg:pl-20 cursor-pointer ransform hover:scale-105 duration-300 "
      >
        <div className=" text-cyan-700 text-4xl mb-2 ">Hello I am,</div>
        <div className="  font-bold text-5xl text-center ">SAMSUN NAHER</div>
        <div className=" font-mono text-cyan-700  text-3xl text-center blink-cursor">
          {Data}
        </div>
      </div>

      <img
        className="md:h-4/5 md:w-4/5 lg:w-3/6 lg:h-3/6 lg:pt-20 transform hover:scale-105 duration-300 "
        src="1.png "
        alt=""
      />
    </div>
  );
};

export default Home;
