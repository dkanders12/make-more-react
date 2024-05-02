import React from "react";
import { Cards } from "../../components/Cards/Cards";
import { CardMaker } from "../../constants";

export const Cart = () => {
  return (
    <section>
      {CardMaker.map((buy) => (
        <Cards key={buy.id} {...buy} />
      ))}
    </section>
  );
};
