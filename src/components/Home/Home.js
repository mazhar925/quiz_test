import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Banner from '../Banner/Banner';
import Card from '../Card/Card';

export default function Home() {
    const quiz = useLoaderData();
  return (
    <div>
        <Banner></Banner>
        <div className='flex justify-evenly flex-wrap mb-11'>
        {
            quiz.data.map(val=> <Card key={val.id} val={val}></Card>)
        }
        </div>
    </div>
  )
}
