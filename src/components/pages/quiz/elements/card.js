import React, { useEffect, useState } from 'react';

export default function Card({question, answer}) {
  const [cardFace, setCardFace] = useState(true)

  useEffect(() => {
    setCardFace(true)
  }, [question])
  
  function handleReveal() {
    cardFace === true ? setCardFace(false) : setCardFace(true)
  }

  return(

    <div onClick={handleReveal} id='card'>
      {cardFace === true
      ?<div>
        <h1>Question</h1>
        <p>{question}</p>
      </div>
      :<div>
        <h1>Answer</h1>
        <p>{answer}</p>
      </div>}
    </div>
  )
}