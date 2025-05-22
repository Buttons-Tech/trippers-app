// import React from 'react'
import phone from '../../public/img/phone.png'
import mail from '../../public/img/mail1.png'
import point from '../../public/img/point.png'
import facebook from '../../public/img/FacebookLogo.png'
import twitter from '../../public/img/twitter.png'
import instra from '../../public/img/insta.png'
import indeed from '../../public/img/inde.png'
import Image from 'next/image'

const Contactus = () => {
  return (
   <>
            <div className="w-[1280px] h-[210px] gap-20 bg-[#FFA78A] relative">
        <div className="flex">
            <Image src={phone} className="absolute top-8 left-15 h-[95.87px] w-[83.87px] " />
            <div>
                <span className="text-3xl text-black font-bold absolute top-6 left-35">CALL US</span><br />
                <span className="text-black absolute bottom-15 left-35 text-1xl">08100657538 <br />08058094449</span>
            </div>
        </div>
                <Image src={mail} className="h-[69px] w-[95px] absolute top-6 left-125"/>
                <span className="text-3xl text-black absolute top-6 left-160 font-bold">MAIL US</span><br />
                <br />
                <span className="text-black absolute bottom-15 left-160 text-1xl">trippers@travel.com <br />enquiries@trippers.com</span>
        <div className="relative">
            <div className="flex">
                    <Image src={point} className="h-[48.38px] w-[48.38px] absolute bottom-0 right-68 "/>
                    <span className=" text-black font-bold text-3xl absolute right-25 bottom-1">FOLLOW US</span>
            </div>
            <div className="absolute top-8 right-15 gap-8 flex flex-row ">
                    <Image src={facebook} className="h-[50px] w-[50px]"/>
                    <Image src={twitter} className="rounded-3xl h-[50px] w-[50px]"/>
                    <Image src={instra} className="h-[50px] w-[50px]"/>
                    <Image src={indeed} className=" h-[50px] w-[50px]"/>
            </div>
        </div>
    </div>
   </>
  )
}

export default Contactus
