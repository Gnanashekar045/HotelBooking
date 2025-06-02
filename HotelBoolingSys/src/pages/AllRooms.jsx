import React, { useState } from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import Title from "../components/Title";

const CheckBox = ({label, selected = false, onChange = () => {}}) => {
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm" htmlFor="">
            <input type="checkbox" checked={selected} onChange={(e)=>onChange(e.target.checked, label)} />
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

const RadioButton = ({label, selected = false, onChange = () => {}}) => {
    return (
        <label className="flex gap-3 items-center cursor-pointer mt-2 text-sm" htmlFor="">
            <input type="radio" name="sortOption" checked={selected} onChange={()=>onChange(label)} />
            <span className="font-light select-none">{label}</span>
        </label>
    )
}

const AllRooms = () => {
  const navigate = useNavigate();
  const [openFilter, setOpenFilter] = useState(false)
  const roomType = [
    "Simgle Bed",
    "Double Bed",
    "Luxury Room",
    "Family Suite",
  ];

  const priceRanges = [
    "0 to 500",
    "500 to 100",
    "1000 to 2000",
    "2000 to 3000",
  ];

  const sortOptions = [
    "Price Low to High",
    "Price High to Low",
    "Newest First",
  ]
  return (
    <div className="flex flex-col-reverse lg:flex-row items-start justify-between pt-28 md:pt-36 px-4 md:px-16 lg:px-24 gap-10">
      {/* Left Section: Room List */}
      <div className="flex flex-col w-full lg:w-2/3">
        <h1 className="font-playfair text-4xl md:text-5xl mb-4">Hotel Rooms</h1>
        <p className="text-sm md:text-base text-gray-600 mb-8 max-w-2xl">
          Take advantage of our limited offers and special packages to enhance your stay and create unforgettable memories.
        </p>

        <div className="flex flex-col gap-10">
          {roomsDummyData.map((room) => (
            <div
              key={room._id}
              className="flex flex-col md:flex-row gap-6 p-4 border border-gray-200 rounded-xl shadow-sm hover:shadow-lg transition-shadow"
            >
              <img
                onClick={() => {
                  navigate(`/rooms/${room._id}`);
                  scrollTo(0, 0);
                }}
                src={room.images[0]}
                alt="hotel-img"
                title="View room details"
                className="w-full md:w-1/2 max-h-60 rounded-lg object-cover cursor-pointer"
              />

              <div className="flex flex-col justify-between md:w-1/2 gap-3">
                <p className="text-gray-500">{room.hotel.city}</p>
                <p
                  onClick={() => {
                    navigate(`/rooms/${room._id}`);
                    scrollTo(0, 0);
                  }}
                  className="text-gray-800 text-2xl font-playfair cursor-pointer hover:text-blue-500"
                >
                  {room.hotel.name}
                </p>
                <div className="flex items-center">
                  <StarRating />
                  <p className="ml-2 text-sm text-gray-600">200+ reviews</p>
                </div>
                <div className="flex items-center gap-2 text-gray-500 text-sm">
                  <img src={assets.linkendinIcon} alt="location-icon" className="w-4 h-4" />
                  <span>{room.hotel.address}</span>
                </div>
                <div>
                    {room.amenities.map((item, index)=>(
                        <div className="flex items-center gap-2 px-3 py-2 rounded-lg bg-[#F5F5FF]/70">
                            <img src={facilityIcons[item]} alt={item} className="w-5 h-5"/>
                            <p className="text-xs">{item}</p>
                        </div>
                    ))}
                    <div>
                        <p className="text-xl font-medium text-gray-700">${room.pricePerNight} /night</p>
                    </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Right Section (optional for filters or sidebar) */}
      <div className="bg-white w-80 border border-gray-300 text-gray-600 max-lg:mb-8 min-lg:mt-16">
        <div className={`flex items-center justify-between px-5 py-2.5 min-lg:border-b border-gray-300 ${openFilter && "border-b"}`}>
            <p className="text-base font-medium text-gray-800">FILTER</p>
            <div className="text-xs cursor-pointer">
                <span onClick={()=> setOpenFilter(!openFilter)} className="lg:hidden">{openFilter ? 'HIDE' : 'SHOW'}</span>
                <span className="hidden lg:block">CLEAR</span>
            </div>
        </div>
        <div className={`${openFilter ? 'h-auto' : 'h-0 lg:h-auto'} overflow-hidden transition-all duration-700`}>
            <div className="px-5 pt-5">
                <p className="font-medium text-gray-800 p-2">Populer Filter</p>
                {roomType.map((room, index)=>(
                    <CheckBox key={index} label={room}/>
                ))}
            </div>
            <div className="px-5 pt-5">
                <p className="font-medium text-gray-800 p-2">Price Range</p>
                {priceRanges.map((range, index)=>(
                    <CheckBox key={index} label={`$ ${range}`}/>
                ))}
            </div>
            <div className="px-5 pt-5 pb-7">
                <p className="font-medium text-gray-800 p-2">Sort By</p>
                {sortOptions.map((option, index)=>(
                    <RadioButton key={index} label={option}/>
                ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default AllRooms;
