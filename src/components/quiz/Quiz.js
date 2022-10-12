import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import Question from '../question/Question';

export default function Quiz() {
    const val = useLoaderData();
    const {data} = val;
    const {name, questions} = data;
    const [ansCorrect, setCorrect] = useState(0);
  const [ansWrong, setWrong] = useState(0);
  const checkVal = (ans, correctAnswer)=>{
    if(correctAnswer === ans){
      setCorrect(ansCorrect + 1)
      alert(`Correct`)
    }
    else{
      setWrong(ansWrong + 1)
      alert(`Wrong`)
    }
  }
  return (
    <div className='flex justify-center items-center'>
      <div className='flex justify-center items-center pt-24 w-3/4'>
      <div className='my-10'>
        <h2 className='font-semibold text-2xl mb-5'>Quiz of {name}</h2>
        <div className='mb-3'>
        <p>Correct: {ansCorrect}</p>
        <p>Incorrect: {ansWrong}</p>
        </div>
        {
          questions.map(val=> <Question key={val.id} val={val} checkVal={checkVal}></Question>)
        }
      </div>
    </div>
    </div>
  )
}
