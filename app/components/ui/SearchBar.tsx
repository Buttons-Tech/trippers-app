import React from 'react'

const SearchBar = () => {
  return (
    <>
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
  )
}

export default SearchBar
