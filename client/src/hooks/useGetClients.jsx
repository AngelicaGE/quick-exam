import {useEffect, useState} from 'react';

const useGetClients =  (API) => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      async function getAllClients(){
        try{
          const response = await fetch(API);

          const data = await response.json();
          console.log(data)

          setClients(data.recordset);
        }catch(error){
          setError(`ERROR ${error.message}`)
        } finally{
          setLoading(false);
        }
      }
     getAllClients()
    }, []);
    
  return {clients: clients, loading, error};

};

export default useGetClients;