import React, { useState } from 'react'

const Text = () => {
    const[paragraph,setParagraph]=useState('')
  return (
    <div className='border-solid border-red-200 border-4 p-11 bg-gray-300'>
    <h1 className='font-bold text-xl '>2. Input Field State</h1>
          <h2 className='font-semibold'>Create a component where:</h2>
          <p>● There is an input field for entering text</p>
          <p>● Display the entered text in real-time below the input field.</p>
    <div className='text-center'>
      <input className='h-9 w-64' type='text' placeholder='Enter Your Text' onChange={(e)=>setParagraph(e.target.value)}/>
      <p className='border-solid border-2 border-yellow-200 m-5'>{paragraph}</p>
    </div>
    </div>
  )
}

export default Text
