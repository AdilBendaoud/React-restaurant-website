import React from "react";
import { FoodInCart } from "./FoodInCart";
import { useSelector } from "react-redux";
export const Cart = () => {
  const cartItem = useSelector((state) => state.cart.foodInCart);
  return (
    <div className="pt-4 position-sticky" style={{height:"100vh",width:300,top:0}}>
      <h5 className=" ps-2 mb-3 fw-semibold">COMMANDE</h5>
      <div className=" h-75">
        {cartItem.map((item) => (
          <FoodInCart
            key={item.id}
            data={item}
          />
        ))}
      </div>
      <div className='d-flex flex-column justify-content-around align-items-center px-3' style={{height:116}}>
        <div className=' d-flex justify-content-between px-3 w-100'>
          <span className='fw-semibold'>TOTAL</span>
          <span className='fw-bold'>
            {cartItem.reduce(
              (sum, currentItem) =>
                (sum += currentItem.price * currentItem.quantity),
              0
            )}{" "}
            Dhs
          </span>
        </div>
        <button className="btn btn-success p-0 fw-bold rounded-3" style={{width:250, height:44, paddingTop:14, paddingBottom:12, fontSize:14}}>PASSER LA COMMANDE</button>
      </div>
    </div>
  );
};
