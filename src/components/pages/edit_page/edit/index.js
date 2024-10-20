import React, { useEffect, useState } from 'react';
import { deleteDoc, doc, getDoc, query, updateDoc } from 'firebase/firestore';
import { db } from './../../../../firebase'
import QuestionCard from './questionCard';

export default function Edit() {
  const [ questions, setQuestions ] = useState('loading')
  const [ fields, setFields ] = useState([])
  let id = window.location.pathname.slice(6);

  const getQuestions = async() => {
    try {
      const questionsRef = doc(db, 'quizes', id);
      const q =  query(questionsRef);
      await getDoc(q).then((results) => {
        setQuestions(results.data())
      })
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getQuestions()
  }, [])

  useEffect(() => {
    console.log(questions)
    if(questions !== 'loading' && questions.questions !== undefined) {
      setFields(questions.questions.map((x, i) => [x, questions.answers[i]]))
    }
  }, [questions])

  if(questions === 'loading') {
    return(
      <div>Loading...</div>
    )
  }

  function addField() {
    setFields([...fields, ['', '']]);
  }

  function removeField(index) {
    let tempArray = fields;
    tempArray.splice(index, 1);
    setFields([...tempArray]);
  }

  const saveQuestions = async() => {
    let tempQuestions = []
    let questions = [...document.querySelectorAll('.question')]
    questions.map((question) => {
      tempQuestions.push(question.value)
    })
    let tempAnswers = []
    let answers = [...document.querySelectorAll('.answer')]
    answers.map((answer) => {
      tempAnswers.push(answer.value)
    })

    try {
      await updateDoc(doc(db, 'quizes', id), {
        questions: tempQuestions,
        answers: tempAnswers
      })
      window.location.replace('/')
    }
    catch(err) {
      console.error(err)
    }
  }

  const deleteQuiz = async() => {
    if (window.confirm("are you sure you want to delete?")) {
      await deleteDoc(doc(db, 'quizes', id))
      window.location.replace('/edit')
    } else return;
  }

  return(
    <div id='quiz-body'>
      <h1>{questions.name}</h1>
      <button id='quiz-save' onClick={saveQuestions}>Save</button>
      <button id='quiz-delete' onClick={deleteQuiz}>Delete</button>
      <div className='questions'>
        {fields.map((field, index) => {
          return(
            <QuestionCard key={field[0]+index} question={field[0]} answer={field[1]} remove={removeField} index={index} />
          )
        })}
      </div>
      <button id='add-question' onClick={addField}>Add Question</button>
    </div>
  )
}