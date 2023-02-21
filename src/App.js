import { React, useState } from "react";
import Navbar from "./components/Navbar";
import { Food } from "./Food";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Error from "./components/Error";


export function App() {
  const [foodItems, setFoodItems] = useState(Food);
  const [foodInCart, setfoodInCart] = useState([]);
  const addItemToCart = (item) => {
    const itemFound = foodInCart.find((preFood) => preFood.id === item.id);
    if (itemFound) {
      itemFound.quantity += 1;
      setfoodInCart([...foodInCart]);
    } else {
      item.quantity = 1;
      setfoodInCart((prevItems) => [...prevItems, item]);
    }
  };
  const decrementQuantity = (item) => {
    item.quantity -= 1;
    setfoodInCart((prev) => {
      const myarr = prev.filter((elm) => elm.quantity > 0);
      return [...myarr];
    });
  };
  const incrementQuantity = (item) => {
    item.quantity += 1;
    setfoodInCart([...foodInCart]);
  };
  return (
    <Routes>
      <Route path="/" index element={<Home />} />
      <Route
        path="menu"
        element={
          <Menu
            foodItems={foodItems}
            addItemToCart={addItemToCart}
            foodInCart={foodInCart}
            decrementQuantity={decrementQuantity}
            incrementQuantity={incrementQuantity}
          />
        }
      />
      <Route path="*" element={<Error/>}/>
    </Routes>
  );
}
