import React, { useState, useEffect, useContext } from 'react'
import '../styles/ClientPage.scss'
import { UserContext } from "../context/UserContext";
import ErrorPage from './ErrorPage';
import ClientsContainer from './ClientsContainer';

const ClientPage = () => {
const {userLocalStorage} = useContext(UserContext);

if (!userLocalStorage){
  return <ErrorPage message='You do not have access to view this page sorry'/>
}




  return (
    <div className='ClientPage'>
        <ClientsContainer></ClientsContainer>
    </div>
  )
}

export default ClientPage