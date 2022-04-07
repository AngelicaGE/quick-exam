import { ENDPOINT } from "../helpers/globalVars";

export const  getClientFields = async() => {

        let API = `${ENDPOINT}/clients/fields`;

        const res = await fetch(API)
    
        const data = await res.json();
    
        return data
} 


export const  allMetrics = [
        {title: 'Objects completed', metric: '400+'},
        {title: 'Return on investment', metric: '600%'},
        {title: 'Global Downloads', metric: '10k'},
]