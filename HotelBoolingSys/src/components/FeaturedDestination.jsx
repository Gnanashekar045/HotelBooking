import React from "react";
import { roomsDummyData } from "../assets/assets";
import HotelCard from "./HotelCard";
import Title from "./Title";

const FeaturedDestination = () => {
  return (
    <div>
      <Title title='Featured Destination' subTitle={'Descover our handpicked selection of exceptional properties and world, offerlin unperalleded luxury and unforgettable experiences.'}/>
      <div className="flex justify-center  gap-6 mt-20">
        {roomsDummyData.slice(0, 4).map((room, index) => (
          <HotelCard key={room._id} room={room} index={index} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedDestination;
