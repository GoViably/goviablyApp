import React from 'react'
import { Outlet } from 'react-router-dom'
import { NavbarMarketplace } from '../../components'
import Wrapper from '../../assets/wrappers/Marketplace'

const MarketplaceLayout = () => {
  return (
    <Wrapper>
      <div className='navbar'>
        <NavbarMarketplace />
      </div>
      <Outlet />
    </Wrapper>
  )
}

export default MarketplaceLayout
