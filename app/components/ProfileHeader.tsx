import Image from 'next/image'
import ellipse from "../../public/img/Ellipse-29.png";
import location from "../../public/img/Location.png";
import create from "../../public/img/Create.png";

const ProfileHeader = () => {
  return (
    <>
        <div className="w-[1094px] h-[281px] bg-[#FF3D0026] absolute top-[50px] rounded-3xl left-30">
          <Image
            src={ellipse}
            className="w-[159px] h-[156px] absolute top-[25px] left-8"
            alt=""
          />
          <span className="font-bold text-4xl absolute top-5 left-55">
            James Okorie
          </span>
          <span className="text-2xl text-gray-500 absolute top-14 left-55">
            @JamesO19
          </span>
          <span className="text-3xl text-gray-500 font-semibold absolute top-24 left-55">
            Adventure seeker / Culture enthusiast / Exploring <br />
            one destination at a time. Let’s make memories <br />
            around the world!
          </span>
          <Image
            src={location}
            className="w-[27px] h-[27px] absolute bottom-10 left-55"
            alt=""
          />
          <span className="text-2xl text-gray-500 absolute bottom-10 left-62">
            Lagos, Nigeria
          </span>

          <div>
            <Image
              src={create}
              className="w-[33px] h-[33px] top-6 absolute right-40"
              alt=""
            />
            <span className="absolute top-6 right-9 text-2xl">
              Edit Profile
            </span>
          </div>
        </div>
    </>
  )
}

export default ProfileHeader
