import React from 'react'
import '../styles/LandingQuestions.scss'
import { QuestionContainer } from './QuestionContainer'
import { allQuestions } from '../helpers/promises'
import ProfilesImage from '../rsc/images/profiles.PNG'

export const LandingQuestions = () => {
  return (
    <div className='LandingQuestions'>
        <div className='first flex-col center-center'>
            <h1 className='title '>Frequently asked questions</h1>
            <p className='subtitle'>Everything you need to know about the product and billing.</p>
        </div>
        <div className='second'>
        {
            allQuestions.map((question) => (
              <div className='question-cont' key={question.id}>
                <QuestionContainer question={question.question} answer={question.answer}></QuestionContainer>
              </div>
            ))
          }
        </div>
        <div className='third flex-col center-center'>
            <img src={ProfilesImage} alt="image of 3 user profiles" />
            <h1 className='title '>Still have questions?</h1>
            <p className='subtitle'>Can't find the answer you're looking for? Please chat to our friendly team.</p>
            <button className='blue-btn'>Get in touch</button>
        </div>
    </div>
  )
}
