import React from "react";

const BtnOut = ({ text }) => {
  return (
    <button className="font-bold bg-transparent  border p-5 rounded-xl  border-black font-roboto">
      {text}
    </button>
  );
};

export default BtnOut;
