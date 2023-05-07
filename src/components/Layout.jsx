import { NavLink, Outlet } from "react-router-dom"
import {CustomLink} from './CustomLink'

//outlet что-то типо плейсхолдера в который будет вставляться все содержимое

const setActive =  ({isActive}) => isActive ? 'castom-active' : '';

const Layout = () => {

  return (
    <>
      <header>
        <NavLink to='/' style={({isActive}) => ({color: isActive ? 'blue' : 'white'}) } >Home</NavLink>
        <NavLink to='/posts' className={setActive}>Blog</NavLink>
        <CustomLink to='/about' className={setActive}>About</CustomLink>
      </header>

      <Outlet />

      <footer><h4>made by webdotG</h4></footer>
    </>
  )
}

export { Layout }