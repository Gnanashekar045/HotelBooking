import React, { useState } from 'react'
import Title from '../components/Title'
import { assets, userBookingsDummyData } from '../assets/assets'

const MyBooking = () => {
    const [booking, setBookings] = useState(userBookingsDummyData)
  return (
    <div className='py-28 md:pb-35 md:pt-32 px-4 md:px-16 lg:px-24 xl:px-32'>
        <Title title={"My Booking"} subTitle={"Easily manage your post and current, and upcoming hotel reservations in one pleace. Plan your trips seamlessly with just a few Clicks"}
        align="left"/>
        <div className='max-w-6xl mt-8 w-full text-gray-800'>
            <div className='hidden md:grid md:grid-cols-[3fr_2fr_1fr] border-b border-gray-300 font-medium text-base py-3 '>
                <div className='w-1/3'>Hotels</div>
                <div className='w-1/3'>Dat & Timing</div>
                <div className='w-1/3'>Payment</div>
            </div>
            {booking.map((booking)=>(
                <div key={booking._id} className='grid grid-cols-1 md:grid-cols-[3fr_2fr_1fr] w-full border-b border-gray-300 py-6 first:border-t'>
                    {/*Hotel Detailes*/}
                    <div className='flec flex-col md:flex-row'>
                        <img src={booking.room.images[0]} alt="hotel img" 
                        className='mid-md:w-44 rounded shadow object-cover'/>
                        <div className='flex flex-col gap-1.5 max-md:mt-3 min-md:ml-4'>
                            <p className='font-palyfair text-2xl'>{booking.hotel.name} <span className='font-inter text-sm'>{booking.room.roomType}</span></p>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <img src={assets.locationFilledIcon} alt="location-icon" />
                                <span>{booking.hotel.address}</span>
                        </div>
                        <div className='flex items-center gap-1 text-sm text-gray-500'>
                                <img src={assets.guestsIcon} alt="gusts-icon" />
                                <span>{booking.guests}</span>
                        </div>
                        <p className='text-base'>Totel: ${booking.totalPrice}</p>
                        </div>
                    </div>
                    {/*Date & Timing*/}
                    <div></div>
                    {/*Payment Status*/}
                </div>
            ))}
        </div>
    </div>
  )
}

export default MyBooking