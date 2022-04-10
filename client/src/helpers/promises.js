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


export const  allQuestions = [
        {key: '1', question: 'Is there a free trial available?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'},
        {key: '2',  question: 'Can I change my plan later?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'},
        {key: '3',  question: 'What is your cancellation policy?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'},
        {key: '4',  question: 'Can other info be added to an invoice?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'},
        {key: '5',  question: 'How does billing work?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'},
        {key: '6',  question: 'How do I change my account email?', answer: 'Yes, you can try us for 30 days. If you want, we´ll provide you with a frameElement, personalizeed 30-minute onboarding call to get you up and running as soon as possible.'}
]