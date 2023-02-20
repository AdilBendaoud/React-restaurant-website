import React from "react";
import { FoodItem } from "./FoodItem";

export const FoodList = (props) => {
  return (
    <div className='w-100 container'>
      <div className='row'>
        {props.food.map((item) => (
          <FoodItem key={item.id} data={item} addItemToCart={props.addItemToCart}/>
        ))}
      </div>
    </div>
  );
};
