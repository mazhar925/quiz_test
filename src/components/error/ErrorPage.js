import React from 'react'
import NotFound from '../../assets/error.svg'

export default function ErrorPage() {
  return (
    <div className='flex justify-center items-center h-screen w-screen flex-col'>
        <img className='w-6/12 h-2/4' src={NotFound} alt="" />
        <h1 className='mt-5 font-bold text-4xl'>Alash! Not Found</h1>
    </div>
  )
}
