"use client"
import React from 'react'

const page = () => {
  return (
    <div>
        <h1>WELCOME BOSS</h1>
      <button className='bg-blue-700 w-[12rem] h-[3rem] rounded-full font-bold text-white ' onClick={()=> alert('Welcome Mr President')}>Contact Us </button>
    </div>
  )
}

export default page
