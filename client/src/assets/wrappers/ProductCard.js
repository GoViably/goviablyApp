import styled from 'styled-components'

const Wrapper = styled.section`
  box-sizing: border-box;

  .product-card {
    cursor: auto;
    display: grid;
    justify-items: center;
    align-items: center;
    grid-template-columns: 1fr;
    grid-template-rows: 60px 20px 60px 150px 50px;
    width: 300px;
    height: 360px;
    background: var(--grey-100);
    border-radius: var(--borderRadius);
    /* border-top: 5px solid var(--grey-100); */
    border-bottom: 5px solid var(--grey-200);
  }

  .title {
    align-self: end;
    margin: 0;
    padding: 0;
    font-size: 34px;
  }

  .company {
    margin: 0;
    padding: 0;
  }

  .score {
    cursor: pointer;
    color: var(--primary-300);
    font-size: 25px;
    margin: 0;
    padding: 1px 10px;
    border-radius: 4px;
    opacity: 0.7;
    background: white;
    box-shadow: var(--shadow-1);
    transition-duration: 0.5s;
    &:hover {
      box-shadow: var(--shadow-4);
      transition-duration: 0.5s;
    }
  }

  .image {
    width: 150px;
    transition-duration: 0.5s;
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.5s;
    }
  }

  .price-container {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .price {
    font-size: 20px;
  }

  .favorites {
    width: 38px;
    height: 38px;
    transition-duration: 0.2s;
    cursor: pointer;
    &:hover {
      transform: scale(1.1);
      transition-duration: 0.2s;
    }
  }
`
export default Wrapper
