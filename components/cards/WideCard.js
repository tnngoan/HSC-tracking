import React from "react";
import Image from "next/image";
import logo from "../../assets/images/logo.png";

const WideCard = ({ card, order }) => {
  return (
    <div className="grid grid-cols-3 gap-12 py-6 my-6">
      <Image src={logo} width={300} height={180} />
      <div className={`col-span-2 align-center px-5 mx-5 ${order}`}>
        <div className="flex flex-col py-5">
          <p className="text-2xl font-medium">{card.title}</p>
          <p className="text-md">{card.description}</p>
        </div>
        <a
          href={card.path}
          className="uppercase font-medium text-green-800 underline"
        >
          {card.button}
        </a>
      </div>
    </div>
  );
};

export default WideCard;
