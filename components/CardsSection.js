import React, { useEffect, useState } from "react";
import useSWR from "swr";
import Card from "./Card";
const fetcher = (url) => fetch(url).then((res) => res.json());

function CardsSection({ data }) {
  // const [cards, setCards] = useState([]);
  return (
    <div>
      {/* {data.cards.small_cards.map((card) => {
        <Card key={card.title} />;
      })} */}
    </div>
  );
}

export default CardsSection;
