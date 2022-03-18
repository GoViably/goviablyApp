import React, { useEffect } from 'react'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/BathBody'
import { ProductCard } from '../../components'

const BathBody = () => {
  const { getAllProducts, products } = useAppContext()
  const count = products.filter((product) => product.category === 'bathBody')
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Wrapper>
      <div className='product-wrapper'>
        {products
          .filter((product) => product.category === 'bathBody')
          .map((product) => (
            <div className='product-card'>
              <ProductCard key={product._id} product={product} />
            </div>
          ))}
        {count.length}
      </div>
    </Wrapper>
  )
}

export default BathBody
