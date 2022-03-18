import React from 'react'
import { useNavigate } from 'react-router-dom'
import purpleFlower from '../../assets/images/art/purple-flower.gif'
import yellowFlower from '../../assets/images/art/yellow-flower.gif'
import bathBody from '../../assets/images/category/bathandbody.png'
import outdoors from '../../assets/images/category/outdoors.png'
import { NavbarMarketplace } from '../../components'
import Wrapper from '../../assets/wrappers/Marketplace'
const Marketplace = () => {
  const navigate = useNavigate()
  return (
    <>
      <Wrapper>
        <div className='navbar'>
          <NavbarMarketplace />
        </div>
        <div className='big-banner'>
          {/* <img
            className='flower-img-yellow'
            src={yellowFlower}
            alt='yellow flower'
          />
          <img
            className='flower-img-purple'
            src={purpleFlower}
            alt='purple flower'
          /> */}
          <p className='big-text mt'>Make every day</p>
          <h3 className='big-text mm'>Go Viably</h3>
          <p className='big-text mb'>with GoViably essentials</p>
        </div>

        <div className='product-banner'>
          <h3 className='product-banner-title'>goViably collections</h3>
          <div
            className='card card1'
            onClick={() => {
              navigate('/bath-body')
            }}
          >
            <h4 className='card-title'>bath and body</h4>
            <img
              className='product-banner-img1'
              src={bathBody}
              alt='bath and body products'
            />
          </div>
          <div className='card card2'>
            <h4 className='card-title'>outdoors</h4>
            <img
              className='product-banner-img2'
              src={outdoors}
              alt='bath and body products'
            />
          </div>
        </div>
      </Wrapper>
    </>
  )
}

export default Marketplace
