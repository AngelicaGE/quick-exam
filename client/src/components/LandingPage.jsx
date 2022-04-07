import React from 'react'
import NavbarContainer from './NavbarContainer'
import LandingMain from '../containers/LandingMain'
import LandingMetrics from '../containers/LandingMetrics'

export const LandingPage = () => {
  return (
    <div className='LandingPage'>
        {
          //<NavbarContainer></NavbarContainer>
        }
        <LandingMain></LandingMain>
        <LandingMetrics></LandingMetrics>
    </div>
  )
}
