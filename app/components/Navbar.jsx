/** @format */

// import React from 'react'
import Image from 'next/image';
import trippers1 from '../../public/img/tripperslogo1.png'
import trippers2 from '../../public/img/tripperslogo2.png'
// import searchicon from '../img/searchicon.png'
import Link from "next/link";

const Navbar = () => {
  const style = {
    height: "3rem",
    width: "5rem",
  };
  const logo1 = {
    height: "3rem",
    width: "7rem",
  };

  return (
    <>
      <div className="flex   justify-between bg-white shadow-md w-full h-[70px] px-5">
        <div className="flex space-x-[-77px] relative  ">
          <Image className='w-1/3' src={trippers1} alt="" />
          <Image className='h-[3rem] mt-6' src={trippers2} alt=""/>
        </div>
        <div className="space-x-10 flex items-center my-6">
          <Link href="/hotels">
            <span>Hotels</span>
          </Link>
          <Link href="/flight">
            <span>Flights</span>
          </Link>
          <Link href="/event">
            <span>Events</span>
          </Link>
          <Link href="/tour">
            <span>Tourism</span>
          </Link>
          <Link href="/account">
            <span>Account</span>
          </Link>
          <Link href="/booking">
            <button className="w-[116px] h-[41px] bg-[#FFA500] font-bold text-white ml-30 rounded-full">
              Book now
            </button>
          </Link>
        </div>
      </div>
        <div className="mt-6 m-auto border rounded-full flex justify-between shadow-md border-[#00000040] w-[737px] h-[50px]">
          <input
            className=" font-semibold w-full  pl-10 text-gray-500"
            type="text" style={{outline: "none"}}
            placeholder="LOCATION"
          />
          <button className="  bg-[#D9D9D9] rounded-r-full hover:cursor-pointer hover:bg-blue-500 hover:text-white  left-232 w-[156px]  font-semibold">
            Search
          </button>
          {/* <img className="w-[27.09px] h-[27.09px] absolute top-37 left-237" src={searchicon} alt=""/> */}
        </div>
    </>
  );
};

export default Navbar;
