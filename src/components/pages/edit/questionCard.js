import React from 'react'

export default function QuestionCard({ question, answer, remove, index }) {

  function removeField() {
    remove(index)
  }

  return(
    <div className='question-card'>
      <div>
        <h2>Question</h2>
        <input className='question' defaultValue={question}/>
      </div>
      <div>
        <h2>Answer</h2>
        <input className='answer' defaultValue={answer}/>
      </div>
      <button onClick={removeField}>remove</button>
    </div>
  )
}