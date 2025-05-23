import React from 'react'
import BookingForm from '../components/BookingForm'

const Bookings = () => {
  return (
    <>
    <div className='bg-[url("/img/bookings_bg.jpg")] bg-cover bg-center h-screen flex items-center justify-center'>
      <div className='bg-white bg-opacity-80 p-10 rounded-lg shadow-lg'>
        <h1 className='text-4xl font-bold text-center'>Bookings</h1>
        <p className='mt-4 text-center'>Manage your bookings and reservations here.</p>
        <BookingForm/>

    </div>
    </div>
    </>
  )
}

export default Bookings
