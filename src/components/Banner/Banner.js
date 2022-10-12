import React from 'react'
import quiz from '../../assets/quiz.svg'


export default function Banner() {
  return (
    <div className='flex justify-evenly my-10 flex-wrap'>
        <div className='w-96 flex justify-center items-start flex-col p-9'>
            <h2 className='font-medium text-5xl mb-4'>Hello Camps !</h2>
            <h2 className='font-medium text-5xl'>Are you ready to test your skills?</h2>
        </div>
        <div className='w-96 flex justify-center items-center'>
            <img className='w-72 h-72' src={quiz} alt="" />
        </div>
    </div>
  )
}
