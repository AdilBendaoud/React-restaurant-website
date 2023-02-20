import { React, useState } from "react";
import { Cart } from "./components/Cart";
import { FoodList } from "./components/FoodList";
import Navbar from "./components/Navbar";
import { Food } from "./Food";
import SubNav from "./components/SubNav";
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
  const handleClick=(btn)=>{

  }
  return (
    <div style={{minWidth:600}}>
       <div className=" d-flex position-relative">
        <div>
          <SubNav/>
          <FoodList food={foodItems} addItemToCart={addItemToCart} />
        </div>
        <Cart
          data={foodInCart}
          decrementQuantity={decrementQuantity}
          incrementQuantity={incrementQuantity}
        />
      </div>
    </div>
  );
}
