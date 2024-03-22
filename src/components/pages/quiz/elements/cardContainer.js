import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

export default function CardContainer({quiz}) {

  const [index, setIndex] = useState(0)
  // console.log(index)

  function decrement() {
    if(index === 0) setIndex(quiz.questions.length - 1)
    else setIndex(index - 1)
  }
  function increment() {
    if(index === quiz.questions.length -1) setIndex(0)
    else setIndex(index + 1)
  }

  if(quiz.questions === undefined || quiz.answers === undefined) {
    return(
      <div>It looks like this quiz is unfinished</div>
    )
  }

  return(
    <>
      <div id='card-container'>
        <Card question={quiz.questions[index]} answer={quiz.answers[index]}/>
      </div>
      <div id="arrow-div">
        <FontAwesomeIcon onClick={decrement} className="arrow" icon={faChevronLeft} />
        <FontAwesomeIcon onClick={increment} className="arrow" icon={faChevronRight} />
      </div>
    </>
  )
}