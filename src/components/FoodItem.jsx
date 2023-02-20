import React from "react";

export const FoodItem = (props) => {
  const { id, foodName, price, foodImage } = props.data;
  return (
    <div className="col col-xxl-3 col-xl-4 col-lg-6 mb-5">
      <div className="card" style={{ width: "18rem" }}>
        <img className="card-img-top" src={foodImage} alt={foodName} />
        <div className="card-body pb-3">
          <h5 className="card-title fw-bold">{foodName}</h5>
          <span className="card-text fw-bold">{price} Dhs</span>
          <button
            onClick={() => props.addItemToCart(props.data)}
            className="btn btn-primary float-end p-0"
            style={{ width: 40, height: 40, borderRadius: 10 }}
          >
            <i className="bi bi-cart"></i>
          </button>
        </div>
      </div>
    </div>
  );
};
