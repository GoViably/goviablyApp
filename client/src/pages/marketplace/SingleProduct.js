import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingleProduct = () => {
  let { id } = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await axios(`/api/v1/products/${id}`)
      console.log(data)
      setCurrentProduct(data)
    }
    getProducts()
  }, [])
  return (
    <div style={{ margin: '100px 0 0 0' }}>{currentProduct.product?.name}</div>
  )
}

export default SingleProduct
