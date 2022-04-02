import {useEffect, useState} from 'react';

const useGetClients =  (API) => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
      async function getAllClients(){
        console.log("use effect")
        try{
          const response = await fetch(API);
          console.log("RESPONSE: ")
          console.log(response)
          console.log("RESPONSE.JSON(): ")

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