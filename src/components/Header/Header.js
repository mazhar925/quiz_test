import React from 'react'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div className='w-screen flex justify-evenly py-5 shadow-lg flex-wrap'>
        <Link to='/'>Home</Link>
        <Link to='/blog'>Blog</Link>
        <Link to='/stats'>Stats</Link>
    </div>
  )
}
