/* eslint-disable react/prop-types */
import { HiOutlineUsers } from "react-icons/hi";
import { IoMdSpeedometer } from "react-icons/io";
import { PiGasPumpBold } from "react-icons/pi";
import { TbManualGearboxFilled } from "react-icons/tb";

const CarSection = ({ activeCategory }) => {
  console.log("activeCategory", activeCategory);

  return (
    <div className="grid grid-cols-3 gap-4 font-fig mt-10 mx-auto">
      {activeCategory?.map((item, i) => (
        <div
          key={i}
          className=" h-[489px] w-[338px] flex flex-col  items-center  bg-white rounded-2xl "
        >
          <img
            className="w-[338px] h-[240px] px-2 rounded-2xl"
            src={item.image}
            alt=""
          />
          <div className="flex flex-col gap-4 w-[336px] ">
            <h1 className="text-[20px] pl-[1.5rem]">{item.name}</h1>
            <h3>
              {" "}
              <span className="text-[32px] pl-[1.5rem] font-bold">
                {item.price}
              </span>
              /day
            </h3>
            <div className="flex gap-4  justify-center items-center mx-auto bg-[#F6F6F6] px-6 py-2 rounded-xl">
              <p className="flex flex-col items-center justify-center">
                {" "}
                <IoMdSpeedometer /> 4,000
              </p>
              <p className="flex flex-col items-center justify-cente">
                {" "}
                <TbManualGearboxFilled /> Auto{" "}
              </p>
              <p className="flex flex-col items-center justify-cente">
                {" "}
                <HiOutlineUsers /> 4 Person
              </p>
              <p className="flex flex-col items-center justify-cente">
                {" "}
                <PiGasPumpBold /> Electric
              </p>{" "}
            </div>
            <button className="h-[43px] border-2 border-black rounded-full mx-[1rem]">
              Rent Now
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CarSection;
