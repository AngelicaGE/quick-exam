import React from 'react'
import NavbarContainer from './NavbarContainer'
import LandingMain from '../containers/LandingMain'
import LandingMetrics from '../containers/LandingMetrics'
import LandingTestimonies from '../containers/LandingTestimonies'
import { LandingQuestions } from '../containers/LandingQuestions'

export const LandingPage = () => {
  return (
    <div className='LandingPage'>
        {
          //<NavbarContainer></NavbarContainer>
        }
        <LandingMain></LandingMain>
        <LandingMetrics></LandingMetrics>
        <LandingTestimonies></LandingTestimonies>
        <LandingQuestions></LandingQuestions>
    </div>
  )
}
