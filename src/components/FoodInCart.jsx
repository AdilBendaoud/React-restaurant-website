import React from "react";

export const FoodInCart = (props) => {
  const { foodName, price, foodImage, quantity } = props.data;
  return (
    <div className='d-flex mb-3' style={{height:55}}>
      <img src={foodImage} alt={foodName} style={{width:40, height:40}} className=' rounded-3 mx-2' />
      <div className='d-flex justify-content-around w-100'>
        <div style={{width:'60%'}}>
          <h5 style={{fontSize:12}} className='fw-bold text-wrap'>{foodName}</h5>
          <p style={{fontSize:13}} className='fw-bold'>{price} Dhs</p>
        </div>
        <div>
          <button className="btn bg-danger rounded-circle p-0 text-white" style={{width:24, height:24}} onClick={() => props.decrementQuantity(props.data)}>
            {quantity === 1 ? (
              <i className="bi bi-x-lg"></i>
            ) : (
              <i className="bi bi-dash-lg"></i>
            )}
          </button>
          <span className='mx-2'>{quantity}</span>
          <div className="btn border-none bg-success rounded-circle p-0 text-white" style={{width:24, height:24}} onClick={() => props.incrementQuantity(props.data)}>
            <i className="bi bi-plus-lg"></i>
          </div>
        </div>
      </div>
    </div>
  );
};
