import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useAppContext } from '../../context/appContext'
import Wrapper from '../../assets/wrappers/Category'
import { ProductCard } from '../../components'

const Category = () => {
  let { category } = useParams()
  const { getAllProducts, products } = useAppContext()
  const count = products.filter((product) => product.category === category)
  useEffect(() => {
    getAllProducts()
  }, [])
  return (
    <Wrapper>
      <div className='product-wrapper'>
        {products
          .filter((product) => product.category === category)
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

export default Category
