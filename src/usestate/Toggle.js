/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import { View, View_hide } from './img'

const Toggle = () => {
  const[hide,setHide]=useState(true)
  return (
    <div className='border-solid border-red-200 border-4 p-11 bg-gray-300'>
    <h1 className='font-bold text-xl '>3. Toggle Visibility</h1>
          <h2 className='font-semibold'>Create a component with:</h2>
          <p>● A toggle button to show or hide a paragraph of text.</p>
    <div className='text-center'>
     {
      hide && <p className='font-bold'>Create A Hide And Show Button.</p>
     }
      <button className='text-center pt-2 bg-lime-200 rounded-lg h-11 w-24 hover:bg-lime-400 hover:text-lg font-semibold m-3' onClick={()=>setHide(!hide)}>{hide ?
        <div className='flex h-9 w-9 ml-5 pb-2'> Hide <img src={View_hide} alt=''/> </div>
       :<div className='flex h-9 w-9 ml-5 pb-2'> Show <img src={View}/></div>}</button>
    </div>
    </div>
  )
}

export default Toggle
