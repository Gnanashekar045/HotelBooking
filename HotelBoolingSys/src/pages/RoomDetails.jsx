import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { assets, facilityIcons, roomCommonData, roomsDummyData } from '../assets/assets'
import StarRating from '../components/StarRating'

const RoomDetails = () => {
    const {id} = useParams()
    const [room, setRoom] = useState(null)
    const [mainImage, setMainImage] = useState(null)

    useEffect(()=>{
        const room = roomsDummyData.find(room => room._id === id)
        room && setRoom(room)
        room && setMainImage(room.images[0])
    },[])
  return room && (
    <div className='py-28 md:py-35 px-4 md:px-16 lg:px-24 xl:px-32'>
        <div className='flex flex-col md:flex-row items-center gap-2'>
            <h1 className='text-3xl md:text-4xl font-playfaire'>{room.hotel.name} <span className='font-inter text-sm'>{room.roomType}</span></h1>
            <p className='text-xs font-inter py-1.5 text-white bg-gray-500'>20% OFF</p>
        </div>
        {/*start rating*/}
        <div className='flex items-center gap-1 mt-2'>
            <StarRating/>
            <p>200+ reviews</p>
        </div>
        {/*room adress*/}
        <div className='flex items-center gap-1 text-gray-500 pt-2'>
            <img src={assets.locationIcon} alt="location-icon" />
            <span>{room.hotel.address}</span>
        </div>
        {/*room imgaes*/}
        <div className='flex flex-col lg:flex-row mt-6 gap-6'>
            <div className='lg:w-1/2 w-full'>
                <img src={mainImage} alt="Room-image" className='w-full rounded-xl shadow-lg object-cover' />
            </div>
            <div className='grid grid-cols-2 gap-4 lg:w-1/2 w-full'>
                {room?.images.length > 1 && room.images.map((image, index)=>(
                    <img onClick={()=> setMainImage(image)} key={index} src={image} alt="Room Image" 
                    className={`w-full rounded-xl shadow-md object-cover cursor-pointer ${mainImage === image && 'outline-3 outline-orange-500'}`}/>
                ))}
            </div>
        </div>
        {/*room HightLight*/}
        <div className='flex flex-col md:flex-row md:justify-between mt-10'>
            <div className='flex flex-col'>
            <h1 className='text-3xl md:text-4xl font-playfair '>Experience luxury like Never Before</h1>
            <div className='flex flex-wrap items-center mt-3 mb-6 gap-4'>
                {room.amenities.map((item, index)=> (
                    <div key={index} className='flex items-center gap-2 px-3 py-2 rounded-lg bg-gray-100'>
                        <img src={facilityIcons[item]} alt={item} className='w-5 h-5'/>
                        <p className='text-xs'>{item}</p>
                    </div>
                ))}
            </div>
            </div>
            {/*room HightLight*/}
            <p className='text-2xl font-medium '>${room.pricePerNight}/nightg</p>
            <div>
                {/*CheckIn checkOut Form*/}
                <form className='flex flex-col md:flex-row items-start md:items-center
                justify-between bg-white shadow-[0px_0px_20_px_rgba(0,0,0,0,15)] p-6 rounded-xl mx-auto mt-16 max-16 max-w-6xl'>
                    <div className='flex md:flex-row items-start
                    md:items-center gap-4 md:gap-10 text-gray-500'>
                        <div className='flex flex-col'>
                            <label htmlFor="checkInDate">Check-In</label>
                            <input type="date" id='checkInDate' placeholder='Check-In'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                        </div>
                        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                        <div className='flex flex-col'>
                            <label htmlFor="checkOutDate">Check-Out</label>
                            <input type="date" id='checkOutDate' placeholder='Check-Out'
                            className='w-full rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                        </div>
                        <div className='w-px h-15 bg-gray-300/70 max-md:hidden'></div>
                        <div className='flex flex-col'>
                            <label htmlFor="guests">Guests</label>
                            <input type="number" id='guests' placeholder='0'
                            className='max-w-20 rounded border border-gray-300 px-3 py-2 mt-1.5 outline-none' required/>
                        </div>

                    </div>
                    <button type='submit' className='bg-primary hover:bg-primar-dull active:scale-95 transition-all text-white rounded-md 
                    max-md:w-full max-md:mt-6 md:px-25 py-3 md:py-4 text-base cursor-pointer'>
                        Check Availability
                    </button>
                </form>
                {/*comman Specifications*/}
                <div className='mt-25 space-y-4'>
                    {roomCommonData.map((spec, index)=>(
                        <div key={index} className='flex items-start gap-2'>
                            <img src={spec.icon} alt={`${spec.title}-icon`} className='w-6.5' />
                            <div>
                                <p className='text-base'>{spec.title}</p>
                                <p className='text-gray-500'>{spec.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <div className='max-w-3xl border-y border-gray-300 my-15 py-10 text-gray-500'>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maiores vero ipsum, omnis amet, eligendi veritatis unde ut aut minus sed suscipit itaque quos modi illum eum autem fugiat laboriosam. Quaerat cumque ad molestias voluptatibus expedita recusandae deleniti commodi excepturi tenetur, consequuntur eum eius quidem dolore. Quis fugiat non corporis?
                </div>
                 {/*posted by*/}
                 <div className='flex flex-col items-start gap-4'>
                    <div className='flex gap-4'>
                        <img src={room.hotel.owner.image} alt="Host" className='h-14 w-14 md:h-18 md:w-18 rounded-full'/>
                        <div >
                            <p className='text-lg md:text-xl'>Hosted by {room.hotel.name}</p>
                            <div>
                                <StarRating/>
                                <p className='ml-2'>200+ review</p>
                            </div>
                        </div>
                    </div>
                    <button className='px-6 py-2.5 mt-4 rounded- text-white bg-primary hover:bg-primary-dull transition-all cursor-pointer'>Contact Now</button>
                 </div>
            </div>
        </div>
    </div>
  )
}

export default RoomDetails