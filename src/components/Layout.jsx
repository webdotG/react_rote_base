import { NavLink, Outlet } from "react-router-dom"

//outlet что-то типо плейсхолдера в который будет вставляться все содержимое

const setActive =  ({isActive}) => isActive ? 'castom-active' : '';

const Layout = () => {

  return (
    <>
      <header>
        <NavLink to='/' style={({isActive}) => ({color: isActive ? 'blue' : 'white'}) } >Home</NavLink>
        <NavLink to='/posts' className={setActive}>Blog</NavLink>
        <NavLink to='/about' className={setActive}>About</NavLink>
      </header>

      <Outlet />

      <footer><h4>made by webdotG</h4></footer>
    </>
  )
}

export { Layout }