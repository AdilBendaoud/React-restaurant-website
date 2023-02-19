import React from "react";

export const FoodInCart = (props) => {
  const { foodName, price, foodImage, quantity } = props.data;
  return (
    <div>
      <img src={foodImage} alt={foodName} width={40} className="" />
      <div>
        <p>{foodName}</p>
        <p>{price}</p>
      </div>
      <div>
        <button onClick={() => props.decrementQuantity(props.data)}>
          {quantity === 1 ? (
            <i className="bi bi-x-lg"></i>
          ) : (
            <i className="bi bi-dash-lg"></i>
          )}
        </button>
        <span>{quantity}</span>
        <button onClick={() => props.incrementQuantity(props.data)}>
          <i className="bi bi-plus-lg"></i>
        </button>
      </div>
    </div>
  );
};
