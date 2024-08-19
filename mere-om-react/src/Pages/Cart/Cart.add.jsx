import React, { useState, useEffect } from "react";
import { Cards } from "../../components/Cards/Cards";
import { CardMaker } from "../../constants";
import { NavLink } from "react-router-dom";
import { CiShoppingBasket } from "react-icons/ci";

export const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCartItems(savedCartItems);
  }, []);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    let updatedCartItems;
    if (existingItem) {
      updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    } else {
      updatedCartItems = [...cartItems, { ...item, quantity: 1 }];
    }

    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
  };

  return (
    <section>
      {CardMaker.map((item) => (
        <div key={item.id}>
          <Cards {...item} />
          <button onClick={() => addToCart(item)}>Add to Cart</button>
        </div>
      ))}
      <NavLink to="/items">
        <CiShoppingBasket size={24} />
        <span>
          {cartItems.reduce((total, item) => total + item.quantity, 0)}
        </span>{" "}
      </NavLink>
    </section>
  );
};
