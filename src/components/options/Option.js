import React from 'react'

export default function Option({val, checkVal, correctAnswer}) {
  return (
    <div>
        <button className='border-stone-900 border-2 mt-2 px-7 hover:bg-violet-600' onClick={()=>{checkVal(val, correctAnswer)}}>{val}</button>
    </div>
  )
}
