import React, { useState } from 'react'
import {thumb_up,thumb_down} from './img'

const MultipleStates = () => {
    const[like,setLike]=useState(0)
    const[dislike,setDislike]=useState(0)
  return (
    <div className='border-solid border-red-200 border-4 p-11 bg-gray-300'>
    <h1 className='font-bold text-xl '>4. Multiple States</h1>
          <h2 className='font-semibold'>Create a component with two buttons:</h2>
          <p>● One button to increase a "likes" counter</p>
          <p>● Another button to increase a "dislikes" counter.</p>
          <p>● Both counters should work independently</p>
    <div className='text-center'>
      <h3 className='font-extrabold'>Likes Count : {like}</h3>
      <h3 className='font-extrabold'>Dislikes : {dislike}</h3>
      <div className='flex place-content-center pt-6'>
      <div className='flex bg-blue-300 rounded-lg h-11 w-16 hover:bg-blue-500 hover:text-lg font-semibold'>
      <button onClick={()=>setLike(like+1)}>Like</button>
      <img className='h-9 w-9' src={thumb_up} alt=''/>
      </div>
      <div className='flex ml-10 bg-blue-300 rounded-lg h-11 w-24 hover:bg-blue-500 hover:text-lg font-semibold '>
         <button onClick={()=>setDislike(dislike+1)}>Dislike</button>
         <img className=' text-center mt-2 h-9 w-9' src={thumb_down} alt=''/>
      </div>
      </div>
    </div>
    </div>
  )
}

export default MultipleStates
