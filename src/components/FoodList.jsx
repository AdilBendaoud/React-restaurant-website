import React from "react";
import { FoodItem } from "./FoodItem";

export const FoodList = (props) => {
  return (
    <div>
      {props.food.map((item) => (
        <FoodItem key={item.id} data={item} addItemToCart={props.addItemToCart}/>
      ))}
    </div>
  );
};
