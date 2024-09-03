/* eslint-disable no-unused-vars */
import CarSection from "./CarSection";
import car, { carDetails } from "../Data";
import { useMemo, useState } from "react";
const CarBooking = () => {
  const [activeTab, setActiveTab] = useState("PopularCars");

  const handleChange = (tab) => {
    setActiveTab(tab);
  };

  const activeCarDetail = useMemo(() => {
    return carDetails.find((detail) => detail[activeTab])?.[activeTab];
  }, [activeTab]);

  return (
    <div className="h-[1500px] w-full bg-[#F5F5F5] mt-[20rem] flex flex-col font-fig gap-4">
      <div className=" flex flex-col justify-center ">
        <h1 className="text-[48px] text-center  font-bold">
          Our Impressive Collection of Cars
        </h1>
        <p className="text-center  mx-auto text-[18px] font-semibold w-[720px]">
          Ranging from elegant sedans to powerful sports cars, all carefully
          selected to provide our customers with the ultimate driving
          experience.
        </p>
      </div>
      <div className="w-[764px] flex gap-4 items-center justify-center mx-auto mt-8">
        <div
          onClick={() => handleChange("PopularCars")}
          className={`w-[140px]  flex items-center justify-center rounded-full h-[50px] ${activeTab === "PopularCars" ? " bg-black text-white" : "bg-white text-black border-2 border-black "}`}
        >
          Popular car
        </div>
        <div
          onClick={() => handleChange("LuxuryCars")}
          className={`w-[140px]  flex items-center justify-center rounded-full h-[50px] ${activeTab === "LuxuryCars" ? " bg-black text-white" : "bg-white text-black border-2 border-black "}`}
        >
          Luxury car
        </div>
        <div
          onClick={() => handleChange("VintageCars")}
          className={`w-[140px]  flex items-center justify-center rounded-full h-[50px] ${activeTab === "VintageCars" ? " bg-black text-white" : "bg-white text-black border-2 border-black "}`}
        >
          Vintage car
        </div>
        <div
          onClick={() => handleChange("FamilyCars")}
          className={`w-[140px]  flex items-center justify-center rounded-full h-[50px] ${activeTab === "FamilyCars" ? " bg-black text-white" : "bg-white text-black border-2 border-black "}`}
        >
          Family car
        </div>
        <div
          onClick={() => handleChange("Off_WorkCars")}
          className={`w-[140px]  flex items-center justify-center rounded-full h-[50px] ${activeTab === "Off_WorkCars"? " bg-black text-white" : "bg-white text-black border-2 border-black "}`}
        >
          Off-Road car
        </div>
      </div>

      <CarSection activeCategory={activeCarDetail} />

      <button className="w-[198px] h-[56px] text-[16px] bg-black text-white text-center mt-8 flex justify-center items-center mx-auto rounded-full">see all cars</button>
    </div>
  );
};

export default CarBooking;
