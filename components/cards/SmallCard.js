import React from "react";
import Image from "next/image";

const SmallCard = ({ card }) => {
  return (
    <div className="bg-white grid grid-row-3 justify-around align-center transform transition duration-300 ease-out py-6 md:py-0">
      <div className="flex justify-center object-cover">
        <Image src={card.img} width={400} height={250} alt="HSC logo" />
      </div>
      <div className="flex flex-col text-gray-700 py-8 px-8 md:px-12">
        <p className="text-2xl font-medium">{card.title}</p>
        <p className="text-sm text-gray-500">{card.description}</p>
      </div>
      <div className="flex justify-center items-center">
        <button className="rounded-lg border border-1 border-green-900 w-1/2 p-2 focus:ring bg-green-800 text-gray-200 text-lg uppercase font-bold focus:opacity-80">
          {card.button}
        </button>
      </div>
    </div>
  );
};

export default SmallCard;
