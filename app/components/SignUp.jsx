"use client"
import { useState } from 'next-auth/react';
import woman from '../../public/img/Youngwoman.png'
import tripper5 from '../../public/img/tripperslogo1.png'
import tripper6 from '../../public/img/tripperslogo2.png'
import sign1 from '../../public/img/at-sign.png'
import lock from '../../public/img/lock.png'
import eye from '../../public/img/eye-off.png'
import google from '../../public/img/GoogleIcon.png'
import contact from '../../public/img/Contact.png'   
import Image from 'next/image'
// import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import Link  from 'next/link'
import axios from 'axios'
// import { SessionProvider } from 'next-auth/react';





function SignUp() {
    // const handleLoginSuccess = (response) => {
    //     console.log('Login Success:', response);
    //   };

    //   const handleLoginError = (error) => {
    //     console.error('Login Error:', error);
    //   };
    // const [name, setName] = useState("");
    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");
    // const [user, setUser] = useState(null);  
  


    const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
            name,
            email,
            password
        };
        // console.log(user);
        axios.post(process.env.API_KEY, user)
            .then(response => { console.log(response.data); })

            .catch(error => { console.log(error); });
        setUser(response.data);
       


    };

    return (
        <>
            
            <div className=''>
                <Image className="w-[1280px] h-[832px] relative" src={woman} alt="" />
                <div className='w-[562px] h-[832px] bg-white absolute top-[5rem] right-17 '>
                    <div className="flex relative">
                        <Image className="w-[181.07px] h-[72px] absolute top-5 left-20" src={tripper5} alt="" />
                        <Image className="w-[245.59px] absolute left-50 top-10 h-[46px]" src={tripper6} alt="" />
                        <span className="font-bold text-3xl absolute top-[168px] left-5">Create Account</span>

                        <form onSubmit={handleSubmit}>
                            <input type="text" name='name' placeholder="Full Name" className="border border-gray-400 shadow-xl px-12 w-[509px] h-[51px] rounded-2xl absolute top-[236px] left-5 text-gray-700 font-bold" onChange={(e) => {
                                setName(e.target.value);
                            } } />
                            <Image className="w-[24px] h-[24px] absolute top-[248px] left-10 " src={contact} alt="" />
                            <input type="text" name='email' placeholder="Email Address" className="border border-gray-400 shadow-xl px-12 w-[509px] h-[51px] rounded-2xl absolute top-[307px] left-5 text-gray-700 font-bold" onChange={(e) => {
                                setEmail(e.target.value);
                            } } />
                            <Image className="w-[24px] h-[24px] absolute top-[318px] left-10 " src={sign1} alt="" />
                            <input type="text" name='password' placeholder="Password" className="border border-gray-400 shadow-xl px-12 w-[509px] h-[51px] rounded-2xl absolute top-[378px] left-5 text-gray-700 font-bold" onChange={(e) => {
                                setPassword(e.target.value);
                            } } />
                            <Image className="w-[24px] h-[24px] absolute top-[390px] left-10" src={lock} alt="" />
                            <Image className="w-[24px] h-[24px] absolute top-[390px] right-12" src={eye} alt="" />
                            <div>
                                {/* <input type="checkbox" className="absolute top-[449px] left-10 w-[47px] h-[47px]"/> */}
                                <span className="absolute top-[459px] left-25 text-xl">I agree with the <span className="text-green-400">Terms</span> and <span className="text-green-400 ">Privacy</span></span>
                            </div>
                            <div>
                                <button className="w-[509px] h-[51px] bg-[#FF3D00] text-white rounded-2xl absolute top-[538px] left-5">Sign up</button>
                                {/* <GoogleLogin
onSuccess={handleLoginSuccess}
onError={handleLoginError}
/>  */}
                                <button className="w-[509px] h-[51px] bg-[#FFFFFF] text-black rounded-2xl absolute top-[609px] left-5 border border-gray-400">Continue with Google</button>
                                <Image className="w-[24px] h-[24px] absolute top-[622px] left-42" src={google} alt="" />
                                <span className="text-xl  absolute top-[751px] left-30">Already have an account?</span>
                                <span className="text-green-400 text-xl  absolute top-[751px] left-88">Sign in</span>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
            {/* </GoogleOAuthProvider> */}
            
        </>
    );
}

export default SignUp
