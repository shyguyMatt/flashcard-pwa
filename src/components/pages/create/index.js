import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './../../../firebase'

export default function Create() {

  const saveQuiz = async() => {
    let tempName = document.querySelector('#quiz-name').value;
    let tempUser = document.querySelector('#quiz-user').value;

    try {
      const doc = await addDoc(collection(db, 'quizes'), {
        name: tempName,
        user: tempUser
      })
      window.location.replace(`/edit/${doc.id}`)
    }
    catch(err) {
      console.error(err)
    }
  }

  return(
    <div>
      <h1>Create New</h1>
      <label>Name</label>
      <input id='quiz-name'/>
      <label>User</label>
      <input id='quiz-user'/>
      <button onClick={saveQuiz}>Save</button>
    </div>
  )
}