import React, { useState, useEffect } from "react";
import { collection, getDocs, query } from 'firebase/firestore';
import { db } from './../../firebase'
import { Link } from "react-router-dom";

export default function Editor() {
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
      <h1>Choose a quiz to edit</h1>
      <Link to='/create'>
        <button id='create-link'>Create New</button>
      </Link> 
      {quizes.map((quiz) => {
        let link = `/edit/${quiz.id}`
        return(
          <Link to={link} key={quiz.id}>
            <button className='quiz-link'>{quiz.data.name}</button>
          </Link>  
        )})}         
    </div>
  )
}