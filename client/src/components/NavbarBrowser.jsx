import React from 'react'
import {Link, NavLink } from 'react-router-dom'
import Logo from "../rsc/images/logo-nav.PNG";

const NavbarBrowser = ({tabs, user, signOut }) => {

  return (
    <div className='NavbarBrowser flex-row'>
        <div className='navbar-links'>
        <img className='logo' src={Logo} alt="" />

        {
            tabs.map((tab) => (
                <div key={tab}>
                    <NavLink to={`/${tab}`} className={({isActive}) => isActive? 'light-blue-btn': ''}>
                        {tab}
                    </NavLink> 
                </div>
            ))
        }
        </div>
        {
            user?
            <div className='nav-user'>
                Hi {user.email}! &nbsp; <button className='blue-btn' onClick={() => signOut()}> Sign out</button>
            </div>
            : 
            <div className='nav-user'>
                <NavLink to="/login" className='btn'>
                        Log In
                </NavLink> 
                <button className='blue-btn'>Sign Up</button>
            </div>
        }
    </div>
  )
}

export default NavbarBrowser