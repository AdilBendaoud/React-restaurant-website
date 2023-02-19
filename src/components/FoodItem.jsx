import React from "react";

export const FoodItem = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={foodImage} alt={foodName} />
      <div className="card-body">
        <h5 className="card-title">{foodName}</h5>
        <p className="card-text">{price}</p>
        <button onClick={()=>props.addItemToCart(props.data)} className="btn btn-primary">
          <i className="bi bi-cart"></i>
        </button>
      </div>
    </div>
  );
};
