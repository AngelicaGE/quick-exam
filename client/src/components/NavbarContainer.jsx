import React, { useState, useEffect, useContext } from 'react'
import '../styles/Navbar.scss'
import { UserContext } from "../context/UserContext";
import { SUC } from '../helpers/globalVars';
import NavbarBrowser from './NavbarBrowser';
import { NavbarMobile } from './NavbarMobile';
import { navOptions } from '../helpers/globalVars';
import { useNavigate } from "react-router-dom";

const NavbarContainer = () => {
    const {userLocalStorage, getLogedInUser, signOut} = useContext(UserContext);
    const [user, setUser] = useState(null)
    const [isBiggerThanPhone, setIsBiggerThanPhone] = useState(false)

    let navigate = useNavigate();
    const signOutFromAccount = () =>{
        console.log("bye")
        signOut();
        navigate("/");

    }

useEffect( () => {
    async function fetchUser(){
        console.log(userLocalStorage.email)
        let res = await getLogedInUser(userLocalStorage.email);
        console.log(res)
        if (res.status === SUC) {
            setUser(res.user)
            console.log(res.user)
        }
    }
    if(userLocalStorage){
        fetchUser();
    }

    if (window.screen.width > 425) {
        setIsBiggerThanPhone(true);
      }
}, [userLocalStorage])

  return (
    <div className='Navbar'>
        <div className='nav-content flex-row'>
            
            {
                //<img className='logo' src={Logo} alt="" />
                //isBiggerThanPhone? <NavbarBrowser tabs={navOptions} user={user} signOut={signOutFromAccount}></NavbarBrowser>
                //: <NavbarMobile tabs={navOptions} user={user} signOut={signOutFromAccount}></NavbarMobile>
            }
            <NavbarMobile className="NavbarMobile" tabs={navOptions} user={user} signOut={signOutFromAccount}></NavbarMobile>
            <NavbarBrowser className="NavbarBrowser"  tabs={navOptions} user={user} signOut={signOutFromAccount}></NavbarBrowser>
        </div>
        <hr />
    </div>
  )
}

export default NavbarContainer