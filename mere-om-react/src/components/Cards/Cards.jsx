import React from "react";

export const Cards = (props) => {
  return (
    <>
      <article className="CardsContainer" key={props.id}>
        <h3>{props.title}</h3>
        <p>{props.content}</p>
      </article>
    </>
  );
};
