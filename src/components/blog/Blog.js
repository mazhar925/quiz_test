import React from 'react'

export default function Blog() {
  return (
    <div className='flex justify-center'>
       <div className='w-3/4 p-10'>
       <h2>Blog</h2>
        <div className='mb-5'>
            <h4 className='mb-5'>What is purpose of react router ?</h4>
            <p>React Router is a standard library for routing in React. It enables the navigation among views of various components in a React Application, allows changing the browser URL, and keeps the UI in sync with the URL.</p>
        </div>
        <div className='mb-5'>
            <h4 className='mb-5'>How does context api works ?</h4>
            <p>The React Context API is a way for a React app to effectively produce global variables that can be passed around. This is the alternative to "prop drilling" or moving props from grandparent to child to parent, and so on.</p>
        </div>
        <div>
            <h4 className='mb-5'>How does useRef works ?</h4>
            <p>useRef returns a mutable ref object whose .current property is initialized to the passed argument ( initialValue ). The returned object will persist for the full lifetime of the component. Essentially, useRef is like a “box” that can hold a mutable value in its .current property.</p>
        </div>
       </div>
    </div>
  )
}
