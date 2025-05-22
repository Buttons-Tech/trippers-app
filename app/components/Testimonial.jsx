// import React from 'react'
import Image from 'next/image'
import guy from '../../public/img/guy.png'
import lady from '../../public/img/lady.png'

const Testimonial = () => {
  return (
  <>
         <div className="w-full h-[870px] bg-[#F5AC65] relative ">
    <div className="w-[1197px] h-[512px] bg-[#FCC1AE]  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl rotate-353"></div>
    <div className="space-y-4 absolute top-6 left-70">
        <h1 className="font-bold text-5xl text-gray-800"> What Our Travelers Are Saying</h1>
        <p className="text-xl text-center">Your adventure awaits with Trippers -where every journey is personal!</p>
    </div>
    <div className="">
        <div className="w-[1197px] h-[512px] bg-white  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-4xl">
            <span className="w-[158px] absolute top-30 left-22 h-[171px] border bg-white rounded-br-4xl"></span>
            <span className="w-[158px] absolute top-15 left-8 h-[171px] border bg-white rounded-tl-4xl"></span>
            <div className="w-[172px] absolute top-21 left-13 h-[181px] rounded-3xl  "><Image src={lady} className="h-[181px] w-[172px]"/></div>
            <h1 className="text-xl font-bold absolute left-65 top-13">Seamless Adventure Planning</h1> <br />
            <p className="absolute top-20 left-65">“Trippers revolutionized my travel <br />experience. I could easily book <br/>personalized tours, find amazing <br />events, and secure comfortable <br />accommodations - all without <br />hassle!” <br />
                <br />
                
                -  Alex Smith</p>
        </div>
        <div>
                <span className="w-[158px] absolute top-76 right-105 h-[171px] border bg-white rounded-br-4xl"></span>
                <span className="w-[158px] absolute top-60 right-120 h-[171px] border bg-white rounded-tl-4xl"></span>
                <div className="w-[172px] absolute top-66 right-111 h-[181px] rounded-3xl bg-[#CFE2F3] "><Image src={guy} className="h-[181px] w-[150px] pl-8"/></div>
                <h1 className="text-xl font-bold absolute right-28 top-61">Effortless Travel, Unforgettable <br /> Adventures!</h1> <br />
                <p className="absolute top-75 right-40">“Trippers made my travel <br /> experience seamless! From finding <br />the perfect destination to <br /> connecting with fellow travelers, <br /> everything was effortless. I highly <br /> recommend it to anyone who <br />loves adventure! ”
                    <br />
                    <br />
                    -  Victor Adeyem</p>
        </div>
        </div>
        
    </div>
  </>
  )
}

export default Testimonial
