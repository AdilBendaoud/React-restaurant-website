import React from 'react'

export default function SubNavItems(props) {
    const {name,icon,active} = props.data
  return (
    <button 
        onClick={()=>props.Clicked(props.data)}
        className='me-3 btn  p-0 d-flex align-items-center flex-column pt-2 rounded-pill'
        style={{width:68,height:132,backgroundColor:active?'#198754':'white'}}>
        <div className='bg-white mb-2 rounded-circle d-flex justify-content-center align-items-center' style={{width:52,height:52,top:6,right:3}}>
            <img width={30} src={icon} />
        </div>
        <div className='fw-bold' style={{bottom:'20%',width:52,fontSize:12,color:active?'white':'black'}}>{name}</div>
    </button>
  )
}
