import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";
import { useNavigate } from "react-router-dom";

const FeaturedDestination = () => {
  const navigate = useNavigate()
  return (
    <div className="">
      <Title title='Featured Destination' subTitle={'Descover our handpicked selection of exceptional properties and world, offerlin unperalleded luxury and unforgettable experiences.'}/>
      <div className="flex justify-center  gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
      <button onClick={()=>{navigate('/rooms'); scrollTo(0,0)}} class="mx-auto block my-16 px-4 py-2 text-sm font-medium border border-gray-300 rounded bg-white hover:bg-gray-50 transition-all cursor-pointer">
         View all Destinations
      </button>
    </div>
  );
};

export default FeaturedDestination;
