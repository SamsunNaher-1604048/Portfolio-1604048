import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

const Home = () => {
  return (
    <div className="pt-5 flex flex-col-reverse items-center lg:flex-row lg:justify-between" id="/">
      <div className="flex flex-col  items-center pt-3 lg:pl-20">
        <div className="text-4xl font-bold lg:text-6xl ">SAMSUN NAHER</div>
        <div className="text-xl font-mono text-red-600 lg:text-3xl">
          A Fontend Wed Developer
        </div>
        <div className="space-x-3">
          <LinkedInIcon sx={{ fontSize: 40 }} />
          <a href="https://github.com/SamsunNaher-1604048">
            <GitHubIcon sx={{ fontSize: 40 }} />
          </a>
          <a href="https://www.google.com/maps/place/Rajshahi/@24.38015,88.5709965,13z/data=!3m1!4b1!4m5!3m4!1s0x39fbefa96a38d031:0x10f93a950ed6f410!8m2!3d24.3745146!4d88.604166">
            <FmdGoodIcon sx={{ fontSize: 40 }} />
          </a>
        </div>
        <p className="font-mono">samsun.naher.nishi.2017@gmail.com</p>
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
