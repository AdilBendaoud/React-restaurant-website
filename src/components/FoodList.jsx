import React from "react";
import { Food } from "../Food";
import FoodCategory from "./FoodCategory";


export const FoodList = () => {

  const foodByCategory = Food.reduce((acc, curr) => {
    acc[curr.category] = [...acc[curr.category] || [], curr];
    return acc;
  }, {});
  
  return (
    <div className='w-100 container'>
      {
        Object.entries(foodByCategory).map(([category, foods])=>(
          <FoodCategory key={category} category={category} foods={foods} />
        ))
      }
    </div>
  );
};
 