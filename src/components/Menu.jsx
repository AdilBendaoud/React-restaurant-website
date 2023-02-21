import React from 'react'
import { Cart } from './Cart'
import { FoodList } from './FoodList'
import SubNav from './SubNav'

export default function Menu(props) {
  return (
    <div style={{ minWidth: 600 }}>
      <div className=" d-flex position-relative">
        <div>
          <SubNav />
          <FoodList food={props.foodItems} addItemToCart={props.addItemToCart} />
        </div>
        <Cart
          data={props.foodInCart}
          decrementQuantity={props.decrementQuantity}
          incrementQuantity={props.incrementQuantity}
        />
      </div>
    </div>
  )
}
