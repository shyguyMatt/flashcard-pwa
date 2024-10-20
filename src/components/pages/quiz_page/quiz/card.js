import React, { useEffect, useState } from 'react';

export default function Card({question, answer}) {

  function handleReveal() {
    document.getElementById('card').classList.toggle('is_flipped')
  }

  return(

    <div onClick={handleReveal} id='card'>
      <div className='card-front'>
        <h1>Question</h1>
        <p>{question}</p>
      </div>
      <div className='card-back'>
        <h1>Answer</h1>
        <p>{answer}</p>
      </div>
    </div>
  )
}