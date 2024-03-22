import React, { useState, useEffect } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from './../../../firebase'
import { Link } from "react-router-dom";
import Quiz from "../quiz";

export default function QuizSelect() {
  const [ quizes, setQuizes ] = useState('loading')

  useEffect(() => {
    getQuizes()
  }, [])

  const getQuizes = async() => {
    try {
      const quizesRef = collection(db, 'quizes');
      const q =  query(quizesRef);
      let results = await getDocs(q);
      let temp = [];
      results.forEach((doc) => {
        temp.push({id: doc.id, data: doc.data()})
      })
      setQuizes(temp);
    } catch (err) {
      console.error(err);
    }
  }

  if(quizes === 'loading') {
    return(
      <div>Loading...</div>
    )
  }

  return(
    <div id='quiz-body'>
      <h1>Select a set of flashcards</h1>
      {quizes.map((quiz) => {
        let link = `/quiz/${quiz.id}`
        return(
          <Link to={link} key={quiz.id}>
            <button className='quiz-link'>{quiz.data.name}</button>
          </Link>  
        )

      })}
    </div>
  )
}