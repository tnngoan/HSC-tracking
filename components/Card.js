import React from "react";
import logo from "../assets/images/logo.png";
import Image from "next/image";

const Card = () => {
  return (
    <div className="bg-white rounded-md grid grid-row-3 justify-around align-center border border-1 p-7 m-5">
      <div className="flex justify-center my-5">
        <Image src={logo} width={220} height={115.7} />
      </div>
      <div className="flex flex-col py-5">
        <p className="text-2xl bold">E-commerce solutions</p>
        <p className="text-md">
          From online shop to your customer’s front door – let us help you with
          the logistics, so you can concentrate on building your business.
        </p>
      </div>
      <button className="rounded-lg border border-1 mt-4 py-4">Learn more</button>
    </div>
  );
};

export default Card;
