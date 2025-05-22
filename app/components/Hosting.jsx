// import React from 'react'
import girls from '../../public/img/mohau.png'
import findtrip from '../../public/img/findurtrip.png'
import image1 from '../../public/img/image16.png'
import fun from '../../public/img/Havefun.png'
import Image from 'next/image'
import Link from "next/link";

const Hosting = () => {
  return (
    <>
    <div className="w-full h-[429px] bg-[#E8E4E4] relative flex items-center mt-2">
    <div>
        <Image className="w-[488.94px] h-[326px] ml-8" src={girls} alt=""/>
    </div>
    <div className="ml-12 flex-col absolute top-10 right-60">
        <span className="font-bold text-orange-500 text-4xl">Host Your Events with Trippers</span><br />
        <span className="font-semibold py-10 text-2xl">Weather you are organizing a small meetup or</span> <br /> <span className='font-semibold py-10 ml-3 text-2xl'>a large conference, our platform provides all</span> <br /> <span className='font-semibold py-10 text-2xl ml-12'>the tools you need for successful event</span> <br /> <span className='font-semibold py-10 text-2xl ml-45'>management</span><br />
        <Link href='/lol'>
        <button className="mt-20 bg-orange-500 w-[250px] h-[73px] text-black rounded-full font-bold ml-35">LEARN MORE</button>
        </Link>
    </div>
</div>
<div className='w-full h-[346px] bg-gradient-to-r from-blue-200 to-orange-200 relative flex'>
<div className="w-[307.46px] h-[140.67px] border border-[#8D8A8A] bg-white flex rounded-3xl absolute top-20 left-15">
        <div>
            <Image className="w-[88.22px] h-[88.22px] ml-3 mt-5" src={findtrip} alt=""/>
        </div>
        <div className="flex-col ml-8 mt-5">
            <span className="w-[138px] h-[25px] font-bold">Find your Trip</span><br />
            <span className="text-sm font-light text-gray-500">Explore destinations and <br /> curated experiences.</span>
        </div>
    </div>
    <span className="font-bold text-5xl absolute top-15 left-120" >HOW IT WORKS</span>
    <div className="w-[307.46px] h-[140.67px] border border-[#8D8A8A] bg-white flex rounded-3xl absolute top-40 left-125">
        <div>
            <Image className="w-[88.22px] h-[88.22px] ml-3 mt-5" src={image1} alt=""/>
        </div>
        <div className="flex-col ml-8 mt-5">
            <span className="w-[138px] h-[25px] font-bold">Book with Ease</span><br />
            <span className="text-sm font-light text-gray-500">Secure your spot in just a <br /> few clicks.</span>
        </div>
    </div>
    <div className="w-[307.46px] h-[140.67px] border border-[#8D8A8A] bg-white flex rounded-3xl absolute top-20 right-15">
        <div>
            <Image className="w-[88.22px] h-[88.22px] ml-3 mt-5" src={fun} alt=""/>
        </div>
        <div className="flex-col ml-8 mt-5">
            <span className="w-[138px] h-[25px] font-bold">Enjoy & Explore</span><br />
            <span className="text-sm font-light text-gray-500">Travel stress-free with our <br />seamless planning.</span>
        </div>
        
    </div>
</div>
    </>
  )
}

export default Hosting
