import React from "react";
import { assets, facilityIcons, roomsDummyData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import StarRating from "../components/StarRating";
import Title from "../components/Title";

const AllRooms = () => {
  const navigate = useNavigate();

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
      <div className="w-full lg:w-1/3">
        <Title title={"Gnanasher"} subTitle={"i am checking the component"}/>
      </div>
    </div>
  );
};

export default AllRooms;
