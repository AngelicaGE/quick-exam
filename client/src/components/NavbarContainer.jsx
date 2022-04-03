import React, { useState, useEffect, useContext } from 'react'
import '../styles/Navbar.scss'
import { UserContext } from "../context/UserContext";
import { SUC } from '../helpers/globalVars';
import Logo from '../rsc/images/logo-nav.PNG'
import NavbarBrowser from './NavbarBrowser';
import { NavbarMobile } from './NavbarMobile';
import { navOptions } from '../helpers/globalVars';

const NavbarContainer = () => {
    const {userLocalStorage, getLogedInUser} = useContext(UserContext);
    const [user, setUser] = useState(null)
    const [isBiggerThanPhone, setIsBiggerThanPhone] = useState(false)

useEffect(() => {
    let res = getLogedInUser();
    if (res.status == SUC) {
        setUser(res.user)
        console.log(res.user)
    }

    if (window.screen.width > 425) {
        setIsBiggerThanPhone(true);
      }
}, [])

  return (
    <div className='Navbar'>
        <div className='nav-content flex-row'>
            <img className='logo' src={Logo} alt="" />
            {
                isBiggerThanPhone? <NavbarBrowser tabs={navOptions}></NavbarBrowser>
                : <NavbarMobile tabs={navOptions}></NavbarMobile>
            }
        </div>
        <hr />
    </div>
  )
}

export default NavbarContainer