import React from "react";
import Marquee from "react-fast-marquee";

const Marq = ({ text, text1, text2, speed }) => {
  return (
    <Marquee
      className="border-b border-black p-1"
      autoFill={true}
      pauseOnHover={true}
      speed={speed}
    >
      <h1 className="text-[18px] font-bold mx-2 font-poppins">{text}</h1>
      <div className="rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-red-500 h-[15px] w-[15px]" />
      <h1 className="text-[18px] font-bold mx-2 font-poppins">{text1}</h1>
      <div className="rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-red-500 h-[15px] w-[15px]" />
      <h1 className="text-[18px] font-bold mx-2 font-poppins">{text2}</h1>
      <div className="rounded-full bg-gradient-to-br from-green-400 via-yellow-400 to-red-500 h-[15px] w-[15px]" />
    </Marquee>
  );
};

export default Marq;
