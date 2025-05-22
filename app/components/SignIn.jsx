// "use client"
// import React from 'react'
// import {useSession} from 'next-auth/react';
import woman from '../../public/img/Youngwoman.png'
import tripper3 from '../../public/img/tripperslogo1.png'
import tripper4 from '../../public/img/tripperslogo2.png'
import sign1 from '../../public/img/at-sign.png'
import lock from '../../public/img/lock.png'
import eye from '../../public/img/eye-off.png'
import google from '../../public/img/GoogleIcon.png'
import Image from 'next/image'


const SignIn = () => {
  // const { data: session } = useSession();

  // if (session) {
  //   return (
  //     <div>
  //       <h1>Welcome, {session.user.name}</h1>
  //       <p>Email: {session.user.email}</p>
  //     </div>
  //   );
  // }else {
  //   return (
  //     <div>
  //       <h1>Please sign in</h1>
  //     </div>
  //   );
  // }
  return (
    <>
    <div>
    <Image className="w-[1280px] h-[832px] relative" src={woman} alt=""/>
    <div className='w-[562px] h-[832px] bg-white absolute top-0 right-17'>
    <div className="flex relative">
            <Image className="w-[181.07px] h-[72px] absolute top-5 left-20" src={tripper3} alt=""/>
        <Image className="w-[245.59px] absolute left-50 top-10 h-[46px]" src={tripper4} alt=""/>
        <span className="font-bold text-3xl absolute top-[168px] left-50">Welcome Back</span>
       <form action="">
        <div className="">
            <input type="text" placeholder="Email Address" className="border border-gray-400 shadow-xl px-12 w-[509px] h-[51px] rounded-2xl absolute top-[247px] right-5 text-gray-700 font-bold"/>
            <Image className="w-[24px] h-[24px] absolute top-[260px] left-12 " src={sign1} alt=""/>
            <input type="text" placeholder="Password" className="border border-gray-400 shadow-xl px-12 w-[509px] h-[51px] rounded-2xl absolute top-[333px] right-5 text-gray-700 font-bold"/>
            <Image className="w-[24px] h-[24px] absolute top-[343px] left-12" src={lock} alt=""/>
            <Image className="w-[24px] h-[24px] absolute top-[343px] right-12" src={eye} alt=""/>
            <div>
                <input type="checkbox" className="absolute top-[423px] left-10 w-[30px] h-[29px]"/>
                <span className="absolute top-[427px] left-25">Remember me</span>
                <span className="text-green-400 absolute top-[423px] right-[12px]">Forgot password?</span>
            </div>
            <button className="w-[509px] h-[51px] bg-[#FF3D00] text-white rounded-2xl absolute top-[491px] left-[37px]">log in</button>
            <button className="w-[509px] h-[51px] bg-[#FFFFFF] text-black rounded-2xl absolute top-[577px] left-[37px] border border-gray-400">Log in with Google</button>
            <Image className="w-[24px] h-[24px] absolute top-[590px] left-48" src={google} alt=""/>
            <span className="absolute top-[749px] left-40">Need an account?<span className="text-green-400"> Sign up</span></span>
        </div>
       </form>
        </div>
    </div>
    </div>
    </>
  )
}

export default SignIn
