import React from 'react'
import { Link } from 'react-router-dom';

export default function Card({val}) {
    const {id, name, logo, total} = val;
  return (
    <div className='h-56 w-44 rounded-xl border-2 p-2 shadow-lg mb-3 flex flex-col border-stone-900'>
        <div className='bg-black rounded flex justify-center items-center h-28 mb-3'>
        <img className='h-24' src={logo} alt={name} />
        </div>

        <Link to={`quiz/${id}`}><button className='border-stone-900 border-2 mt-2 px-7'>Start</button></Link>
    </div>
  )
}
