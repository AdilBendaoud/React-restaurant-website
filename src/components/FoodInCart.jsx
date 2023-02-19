import React from 'react'

export const FoodInCart = (props) => {
    const {foodName, price, foodImage, quantity} = props.data;
  return (
    <div>
        <img src={foodImage} alt={foodName} width={40} className=""/>
        <div>
            <p>{foodName}</p>
            <p>{price}</p>
        </div>
        <div>
            <button>
                <div>
                    <i className="bi bi-dash-lg"></i>
                </div>
            </button>
            <span>{quantity}</span>
            <button>
                <div>
                    <i className="bi bi-plus-lg"></i>
                </div>
            </button>
        </div>
    </div>
  )
}