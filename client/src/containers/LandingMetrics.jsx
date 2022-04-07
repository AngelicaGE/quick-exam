import React from 'react'
import '../styles/LandingMetrics.scss'
import { allMetrics } from '../helpers/promises'

const LandingMetrics = () => {
  return (
    <div className='LandingMetrics'>
        <div className='upper flex-col '>
            <h1 className='title '>Great products, faster than ever</h1>
            <p className='subtitle'>Everything you need to build corporate and great products</p>
        </div>  
        <div className='lower'>
          {
            allMetrics.map((metric) => (
              <div className='metric-cont'>
                <p className='metric'><b>{metric.metric}</b> </p>
                <p className='title'><b>{metric.title}</b></p>
              </div>
            ))
          }
        </div>
    </div>
  )
}

export default LandingMetrics