// import React from 'react'
// import hotel from 'next/img/hotel.png';
import hotel from '../../public/img/hotel.png'
import beach from '../../public/img/Luxurybeach.png'
import ocean from '../../public/img/Oceanbay.png'
import rectangle from '../../public/img/Rectangle1.png'
import flight from '../../public/img/Flight.png'
import newyork from '../../public/img/Newyork.png'
import dubai from '../../public/img/Dubai.png'
import rome from '../../public/img/Rome.png'
import event from '../../public/img/Events.png'
import festive from '../../public/img/Festival.png'
import hangout from '../../public/img/hangout.png'
import conference from '../../public/img/conference.png'
import Image from 'next/image';

const Places = () => {
  return (
    <>
    <div className="flex items-center gap-2 ml-12 mt-12">
    <span className="text-2xl font-bold">Popular Hotels</span>
    <Image className="w-[55px] h-[55px]" src={hotel} alt=""/>
 </div>
 <div className='flex py-12'>
 <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={beach} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Luxury Beach Resort</span><br />
        <span className="text-sm font-light">MALDIVES</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={ocean} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Oceanbay Resort</span><br />
        <span className="text-sm font-light">New York</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl ">
        <div>
        <Image className="w-[385px] h-[188px]" src={rectangle} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Banana Island</span><br />
        <span className="text-sm font-light">Lagos</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular hotels on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
 </div>
 <div className="flex items-center ml-12 mt-12">
    <span className="text-2xl font-bold">Featured Flights</span>
    <Image className="w-[69px] h-[61px] ml-4" src={flight} alt=""/>
 </div>
 <div className='flex py-12'>
 <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={newyork} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">New York to London</span><br />
        <span className="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={dubai} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Dubai to Tokyo</span><br />
        <span className="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>

    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl ">
        <div>
        <Image className="w-[385px] h-[188px]" src={rome} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Paris to Rome</span><br/>
        <span className="text-sm font-light">Departure 21/3/25 10:00AM</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular flights on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
 </div>

 <div className="flex items-center ml-12 mt-12">
    <span className="text-2xl font-bold">Upcoming Events</span>
    <Image className="w-[69px] h-[61px] ml-4" src={event} alt=""/>
 </div>
 <div className='flex py-12'>
 <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={festive} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Summer Music Festival</span><br />
        <span className="text-sm font-light">Lagos</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular events on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl">
        <div>
        <Image className="w-[385px] h-[188px]" src={hangout} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Digital natives Hangout</span><br />
        <span className="text-sm font-light">MALDIVES</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular events on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] mr-6 rounded-xl">Book now</button>
        </div>
    </div>
    </div>
    <div className="w-[385px] h-[373px] border border-blue-200 ml-12 rounded-xl ">
        <div>
        <Image className="w-[385px] h-[188px]" src={conference} alt=""/>
    </div>
    <div className="ml-6 mt-3">
        <span className="font-bold">Tech conference</span><br />
        <span className="text-sm font-light">Toronto</span><br />
        <span className="text-sm font-light">Enjoy one of the most popular events on our radar</span>
        <div className="flex justify-between mt-8">
            <span className="text-l font-bold">$256/night</span>
            <button className="bg-black text-white font-bold w-[120px] h-[41px] rounded-xl mr-6">Book now</button>
        </div>
    </div>
    </div>
 </div>
    </>
  )
}

export default Places
