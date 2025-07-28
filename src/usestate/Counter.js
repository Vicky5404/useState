import React, { useState } from 'react'


const Counter = () => {
    const[count,setCount]=useState(0);
  return (
    <div className='border-solid border-red-200 border-4 p-11 bg-gray-300'>
    <h1 className='font-bold text-xl '>1. Counter Application</h1>
          <h2 className='font-semibold'>Create a counter that:</h2>
          <p>● Increments the value by 1 on a button click.</p>
          <p>● Decrements the value by 1 on another button click.</p>
          <p>● Resets the value to 0.</p>
    <div className='text-center'>
      <h1 className='font-extrabold' >Count Value : {count}</h1>
      <button className='bg-blue-300 rounded-lg h-11 w-24 hover:bg-blue-500 hover:text-lg font-semibold ' onClick={()=> setCount(count+1)}>Click Me +</button>
      <button className='bg-blue-300 rounded-lg h-11 w-24 hover:bg-blue-500 hover:text-lg font-semibold m-11' onClick={()=> setCount(count-1)}>Click Me -</button>
      <button className='bg-blue-300 rounded-lg h-11 w-24 hover:bg-blue-500 hover:text-lg font-semibold m-3' onClick={()=> setCount(count==0)}>Reset</button>
      </div>
    </div>
  )
}

export default Counter
