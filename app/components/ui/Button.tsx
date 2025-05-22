import React from 'react'
import { IoCartOutline } from "react-icons/io5";
import { FaRegMoneyBill1 } from "react-icons/fa6";
// import Image from 'next/image';





const data = [
      {
        icon: <IoCartOutline /> ,
    title: 'Add to cart',
    color: 'bg-gray-300',
    c_code: true,
    },
      {
        icon: <FaRegMoneyBill1/>,
    title: 'Buy',
    c_code: false,
    color: 'bg-blue-700',
    },
]
  

    


const Button = () => {
  return (
    <div className='flex'>
      {data.map((item, index) => (
        <button key={index} className={`flex items-center justify-center w-[12rem] mt-5 hover:cursor-pointer h-[3rem] rounded-l font-bold text-white ${item.color} hover:bg-gray-200 m-2`}>
          <span className={`text-2xl ${item.c_code ? 'text-gray-700' : 'text-white'}`}
             >{item.icon}</span> 
         
            <span className={`ml-2  ${item.c_code ? 'text-gray-700' : 'text-white'}`}>{item.title}</span>
        </button>
      ))}
    </div>
      
  )
}

export default Button
