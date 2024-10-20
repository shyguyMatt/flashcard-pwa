import React, { useContext } from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './../../../firebase'
import { AuthContext } from '../../../contexts/authContext';

export default function Create() {
  const { authUser } = useContext(AuthContext)

  const saveQuiz = async() => {
    let tempName = document.querySelector('#quiz-name').value;
    if(tempName === '') {
      window.alert('fields cannot be left blank!')
      return;
    }

    try {
      const doc = await addDoc(collection(db, 'quizes'), {
        name: tempName,
        user: authUser.uid
      })
      let link = `/edit/${doc.id}`
      window.location.replace(link)
    }
    catch(err) {
      console.error(err)
    }
  }

  return(
    <div id='quiz-body'>
      <h1>Create New</h1>
      <label>Name</label>
      <input id='quiz-name'/>
      <button id='quiz-save' onClick={saveQuiz}>Save</button>
    </div>
  )
}