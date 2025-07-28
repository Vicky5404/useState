import React, { useState } from 'react'

const Checkbox = () => {
    const[hide,setHide]=useState(true)
  return (
    <div className='border-solid border-red-200 border-4 p-11 bg-gray-300'>
    <h1 className='font-bold text-xl '>5. Conditional Rendering</h1>
          <h2 className='font-semibold'>Create a component with:</h2>
          <p>● A checkbox.</p>
          <p>● If the checkbox is checked, display a message (e.g., "Checkbox is checked").</p>
          <p>● If unchecked, hide the message.</p>
    <div className='flex place-content-center font-bold'>
    <input type='checkbox' onClick={()=>setHide(!hide)}/>
    { hide && <p>Click The Checkbox .</p>}
    </div>
    </div>
  )
}

export default Checkbox
