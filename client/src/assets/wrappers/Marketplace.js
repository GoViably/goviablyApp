import styled from 'styled-components'

const Wrapper = styled.main`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--grey-50);
  gap: 20px;
  .navbar {
    background: var(--white);
    display: ${({ hide }) => (hide ? 'none' : 'block')};
    position: fixed;
    z-index: 1;
    width: 100%;
  }
  .navbar-hidden: {
    display: none;
  }
  .big-banner {
    border-radius: var(--borderRadius);
    width: 95vw;
    height: 250px;
    margin: 115px 0 0 0;
    background: var(--grey-100);
    display: grid;
    align-items: center;
    justify-items: center;
    grid-template-columns: 1fr 3fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-template-areas:
      'big-l big-mt big-r'
      'big-l big-mm big-r'
      'big-l big-mb big-r';
      transition: var(--transition);
      cursor: pointer;
  
      &:hover {
        transition: var(--transition);
      }
    }
    .big-text {
        text-align: center;
        margin: 0;
        padding: 0;
        text-transform: uppercase;

    }
    .mt {
        font-size: 32px;
        grid-area: big-mt;
    }
    .mm {
        font-size: 60px;
        grid-area: big-mm;
    }
    .mb {
        font-size: 32px;
        grid-area: big-mb;
    }
    .flower-img-purple {
        object-fit: contain;
        grid-area: big-l;
    }
    .flower-img-yellow {
        object-fit: contain;
        grid-area: big-r;
    }
    .svg-top {
        margin: -20px 0 0 0;
    }
    .svg-btm {
        margin: 0 0 0px 0;
    }
  .product-banner {
    display: grid;
    align-items: start;
    justify-items: center;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr 2fr;
    grid-template-areas:
      '. title .'
      'item1 item2 item3';
    background: var(--grey-100);
    margin: 0px 0 0 0;
    padding: 0 0 20px 0;
    width: 95vw;
    border-radius: var(--borderRadius);
    margin-bottom: 20px;
  }

  .product-banner-title {
    text-align: center;
    grid-area: title;
    margin: 25px 0 0 0;
    padding: 0;
    font-size: 40px;
  }

  .card {
      box-shadow: var(--shadow-1);
      background: var(--grey-100);
      transition: var(--transition);
      border-radius: var(--borderRadius);
      cursor: pointer;
      border-top: 5px solid var(--grey-300);
      &:hover {
          box-shadow: var(--shadow-4);
          transition: var(--transition);

      }
  }

  .card1 {
      grid-area: item1;
  }
  .card2 {
      grid-area: item2;
  }
  .card3 {
      grid-area: item3;
  }
  .card-title {
      padding: 20px 0 0 0;
      text-align: center;
  }
      
  
  .product-banner-img1 {
    width: 300px;
    padding: 20px;
  }
  .product-banner-img2 {
    width: 300px;
    padding: 20px;

  }
  .product-banner-img3 {
  }
}
`

export default Wrapper
