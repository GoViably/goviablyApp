import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Wrapper from '../assets/wrappers/ProductCard'
import cartEmpty from '../assets/images/cartEmpty.png'
import cartFilled from '../assets/images/cartFilled.png'
import heartEmpty from '../assets/images/heartEmpty.png'
import heartFilled from '../assets/images/heartFilled.png'

const ProductCard = ({ product }) => {
  const [fillHeart, setFillHeart] = useState(false)
  const [fillCart, setFillCart] = useState(false)
  const color = 'red'
  return (
    <Wrapper product={product} color={color}>
      <div className='product-card'>
        <h1 className='title'>{product.name}</h1>
        <p className='company'>{product.company}</p>
        <p className='score'>{product.score}</p>
        <Link className='link' to={`/product/${product._id}`}>
          <img className='image' src={product.image} alt={product.name} />
        </Link>

        <div className='price-container'>
          <img
            onClick={() => {
              setFillHeart(!fillHeart)
            }}
            className='favorites'
            src={fillHeart ? heartFilled : heartEmpty}
            alt='favorites'
          />
          <p className='price'>{`$${(product.price / 100).toFixed(2)}`}</p>
          <img
            onClick={() => {
              setFillCart(!fillCart)
            }}
            className='favorites'
            src={fillCart ? cartFilled : cartEmpty}
            alt='cart'
          />
        </div>
      </div>
    </Wrapper>
  )
}

export default ProductCard
