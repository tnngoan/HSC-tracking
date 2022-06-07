import React from "react";
import Image from "next/image";

const WideCard = ({ card, order }) => {
  return (
    <div className="md:grid md:grid-cols-2 justify-between align-middle place-items-center">
      <div className="flex justify-between items-center">
        <Image alt='HSC logo' src={card.img} width={791} height={390} />
      </div>
      <div className={`col-span-1 ${order} align-center px-20`}>
        <div className="flex flex-col py-2">
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
