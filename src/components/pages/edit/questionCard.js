import React from 'react'

export default function QuestionCard({ question, answer, remove, index }) {

  function removeField() {
    remove(index)
  }

  return(
    <div className='question-card'>
      <div>
        <h2>Question</h2>
        <textarea className='question' defaultValue={question}/>
      </div>
      <div>
        <h2>Answer</h2>
        <textarea className='answer' defaultValue={answer}/>
      </div>
      <button onClick={removeField}>remove</button>
    </div>
  )
}