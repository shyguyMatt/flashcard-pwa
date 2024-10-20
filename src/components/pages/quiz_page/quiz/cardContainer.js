import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import Card from "./card";

export default function CardContainer({quiz}) {
  const [index, setIndex] = useState(0)
  const [randArray, setRandArray] = useState([]);

  useEffect(() => {
    if(quiz.questions === undefined || quiz.answers === undefined) {
      return;
    }
    const zipped = quiz.questions.map(function(e, i) {
      return [e, quiz.answers[i]];
    });

    function randSort(oldArray) {
      console.log(oldArray)
      let newArray = [];
      while (oldArray.length != 0) {
        let randNum = Math.floor(Math.random() * oldArray.length)
        console.log(randNum)
        newArray.push(oldArray[randNum])
        oldArray.splice(randNum, 1)     
      }
      return(newArray)
    }
    // console.log(randSort([1,2,3,4,5,6,7,8,9]))
    setRandArray(randSort(zipped))
  }, [])  

  function decrement() {
    if(index === 0) setIndex(quiz.questions.length - 1)
    else setIndex(index - 1)
  }
  function increment() {
    if(index === quiz.questions.length -1) setIndex(0)
    else setIndex(index + 1)
  }

  if(randArray.length === 0) {
    return(
      <div>It looks like this quiz is unfinished</div>
    )
  }

  console.log(randArray)

  return(
    <>
      <div id='card-container'>
        <Card question={randArray[index][0]} answer={randArray[index][1]}/>
      </div>
      <div id="arrow-div">
        <FontAwesomeIcon onClick={decrement} className="arrow" icon={faChevronLeft} />
        <FontAwesomeIcon onClick={increment} className="arrow" icon={faChevronRight} />
      </div>
    </>
  )
}