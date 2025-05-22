/** @format */

// import React from 'react'

import frame from "../../public/img/Frame 427318923.png";
import frame1 from "../../public/img/Frame 427318924.png";
import frame2 from "../../public/img/Frame 427318925.png";
import indo from "../../public/img/Indonesia1.png";
import vector from "../../public/img/Vector.png";
import japan from "../../public/img/Japan2.png";
import vector1 from "../../public/img/Vector.png";
import lekki from "../../public/img/Lekki3.png";
import vector2 from "../../public/img/Vector.png";
import image from "../../public/img/image.png";
import vector3 from "../../public/img/Vector.png";
import v14 from "../../public/img/VI4.png";
import vector4 from "../../public/img/Vector.png";
import abeokuta from "../../public/img/Abeokuta.png";
import vector5 from "../../public/img/Vector.png";
import Image from "next/image";
import ProfileHeader from "../components/ProfileHeader";
// import { useDisclosure } from '@mantine/hooks';
// import { Modal, Button } from '@mantine/core';

const Userprofile = async () => {
  //  const [opened, { open, close }] = useDisclosure(false);
  // const [modalOpened, setModalOpened] = useState(false);

  const data = await fetch("https://api.escuelajs.co/api/v1/users");
  const users = await data.json();
  // console.log(users)
  return (
    <>
      <div className="w-[1280px] h-[1797px] bg-[#FFFFFF] relative">
        <ProfileHeader />
        
        
        <div className="w-[347px] h-[521px] absolute top-[365px] bg-[#F4F3F3] border border-[#DFDFDF] left-30 rounded-3xl">
          <span className="font-bold text-4xl absolute top-10 left-6">
            Travel Preference
          </span>
          <span className="font-semibold text-gray-400 text-2xl absolute top-25 left-6">
            Trip Type
          </span>
          <div className="flex flex-row absolute top-35 left-6 gap-2 text-gray-500">
            <button className="w-[104px] h-[29px] border border-gray-400 rounded-lg">
              Adventure
            </button>
            <button className="w-[87px] h-[29px] border border-gray-400 rounded-lg">
              Beach
            </button>
            <button className="w-[104px] h-[29px] border border-gray-400 rounded-lg">
              Cultural
            </button>
            <div className="flex flex-row absolute top-12 gap-2 text-gray-500">
              <button className="w-[104px] h-[29px] border border-gray-400 rounded-lg">
                Restuarants
              </button>
              <button className="w-[104px] h-[29px] border border-gray-400 rounded-lg">
                Road Trip
              </button>
            </div>
            <span className="text-gray-400 font-semibold text-2xl absolute top-22">
              Accommodation
            </span>
            <div className="flex flex-row absolute top-34 gap-2 text-gray-500">
              <button className="w-[80px] h-[29px] border border-gray-400 rounded-lg">
                Hotels
              </button>
              <button className="w-[104px] h-[29px] border border-gray-400 rounded-lg">
                Local Stays
              </button>
              <button className="w-[75px] h-[29px] border border-gray-400 rounded-lg">
                Hostels
              </button>
            </div>
            <span className="text-gray-400 font-semibold text-2xl absolute top-45">
              Activities
            </span>
            <div className="flex flex-row absolute top-56 gap-2 text-gray-500">
              <button className="w-[105px] h-[29px] border border-gray-400 rounded-lg">
                Street Foods
              </button>
              <button className="w-[131px] h-[29px] border border-gray-400 rounded-lg">
                Historical Sites
              </button>
            </div>
            <div className="flex flex-row absolute top-66 gap-2 text-gray-500">
              <button className="w-[83px] h-[29px] border border-gray-400 rounded-lg">
                Museum
              </button>
              <button className="w-[83px] h-[29px] border border-gray-400 rounded-lg">
                Biking
              </button>
              <button className="w-[102px] h-[29px] border border-gray-400 rounded-lg">
                Swimming
              </button>
            </div>
            <div className="flex flex-row absolute top-76 gap-2 text-gray-500">
              <button className="w-[102px] h-[29px] border border-gray-400 rounded-lg">
                Camping
              </button>
              <button className="w-[152px] h-[29px] border border-gray-400 rounded-lg">
                Local Restuarants
              </button>
            </div>
          </div>
        </div>
        <div className="w-[686px] h-[228px] border border-[#DFDFDF] rounded-3xl bg-[#F4F3F3] absolute top-[365px] right-25">
          <h1 className="text-4xl absolute top-10 left-15 font-bold">
            Travel Stats
          </h1>
          <div className="flex absolute top-23 left-17 gap-18">
            <Image className="w-[132px] h-[105px]" src={frame} alt="" />
            <Image className="w-[132px] h-[105px]" src={frame1} alt="" />
            <Image className="w-[132px] h-[105px]" src={frame2} alt="" />
          </div>
        </div>
        <div className="absolute top-[912px] left-30 rounded-3xl w-[1094px] h-[92px] bg-[#FEFDFD] border border-[#D9D9D9] ">
          <button className="absolute top-5 left-6 w-[137px] h-[46px] border border-[#555454] rounded-xl font-bold text-gray-600 text-2xl">
            Past Trips
          </button>
          <span className="text-2xl font-bold text-gray-400 absolute top-7 left-50">
            Bookings
          </span>
          <span className="text-2xl font-bold text-gray-400 absolute top-7 left-88">
            My Favorites
          </span>
        </div>
        <h1 className="text-3xl font-semibold absolute top-[1064px] left-30">
          Past Adventures
        </h1>
        <div className="absolute top-[1131px] left-30 flex flex-row gap-15">
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={indo} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 left-2 text-xl text-white">
              Bali, Indonesia
            </span>
            <Image
              src={vector}
              className="w-[18px] h-[18px] absolute left-2 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 left-8">
              October 2024 · 5 days
            </span>
            <span className="absolute bottom-3 font-semibold left-2 text-1xl">
              Explored the rich culture and stunning <br />
              landscapes of Bali, from vibrant <br />
              markets to serene rice terraces
            </span>
          </div>
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={japan} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 left-100 text-xl text-white">
              Kyoto, Japan
            </span>
            <Image
              src={vector1}
              className="w-[18px] h-[18px] absolute left-100 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 left-106">
              June 2024 · 5 days
            </span>
            <span className="absolute bottom-3 font-semibold left-100 text-1xl">
              Emmersed in the tranquil beauty of <br />
              ancient temples, traditional gardens, <br />
              and authentic cultural experiences
            </span>
          </div>
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={lekki} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 right-3 text-xl text-white">
              Lekki Conservation Centre, Lekki
            </span>
            <Image
              src={vector2}
              className="w-[18px] h-[18px] absolute right-75 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 right-20">
              November 2023 · 3 days
            </span>
            <span className="absolute bottom-3 font-semibold right-15 text-1xl">
              Where tranquility meets adventure <br />
              amidst lush landscapes and diverse <br />
              wildlife.
            </span>
          </div>
        </div>
        <div className="absolute top-[1451px] left-30 flex flex-row gap-15">
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={image} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 left-2 text-xl text-white">
              Cactus Restaurant, VI
            </span>
            <Image
              src={vector3}
              className="w-[18px] h-[18px] absolute left-2 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 left-8">
              August 2023 · 1 day
            </span>
            <span className="absolute bottom-2 font-semibold left-2 text-1xl">
              Indulge in a culinary journey where fresh <br />
              ingredients and bold flavors create an <br />
              unforgettable dining experience.
            </span>
          </div>
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={v14} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 left-100 text-xl text-white">
              Alice Garden Restaurant, Ikeja
            </span>
            <Image
              src={vector4}
              className="w-[18px] h-[18px] absolute left-100 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 left-106">
              May 2023 · 1 day
            </span>
            <span className="absolute bottom-3 font-semibold left-100 text-1xl">
              A hidden gem where lush greenery <br />
              and delectable dishes create an <br />
              unforgettable dining experience.
            </span>
          </div>
          <div className="w-[328px] h-[290px] border border-[#D9D9D9] rounded-3xl">
            <Image src={abeokuta} className="w-full h-[173px]" alt="" />
            <span className="font-bold absolute bottom-30 right-25 text-xl text-white">
              Olumo Rock, Abeokuta
            </span>
            <Image
              src={vector5}
              className="w-[18px] h-[18px] absolute right-75 bottom-23"
              alt=""
            />
            <span className="text-gray-500 text-xl absolute bottom-22 right-24">
              February 2023 · 4 days
            </span>
            <span className="absolute bottom-3 font-semibold right-18 text-1xl">
              A natural fortress with a rich past, <br />
              offering panoramic vistas and <br />
              cultural insights.
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Userprofile;
