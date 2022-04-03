import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const NavbarBrowser = ({tabs}) => {
  return (
    <div className='NavbarBrowser'>
        <div className='navbar-links'>
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

    </div>
  )
}

export default NavbarBrowser