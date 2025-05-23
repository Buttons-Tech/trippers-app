// import React from 'react'
import guy from '../../public/img/trippersguy.png'
import Image from 'next/image'
import Link from 'next/link'

const Herosection = () => {
  
  return (
    <>
    <div className='flex'>
        <div className="w-[33rem] ml-20 mt-10">
            <span className="font-bold text-gray-500 text-5xl">Your All-in-One</span><br />
            <span className="font-bold text-7xl">Travel & Event</span><br />
            <span className="font-bold text-orange-600 text-5xl">Platform</span><br />
            <span className="text-gray-500">Book hotels, flights, events and personalized <br />tours worldwide with exclusive rates and <br />automated commissions</span>
            <div className="flex mt-5 space-x-4">
              <Link href='/auth'>
            <button className={`w-[272px] bg-[#FF3D00] text-white  rounded-[10px] text-3xl font-bold h-[137px] hover:cursor-pointer `}>Get Started</button>
            </Link>
            <Link href='/bookings'>
            <button className={` bg-white border  border-[#FF3D00] text-[#FF3D00] w-[272px] rounded-[10px] text-3xl font-bold h-[137px] hover:cursor-pointer `}>Book Now</button>
            </Link>
            </div>
        </div>

   
    <div className="relative  left-45 top-12">
        <Image src={guy} className=" " alt=""/>
        <div className="w-55 h-55 rounded-full bg-blue-600 -z-[10] absolute right-50 top-15 "></div>
    </div>
    </div>
    </>
    
  )
}

export default Herosection
