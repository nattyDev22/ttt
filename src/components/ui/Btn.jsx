import React from "react";

const Btn = ({ text }) => {
  return (
    <button className="font-bold p-5 text-center rounded-xl bg-black text-green-500 font-roboto">
      {text}
    </button>
  );
};

export default Btn;
