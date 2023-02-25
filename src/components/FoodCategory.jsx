import React from 'react'
import { FoodItem } from './FoodItem'
export default function FoodCategory(props) {
  return (
    <div className='category-section'id={props.category}>
        <div className='d-flex'>
            <h2 className=' mb-5 fw-bold ps-4 me-3' style={{color:'#3f4870'}}>{props.category}</h2>
            <span className='rounded-circle text-center d-flex align-items-center justify-content-center fw-bold' style={{width:40,height:40, backgroundColor:'#ccf3f1'}}>{props.foods.length}</span>
        </div>
        <div className='row'>
            {props.foods.map((item) => (<FoodItem key={item.id} data={item}/>))}
        </div>
    </div>
  )
}
