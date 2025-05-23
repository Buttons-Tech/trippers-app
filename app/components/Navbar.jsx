/** @format */

// import React from 'react'
import Image from 'next/image';
import trippers1 from '../../public/img/tripperslogo1.png'
import trippers2 from '../../public/img/tripperslogo2.png'
// import searchicon from '../img/searchicon.png'
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { MdModeOfTravel } from "react-icons/md";
import { MdFlight } from "react-icons/md";
import { MdEventAvailable } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import SearchBar from './ui/SearchBar';

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
        <div className="space-x-4 flex items-center my-6">
          <div className='p-3 flex items-center space-x-2 hover:cursor-pointer  hover:bg-[#fcdea6] hover:text-[#454694] '>

            <FaHome />
          <Link href="/">
            <span>HOME</span>
          </Link>
          </div>
          <div className='p-3 flex items-center space-x-2 hover:cursor-pointer hover:bg-[#fcdea6] hover:text-[#454694] '>
            <MdModeOfTravel />

          <Link href="/trips">
            <span>TRIPS</span>
          </Link>
          </div>
          <div className='p-3 flex items-center space-x-2 hover:cursor-pointer hover:bg-[#fcdea6] hover:text-[#454694] '>
            <MdFlight />

          <Link href="/flights">
            <span>FLIGHTS</span>
          </Link>
          </div>
          <div className='p-3 flex items-center space-x-2 hover:cursor-pointer hover:bg-[#fcdea6] hover:text-[#454694] '>
            <MdEventAvailable />
            
          <Link href="/events">
            <span>EVENTS</span>
          </Link>
          </div>

          <Link href="/users" className='p-4 flex items-center rounded-full space-x-2 hover:cursor-pointer hover:bg-[#fcdea6] hover:text-[#454694] '>
            <FaUser />
          </Link>
          <Link href="/bookings">
            <button className="w-[116px] h-[41px] bg-[#FF3D00] font-bold text-white ml-30 rounded-full hover: cursor-pointer ">
              Book now
            </button>
          </Link>
        </div>
      </div>

       
    </>
  );
};

export default Navbar;
