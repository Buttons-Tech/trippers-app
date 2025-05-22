// import React from 'react'
import man from '../../public/img/Youngwoman.png'
import google from '../../public/img/GoogleIcon.png'
import tripers from '../../public/img/tripperslogo1.png'
import trips from '../../public/img/tripperslogo2.png'
import contact from '../../public/img/Contact.png'
import Image from 'next/image'
// import { GoogleLogin } from '@react-oauth/google';


const Google = () => {
  return (
   <>
        <div>
            <Image className="w-[1280px] h-[832px] relative" src={man} alt=""/>
            <div className="w-[562px] h-[851px] bg-white absolute top-0 right-17">
                <div className="flex relative">
                        <Image className="w-[46px] h-[46px] absolute top-[72px] left-35" src={google} alt=""/>
                        <span className="absolute top-[80px] left-55 text-xl">Sign in with Google</span>
                        <span className="w-[640px] h-[0px] absolute top-[133px] border-t border-gray-400"></span>
                        <Image className="w-[148px] h-[62px] absolute top-[152px] right-55" src={tripers} alt=""/>
                    <Image className="w-[201px] absolute right-15 top-[170px] h-[39px]" src={trips} alt=""/>
                    <h1 className="absolute top-[232px] text-4xl left-45">Choose an account</h1>
                    <p className="absolute top-[292px] text-xl left-45">to continue to Trippers</p>
                </div>
                <div>
                    <button className="w-[46px] h-[46px] bg-[#7F0FAB] rounded-full absolute top-[366px] left-43 text-xl text-white">C</button>
                    <span className="absolute top-[360px] text-2xl left-56">Account Name</span>
                    <span className="absolute top-[391px] text-gray-500 text-opacity-25 left-56">email@gmail.com</span>
                    <span className="w-[321px] h-[0px] absolute top-[440px] left-43 border-t border-gray-400"></span>
                </div>
                <div>
                    <button className="w-[46px] h-[46px] bg-[#7F0FAB] rounded-full absolute top-[480px] left-43 text-xl text-white">C</button>
                    <span className="absolute top-[474px] text-2xl left-56">Account Name</span>
                    <span className="absolute top-[505px] text-gray-500 text-opacity-25 left-56">email@gmail.com</span>
                    <span className="w-[321px] h-[0px] absolute top-[554px] left-43 border-t border-gray-400"></span>
                </div>
                <div>
                    <Image className="absolute top-[576px] left-43 w-[43px] h-[43px]" src={contact} alt=""/>
                    <span className="absolute top-[582px] left-56 text-xl">Use another account</span>
                    <span className="w-[321px] h-[0px] absolute top-[651px] left-43 border-t border-gray-400"></span>
                </div>
                <div>
                    <span className="absolute top-[710px] text-gray-500 text-opacity-75 left-40 text-sm">To continue, Google will share your name, email address, <br />
                        language preference, and profile picture with Trippers. Before <br />using this app, you can review Trippers <span class="text-blue-300">privacy policy</span> and <br /><span class="text-blue-300">terms of services</span>.
                        </span>
                </div>
            </div>
        </div>
   </>
  )
}

export default Google
