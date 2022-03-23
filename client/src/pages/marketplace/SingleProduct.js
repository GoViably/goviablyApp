import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'
import cartEmpty from '../../assets/images/cartEmpty.png'
import cartFilled from '../../assets/images/cartFilled.png'
import heartEmpty from '../../assets/images/heartEmpty.png'
import heartFilled from '../../assets/images/heartFilled.png'
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai'
import { BsBagPlusFill } from 'react-icons/bs'

const SingleProduct = () => {
  let { id } = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
  const [fillHeart, setFillHeart] = useState(false)
  const [fillCart, setFillCart] = useState(false)
  const [quantity, setQuantity] = useState(1)
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`/api/v1/products/${id}`)
      console.log(data)
      setCurrentProduct(data.product)
    }
    getProducts()
  }, [])
  return (
    <Wrapper>
      <div className='main-container'>
        <div className='left-side'>
          <img className='product-image' src={currentProduct.image} />
        </div>
        <div className='right-side'>
          <h2>{`${currentProduct.name}`}</h2>
          <p className='text'>
            <span>Company: </span> {currentProduct.company}
          </p>
          <p className='text'>
            <span>Price: </span> ${(currentProduct.price / 100).toFixed(2)}
          </p>
          <p className='text'>
            <span>Sustainability Score: </span> {currentProduct.score}
          </p>
          <div className='quantity'>
            <label htmlFor='quantity'>quantity: </label>
            <button
              onClick={() => {
                if (quantity > 1) {
                  setQuantity(quantity - 1)
                }
              }}
            >
              <AiOutlineMinus />
            </button>

            <input
              type='number'
              name='quantity'
              value={quantity}
              onChange={({ target }) =>
                target.value > 1 && target.value < 51 ? setQuantity(target.value) : setQuantity(1)
              }
            />
            <button
              onClick={() => {
                if (quantity < 51) {
                  setQuantity(quantity + 1)
                }
              }}
            >
              <AiOutlinePlus />
            </button>
          </div>
          <div className='icons-container'>
            <div
              onClick={() => {
                setFillCart(!fillCart)
              }}
            >
              <span>Add To Cart</span>
              <img className='icons' src={fillCart ? cartFilled : cartEmpty} />
            </div>
            <div
              onClick={() => {
                setFillHeart(!fillHeart)
              }}
            >
              <span>Add to Favorites</span>
              <img className='icons' src={fillHeart ? heartFilled : heartEmpty} />
            </div>
            <div>
              <span>Go to cart</span>
              <div>
                <BsBagPlusFill width={400} />
              </div>
            </div>
            <div>
              <span>product Category</span>
            </div>
          </div>
        </div>
        <div className='bottom'>
          <p className='text'>
            <span>description: </span> {currentProduct.description}
          </p>
        </div>
      </div>
    </Wrapper>
  )
}

export default SingleProduct

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background: var(--grey-50);
  .main-container {
    display: grid;
    margin: 100px 0 0 0;

    grid-template-columns: 1fr 1fr;
    grid-template-rows: 2fr 1fr;
    grid-template-areas:
      'left right'
      'bottom bottom';
  }

  .left-side {
    display: flex;
    justify-content: center;
    grid-area: left;
    border-bottom: 1px solid black;
  }
  .product-image {
    width: 500px;
    height: 500px;
  }
  .right-side {
    grid-area: right;
    padding: 40px 30px 0 20px;
    border-bottom: 1px solid black;
  }
  .quantity {
    display: flex;
    align-items: center;
    gap: 20px;
  }

  .quantity > label {
    font-size: 28px;
  }

  .quantity > button {
    cursor: pointer;
    background: none;
    border: none;
    font-size: 40px;
  }
  .quantity > input {
    text-align: center;
    font-size: 28px;
    margin: 0;
  }
  .icons-container {
    margin: 30px 0 0 0;
    display: grid;
    grid-template-columns: 250px 250px;
    justify-items: start;
    gap: 20px;
  }

  .icons-container > div {
    display: flex;

    align-items: center;
    width: 250px;
    gap: 10px;
    padding: 5px 20px;
    background: var(--grey-200);
    border-radius: var(--borderRadius);
    cursor: pointer;
    transition-duration: 0.5s;
    &:hover {
      box-shadow: var(--shadow-4);
      transition-duration: 0.5s;
    }
  }

  .icons-container > div > span {
    font-size: 20px;
  }
  .icons {
    width: 38px;
    height: 38px;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.2s;
    }
  }

  .bottom {
    display: flex;

    grid-area: bottom;
    padding: 30px 0 0px 100px;
    border-bottom: 1px solid black;
  }
  .text {
    margin: 0;
    font-size: 28px;
    width: 100%;
  }

  .text > span {
    font-size: 32px;
    margin: 0 5px 0 0;
    font-weight: bold;
  }
`
