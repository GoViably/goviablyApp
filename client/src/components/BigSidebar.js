import Wrapper from '../assets/wrappers/BigSidebar'
import NavLinks from './NavLinks'
import { useNavigate } from 'react-router-dom'
import Logo from '../components/Logo'
import { useAppContext } from '../context/appContext'

const BigSidebar = () => {
  const navigate = useNavigate()
  const { showSidebar } = useAppContext()
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? 'sidebar-container' : 'sidebar-container show-sidebar'
        }
      >
        <div className='content'>
          <header>
            <div onClick={() => navigate('/dashboard')}>
              <Logo />
            </div>
          </header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}

export default BigSidebar
