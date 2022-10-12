import React from 'react'
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
import { useLoaderData } from 'react-router-dom'

export default function Stats() {
  const quiz = useLoaderData();
  const {data} = quiz;
  return (
     <div className='flex justify-center items-center mt-20 flex-col'>
      <h1>Stats</h1>
       <BarChart width={400} height={300} data={data}>
        <XAxis />
        <YAxis dataKey="total" />
        <CartesianGrid/>
        <Tooltip/>
        <Bar dataKey="total" fill="#8884d8" />
      </BarChart>
     </div>
  );
}
