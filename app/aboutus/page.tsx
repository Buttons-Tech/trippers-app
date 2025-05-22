// import React from 'react'
import triplogo1 from '../../public/img/triplogo1.png'
import we from '../../public/img/whowe.png'
import mission from '../../public/img/mission.png'
import vision from '../../public/img/vision.png'
import man from '../../public/img/young.png'
import Image from 'next/image'

const Aboutus = () => {
  return (
    <>
        <div className='w-full h-[968px] relative' style={{backgroundImage: `url('image/niklas.png')`}}>
            <div className="justify-center absolute top-12  text-center left-1/3">
                <span className="font-bold text-2xl justify-center ">ABOUT US</span>
                <Image className="w-[250px] h-[88px] m-auto" src={triplogo1} alt=""/>
                <span className="font-bold text-2xl justify-center text-orange-600">Where Life Meets Connection.</span>
            </div>
            <div className="w-full h-[585px] absolute bottom-0 flex bg-[#FF6600B2]">
            <div className="ml-12 relative  top-6 left-4">
                <Image className="ml-8 [121.97px] h-[121.97px]" src={we} alt=""/>
                <span className="font-bold text-white text-2xl">WHO WE ARE</span> <br />
                <span className="text-l text-white font-bold">Founded by Bidaymi AMA, <br /> Trippers is a dynamic and user- <br />friendly web app designed to <br /> expand our reach and simplify <br /> access to our services. This <br /> innovative platform enhances <br /> user engagement, streamlines <br /> service delivery, and <br />strengthens connections with <br />our audience—driving our <br />mission and impact to new <br />heights.</span>
            </div>
            <div className="ml-60 relative top-10 right-10">
                <Image className="ml-12 [89.51px] h-[89.51px]" src={mission} alt=""/>
                <span className="font-bold text-white text-2xl">OUR MISSION</span> <br />
                <ul className="text-l font-bold">
                    <li className="list-disc">To Simplify travel planning and <br />booking processes.</li>
                    <li className="list-disc">Offer curated travel and event <br />options tailored to your <br/>preferences. <br/></li>
                    <li className="list-disc">Foster deeper connections <br />between travelers and <br />destinations for memorable <br />experiences. <br /></li>
                    <li className="list-disc">Promote convenience, <br />accessibility, and satisfaction in <br />all aspects of tourism and event <br />management.</li>
                </ul>
            </div>
            <div>
                <div className="ml-50 relative top-10 right-2">
                    <Image className="ml-2 [89.51px] h-[89.51px]" src={vision} alt=""/>
                    <span className="font-bold text-white text-2xl">OUR VISION</span> <br />
                    <span className="text-l text-white font-bold">Our Vision  is to revolutionize <br />the tourism industry by <br />providing a one-stop digital <br />platform that seamlessly <br />integrates tourism <br />experiences, hotel <br />reservations, flight bookings, <br />event ticketing, and <br />personalized customer-to- <br />tourist services.</span>
                </div>
            </div>
            <button className="text-2xl text-white bg-black rounded-full w-[288px] h-[56px] font-bold absolute bottom-10 left-40">How it works</button>
            <button className="text-xl text-white bg-black rounded-full font-bold w-[267px] h-[56px] absolute bottom-10 right-90" >Start Planning Your Trip</button>
            </div>
        </div>
        <div className="w-full h-[503px] bg-[#D9D9D9] flex relative">
            <div className=" text-center mt-12">
                <h1 className="font-bold text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-50">Your <span className="font-bold text-5xl text-orange-400">Journey</span> Starts with <span className="font-bold text-5xl text-orange-400">Clarity!</span></h1>
                <p className="font-bold text-3xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-40 text-orange-400 mt-7 ">Browse our FAQ section for essential travel <br />details, policies, and tips."</p>
            </div>
            <div className="justify-end">
                <Image className="w-[261px] h-[433px] absolute right-30" src={man} alt=""/>
            </div>
            <div className="absolute bottom-35 left-100">
                <button className="w-[412px] h-[85px] bg-blue-700 rounded-full text-white font-bold text-3xl">Explore Our FAQs!</button>
            </div>
        </div>
    </>
  )
}

export default Aboutus
