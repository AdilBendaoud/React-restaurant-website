import { React, useState } from "react";
import { Cart } from "./components/Cart";
import { FoodList } from "./components/FoodList";
import { Food } from "./Food";
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
  return (
    <div className="d-flex justify-content-between">
      <FoodList food={foodItems} addItemToCart={addItemToCart} />
      <Cart data={foodInCart} />
    </div>
  );
}
