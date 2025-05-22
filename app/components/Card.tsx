"use client"
import Image from 'next/image'
import React from 'react'
import Button from './ui/Button'

interface CardProps {
  title: string;
  description: string;
  price: string;
  images: string;
}

const Card =  ({title, description, price, images} : CardProps) => {   

  return (
    <div>
      CARD
      <div className='bg-gradient-to-r flex   from-violet-600 to-indigo-600'>
        <div className='bg-white w-[20rem] min-h-[20rem]  rounded-lg shadow-lg m-auto mt-10'>
            <Image
                src= {images}
                alt="Picture of a headphone"
                width={200}
                height={200}
                className='rounded-t-lg m-auto mt-3'
            
            />
            <div className='flex flex-col px-[2rem]  '>

            <span className='text-xl font-bold '>{title}</span><br />
            <span className='text-gray-500 text-sm '>{description}</span><br />
            <span className='font-bold mt-0'>{price}</span>
            </div>
            <div className=''>

            <Button/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Card
