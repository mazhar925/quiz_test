import React from 'react'
import Option from '../options/Option';
import { FaRegEye } from 'react-icons/fa';

export default function Question({val, checkVal}) {
  const {question, options, correctAnswer} = val;
  
  return (
    <div className='mb-10 rounded-xl border-2 shadow-lg p-5'>
        <div className='flex justify-evenly mb-5'>
        <p>{question}</p>
        <button className='flex' onClick={()=>{alert(correctAnswer)}}><FaRegEye/></button>
        </div>
        {
            options.map(val => <Option key={val.id} val={val} correctAnswer={correctAnswer} checkVal={checkVal}></Option>)
        }
    </div>
  )
}
