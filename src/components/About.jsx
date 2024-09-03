
import { CiSearch } from "react-icons/ci";

const About = () => {
  return (
    <div className="w-[1216px] h-[838px] flex flex-col mt-[8rem] items-center mx-auto  font-fig ">
      <h1 className="text-[48px] font-bold text-center">How it Works</h1>
      <p className="w-[720px] text-[16px] text-center">
        Renting a luxury car has never been easier. Our streamlined process
        makes it simple for you to book and confirm your vehicle of choice
        online
      </p>
      <div className="flex relative mt-8">
        <div className="flex flex-col gap-[10px] mt-[4rem] z-10 mr-[-8rem]">
          <div className="flex border border-black/10 bg-white rounded-2xl gap-4 py-4 px-[20px] ">
            <button  className="bg-[#F5F5F5] text-black py-8 rounded-2xl text-center hover:text-[24px] px-4 text-[18px]">
          <CiSearch />
          </button>
            <div className="flex flex-col gap-2">
              <h1 className=" text-[20px] font-bold">Browse and Confirm</h1>
              <p className="w-[454px] text-[18px] text-center">
              Choose from our wide range of premium cars, select the pickup and return dates and locations that suit you best.
              </p>
            </div>
          </div>
          <div className="flex border border-black/10 bg-white rounded-2xl gap-4 py-4 px-[20px] ">
            <button  className="bg-[#F5F5F5] text-black py-8 rounded-2xl text-center hover:text-[24px] px-4 text-[18px]">
          <CiSearch />
          </button>
            <div className="flex flex-col gap-2">
              <h1 className=" text-[20px] font-bold">Browse and Select</h1>
              <p className="w-[454px] text-[18px] text-center">
              Book your desired car with just a few clicks and receive an instant confirmation via email or SMS.
              </p>
            </div>
          </div>
          <div className="flex border border-black/10 bg-white rounded-2xl gap-4 py-4 px-[20px] ">
            <button  className="bg-[#F5F5F5] text-black py-8 rounded-2xl text-center hover:text-[24px] px-4 text-[18px]">
          <CiSearch />
          </button>
            <div className="flex flex-col gap-2">
              <h1 className=" text-[20px] font-bold">Browse and Select</h1>
              <p className="w-[454px] text-[18px] text-center">
              Pick up your car at the designated location and enjoy your premium driving experience with our top-quality service.
              </p>
            </div>
          </div>
        </div>
        
        <div className="bg-[#F5F5F5] rounded-xl w-[740px] h-[580px] flex justify-center items-center mx-auto">
        <img className=" h-[359px] pl-[9rem]" src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1725321495/Car_rentals/cars/image_35_gbchyx.png" alt="" />
      </div>
      </div>
    </div>
  );
};

export default About;
