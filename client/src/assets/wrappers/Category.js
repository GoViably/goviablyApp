import styled from 'styled-components'

const Wrapper = styled.main`
  display: flex;
  justify-content: center;
  margin: 110px 0 0 0;
  .product-wrapper {
    width: 1000px;
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
  }

  .product-card {
    box-shadow: var(--shadow-1);
    &:hover {
      box-shadow: var(--shadow-4);
    }
  }
`

export default Wrapper
