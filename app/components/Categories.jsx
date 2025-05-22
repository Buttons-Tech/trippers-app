// import React from 'react'
import money from '../../public/img/Money.png'
import friends from '../../public/img/Friends.png'
import team from '../../public/img/Virtualwork.png'
import rocket from '../../public/img/Rocketflying.png'
import Image from 'next/image'


const Categories = () => {
  return (
    <>
    <div className="flex py-12 ml-13">
        <div className="w-[247px] h-[184px] border border-blue-200 shadow px-2 ml-12 rounded-xl">
            <div>
            <Image className="w-[82px] h-[82px]" src={money} alt=""/>
        </div>
        <div>
            <span className="font-bold">Smart Commission</span><br />
            <span className="text-sm font-light">Automated commission structure for all bookings with transparent pricing</span>
        </div>
        </div>
        <div className="w-[247px] h-[184px] border border-blue-200 shadow px-2 ml-12 rounded-xl">
            <div>
            <Image className="w-[101px] h-[81px]" src={friends} alt=""/>
        </div>
        <div>
            <span className="font-bold">Team Events</span><br />
            <span className="text-sm font-light">Custom team bonding activities and coporate events  plannign services </span>
        </div>
        </div>
        <div className="w-[247px] h-[184px] border border-blue-200 shadow px-2 ml-12 rounded-xl ">
            <div>
            <Image className="w-[94px] h-[75px]" src={team} alt=""/>
        </div>
        <div>
            <span className="font-bold">Local Tours</span><br />
            <span className="text-sm font-light">Connect with verified local tour guides for authentic experiences</span>
        </div>
        </div>
        <div className="w-[247px] h-[184px] border border-blue-200 shadow px-2 ml-12 rounded-xl ">
            <div>
            <Image className="w-[78px] h-[72px]" src={rocket} alt=""/>
        </div>
        <div>
            <span className="font-bold">Event Hosting</span><br />
            <span className="text-sm font-light">Host and manage your events with our comprehensive hosting system</span>
        </div>
        </div>
    </div>
    </>
  
  )
}

export default Categories
