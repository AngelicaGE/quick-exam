import React, { useState, useEffect } from 'react'
import useGetClients from '../hooks/useGetClients';
import { ENDPOINT } from '../helpers/globalVars';

const ClientPage = () => {
    let API = `${ENDPOINT}/clients`; 

const {clients, loading, error} = useGetClients(API);


  return (
    <div className='ClientPage'>
        clients:
        {clients.map((client) => (
            <div className="Client" key={client._id}>
                {client.name}
                {client.gender}
                {client.country}
                {client.state}
                <hr />
            </div>

        ))}
    </div>
  )
}

export default ClientPage