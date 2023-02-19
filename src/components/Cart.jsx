import React from "react";
import { FoodInCart } from "./FoodInCart";
export const Cart = (props) => {
  return (
    <div>
      <h4>COMMANDE</h4>
      <div>
        {props.data.map((item) => (
          <FoodInCart key={item.id} data={item} 
           decrementQuantity={props.decrementQuantity}
           incrementQuantity={props.incrementQuantity}/>
        ))}
      </div>
      <div>
        <p>TOTAL</p>
        <span>
            {props.data.reduce(
            (sum, currentItem) =>
              (sum += currentItem.price * currentItem.quantity),
            0
          )} Dhs
        </span>
      </div>
      <button>PASSER LA COMMANDE</button>
    </div>
  );
};
