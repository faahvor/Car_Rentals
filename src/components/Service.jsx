import { BsStars } from "react-icons/bs";
import { FaRegCheckCircle } from "react-icons/fa";
import { PiHandCoins } from "react-icons/pi";

const Service = () => {
  return (
    <div className="h-[486px]  bg-black text-white flex flex-col font-fig items-center mx-auto pt-9">
      <div className="w-[720px] flex flex-col items-center">
        <h1 className="text-[48px] font-bold">Our Services & Benefits</h1>
        <p className="text-[16px] font-medium w-[720px] text-center ">
          To make renting easy and hassle-free, we provide a variety of services
          and advantages. We have you covered with a variety of vehicles and
          flexible rental terms.
        </p>
      </div>
      <div className="flex gap-[4rem] mt-[4rem]">
        <div className="w-[384px] flex flex-col items-center mx-auto gap-4">
          <button className="bg-white w-[48px] h-[48px] rounded-full   text-black">
            <BsStars className="mx-auto flex text-[20px] items-center" />
          </button>
          <h2 className="text-[20px] font-semibold">Quality Choice</h2>
          <p className="w-[384px] text-[16px] text-center">
            We offer a wide range of high-quality vehicles to choose from,
            including luxury cars, SUVs, vans, and more.
          </p>
        </div>
        <div className="w-[384px] flex flex-col items-center mx-auto gap-4">
          <button className="bg-white w-[48px] h-[48px] rounded-full   text-black">
            <PiHandCoins className="mx-auto flex text-[20px] items-center" />
          </button>
          <h2 className="text-[20px] font-semibold">Affordable price</h2>
          <p className="w-[384px] text-[16px] text-center">
            Our rental rates are highly competitive and affordable, allowing our
            customers to enjoy their trips without breaking the bank.
          </p>
        </div>
        <div className="w-[384px] flex flex-col items-center mx-auto gap-4">
          <button className="bg-white w-[48px] h-[48px] rounded-full   text-black">
            <FaRegCheckCircle className="mx-auto flex text-[20px] items-center" />
          </button>
          <h2 className="text-[20px] font-semibold">
            Convenient Online Booking
          </h2>
          <p className="w-[384px] text-[16px] text-center">
            With our easy-to-use online booking system, customers can quickly
            and conveniently reserve their rental car from anywhere, anytime.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Service;
