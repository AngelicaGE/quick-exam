import { ENDPOINT } from "../helpers/globalVars";

export const  getClientFields = async() => {

        let API = `${ENDPOINT}/clients/fields`;

        const res = await fetch(API)
    
        const data = await res.json();
    
        return data
} 