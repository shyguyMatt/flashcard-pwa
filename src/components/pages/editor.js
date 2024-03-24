import React, { useState, useEffect, useContext } from "react";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { auth, db } from './../../firebase'
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/authContext";

export default function Editor() {
  const { authUser } = useContext(AuthContext)
  const [ quizes, setQuizes ] = useState('loading')

  useEffect(() => {
    getQuizes()
  }, [authUser])

  const getQuizes = async() => {
    try {
      if(authUser === null) return;
      const q =  query(collection(db, 'quizes'), where('user', '==', authUser.uid));
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

  if (authUser === null) {
    return(
      <div>You must be signed in to view this page</div>
    )
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