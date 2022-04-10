import React, {useState} from 'react'

export const QuestionContainer = ({question, answer}) => {
  const [isVisible, setIsVisible] = useState(false)
  
  const handleClickVisibility = () =>{
      setIsVisible(!isVisible)
  }

    return (
    <div className='QuestionContainer'>
        <div className='question-cont flex-row'>
            <p className='question'><b>{question}</b></p>
            <button onClick={handleClickVisibility}>{isVisible? '-':'+'}</button>
        </div>
        <p className='answer'>{isVisible? answer: ''}</p>
        <div className='hr-cont'>
            <hr />
        </div>
    </div>
  )
}
