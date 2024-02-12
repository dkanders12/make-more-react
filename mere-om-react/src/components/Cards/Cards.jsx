import { CardMaker } from "../../constants";

const Cards = () => {
  return (
    <>
      {CardMaker.map((cardmaker) => (
        <article className="CardsContainer" key={cardmaker.id}>
          <h3>{cardmaker.title}</h3>
          <p>{cardmaker.content}</p>
          <a href="">Add to cart</a>
        </article>
      ))}
    </>
  );
};

export default Cards;
