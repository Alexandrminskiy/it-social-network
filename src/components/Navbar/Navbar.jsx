import s from './Navbar.module.css'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
      <NavLink to="/profile" className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={`${s.item} ${s.activ}`}>
        <NavLink to='/dialogs' className={navData => navData.isActive ? s.active : s.item}>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'>News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/music'>Music</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/setting'>Settings</NavLink>
      </div>
    </nav>
  )
}





export default Navbar;