import React from 'react'

const ErrorPage = ({message= "ERROR 404: Sorry we couldnt find this page"}) => {
  return (
    <div className='ErrorPage'>
        <h1>{message}</h1> 
    </div>
  )
}

export default ErrorPage