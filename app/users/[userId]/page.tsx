
import Image from 'next/image';
import { notFound } from 'next/navigation';
import React from 'react'
import { MdEdit } from "react-icons/md";


async function getUser(userId: string) {
    const user = await fetch(`https://api.escuelajs.co/api/v1/users/${userId}`)
    const userData = await user.json()
    return userData
}

const UserPage =  async({params}: {params: Promise<{userId: string}>}) => {

    const {userId} = await params
    const user = await getUser(userId)

    if (!user) {
        notFound();
    }
    // console.log(user)
    // const user = await fetch(`https://api.escuelajs.co/api/v1/users/${id}`)
    // const userData = await user.json()
    
    
  return (
    <div>
      {userId}
     

      <div className='flex '>
        <div>

        <Image src={user.avatar} className='w-[15rem]' alt={user.name} />
        <div className='flex gap-1'>
          <div className='w-[3rem] bg-green-400 h-[1rem] '></div>
          <div className='w-[3rem] bg-green-400 h-[1rem] '></div>
          <div className='w-[3rem] bg-gray-400 h-[1rem] '></div>
          <div className='w-[3rem] bg-gray-400 h-[1rem] '></div>
        </div>

        <div className='flex gap-3 items-center'>
          <div className='flex flex-col '>

          <span className='text-xl text-gray-500 font-bold '>Your Rating</span>
          <span className='text-2xl font-bold text-center '>53%</span>
          </div>
          <div className='flex flex-col'>

          <span className='text-xl text-gray-500 font-bold ' >Activities</span>
          <span className='text-2xl font-bold text-center'>90%</span>
          </div>
        </div>
        </div>
        <div className='flex gap-[3rem] '>
          <div>
          

          <span className='text-2xl font-bold'>{user.name}</span><br />
          <span className='text-sm font-bold text-gray-400'>{user.email}</span>
          </div>

          
          <button className='bg-blue-500 w-[9rem] h-[4rem] text-white font-bold rounded-md flex justify-center items-center gap-2'> <MdEdit className='text-3xl bg-gray-700 rounded-full p-1 '/> EDIT</button>
        </div>
        <hr className='w-[3rem] h-4' />
      </div>



    </div>
  )
}

export default UserPage