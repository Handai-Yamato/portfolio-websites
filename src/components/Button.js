import React from "react";

const Button = (props) => {
  return (
    <div className="inline-block duration-300">
      <p className=" w-36 p-2 rounded-lg flex items-center justify-center text-black  bg-green-400 no-underline ">{props.text}</p>
    </div>
  );
};

export default Button;
