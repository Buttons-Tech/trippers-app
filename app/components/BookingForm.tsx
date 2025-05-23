import React from 'react'

const BookingForm = () => {
  return (
    <>
        <div>
            
            <form className='mt-8 space-y-6'>
                <div>
                    <label htmlFor="name" className='block text-sm font-medium text-gray-700'>Name</label>
                    <input type="text" id="name" name="name" required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>
                <div>
                    <label htmlFor="email" className='block text-sm font-medium text-gray-700'>Email</label>
                    <input type="email" id="email" name="email" required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>
                <div>
                    <label htmlFor="date" className='block text-sm font-medium text-gray-700'>Date</label>
                    <input type="date" id="date" name="date" required className='mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500'/>
                </div>
                <button type="submit" className='w-full py-2 px-4 bg-blue-600 text-white rounded-md hover:bg-blue-700'>Book Now</button>
            </form>
        </div>
    </>
  )
}

export default BookingForm
