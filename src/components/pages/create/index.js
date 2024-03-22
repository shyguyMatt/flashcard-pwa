import React from 'react';
import { addDoc, collection } from 'firebase/firestore';
import { db } from './../../../firebase'

export default function Create() {

  const saveQuiz = async() => {
    let tempName = document.querySelector('#quiz-name').value;
    let tempUser = document.querySelector('#quiz-user').value;
    if(tempName === '' || tempUser === '') {
      window.alert('fields cannot be left blank!')
      return;
    }

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
    <div id='quiz-body'>
      <h1>Create New</h1>
      <label>Name</label>
      <input id='quiz-name'/>
      <label>User</label>
      <input id='quiz-user'/>
      <button id='quiz-save' onClick={saveQuiz}>Save</button>
    </div>
  )
}