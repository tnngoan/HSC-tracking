import React from "react";
import Image from "next/image";

const SmallCard = ({ card }) => {
  return (
    <div className="bg-white grid grid-row-3 justify-around align-center transform transition duration-300 ease-out">
      <div className="flex justify-center object-cover">
        <Image src={card.img} width={400} height={250} alt="HSC logo" />
      </div>
      <div className="flex flex-col text-gray-700 py-8 px-16">
        <p className="text-2xl font-medium">{card.title}</p>
        <p className="text-sm text-gray-500">{card.description}</p>
      </div>
      <button className="rounded-lg text-xl uppercase font-extrabold opacity-60 hover:opacity-90 text-green-999">
        {card.button}
      </button>
    </div>
  );
};

export default SmallCard;
