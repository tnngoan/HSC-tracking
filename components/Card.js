import React from "react";
import Image from "next/image";
import logo from "../assets/images/logo.png";

const Card = (props) => {
  console.log(props);
  return (
    <div className="bg-white rounded-md grid grid-row-3 justify-around align-center border border-1 p-7 m-5 transform transition duration-300 ease-out">
      <div className="flex justify-center my-5">
        <Image src={logo} width={220} height={115.7} alt="HSC logo" />
      </div>
      <div className="flex flex-col py-5">
        <p className="text-2xl bold">{props.title}</p>
        <p className="text-md">{props.description}</p>
      </div>
      <button className="rounded-lg border border-1 mt-4 py-4">
        {props.button}
      </button>
    </div>
  );
};

export default Card;
