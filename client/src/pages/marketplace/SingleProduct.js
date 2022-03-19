import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import styled from 'styled-components'

const SingleProduct = () => {
  let { id } = useParams()
  const [currentProduct, setCurrentProduct] = useState({})
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
      <div style={{ margin: '100px 0 0 0' }}>{currentProduct.name}</div>
    </Wrapper>
  )
}

export default SingleProduct

const Wrapper = styled.main`
  width: 100%;
  height: 100%;
  background: aquamarine;
`
