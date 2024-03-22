import React, { useEffect, useState } from 'react';
import { doc, getDoc, query } from 'firebase/firestore';
import { db } from './../../../firebase'

import CardContainer from './elements/cardContainer';

export default function Quiz() {
  const [ questions, setQuestions ] = useState('loading')

  useEffect(() => {
    getQuestions()
  }, [])

  let id = window.location.pathname.slice(6);

  const getQuestions = async() => {
    try {
      const questionsRef = doc(db, 'quizes', id);
      const q =  query(questionsRef);
      let results = await getDoc(q).then((results) => {
        setQuestions(results.data())
      })
    } catch (err) {
      console.error(err);
    }
  }

  if(questions === 'loading') {
    return(
      <div>Loading...</div>
    )
  }

  return(
    <div id='quiz-body'>
      <CardContainer quiz={questions} />
    </div>
  )
}