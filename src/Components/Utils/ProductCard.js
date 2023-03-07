import React from 'react'
import './ProductCard.css'
function ProductCard(props) {
  return (
    <div className='ProductCard'> 
        <div className='infoContainer'>
        <span className='blueIcon'>{`#${props.num}` }</span>
            <div className='TextContainer'>
                <p className='itemTitle'>{props.title}</p>
                <h1 className='itemPrice'>{props.price}</h1>
            </div>
        </div>
        <span className='spanGreen'>{`${props.Quantity}k`}</span>

    </div>
  )
}

export default ProductCard
