import { useState } from 'react'
import goLogo from '../assets/images/goviablyLogo.png'
import { useNavigate } from 'react-router-dom'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaUserCircle, FaCaretDown } from 'react-icons/fa'
import { useAppContext } from '../context/appContext'
import Logo from './Logo'
const NavbarMarketplace = () => {
  const navigate = useNavigate()
  const [showLogout, setShowLogout] = useState(false)
  const { toggleSidebar, logoutUser, user } = useAppContext()

  return (
    <Wrapper>
      <div className='nav-center'>
        <img className='gologo' src={goLogo} onClick={() => navigate('/')} />
        <div>
          <h3 className='logo-text'>Marketplace</h3>
        </div>
        <div className='btn-holder'>
          <button className='btn' onClick={() => navigate('/dashboard')}>
            Business
          </button>
          <div className='btn-container'>
            <button
              type='button'
              className='btn'
              onClick={() => setShowLogout(!showLogout)}
            >
              <FaUserCircle />
              {user?.name}
              <FaCaretDown />
            </button>
            <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
              <button
                type='button'
                className='dropdown-btn'
                onClick={logoutUser}
              >
                logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}

export default NavbarMarketplace
