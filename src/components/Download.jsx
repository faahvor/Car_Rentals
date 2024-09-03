import { FaGooglePlay } from "react-icons/fa";
import { IoLogoApple } from "react-icons/io";

const Download = () => {
  return (
    <div className="h-[292px] bg-black text-white  mt-[6rem] flex items-center gap-[3rem] mx-auto justify-center font-fig ">
      <div className="h-[119px] w-[488px]">
        <h1 className="text-[36px] font-bold ">Download our mobile app ⚡️</h1>
        <p className="w-[488px]">
          Get exclusive access to car rentals with our mobile app. Download now
          and experience convenience on the go.
        </p>
      </div>
      <div className="flex w-[418px] gap-[2rem]">
      <div className="w-[193px] h-[61px] bg-white text-black rounded-full flex items-center justify-center">
      <IoLogoApple className="text-[2rem]"/>
      <p className="flex flex-col "><span className="text-[10px]">DOWNLOAD ON THE</span> <span className="text-md font-semibold">App Store</span></p>
      </div>
      <div className="w-[193px] h-[61px] bg-white text-black rounded-full flex items-center justify-center">
     
      <FaGooglePlay className="text-[2rem]"/>
      <p className="flex flex-col "><span className="text-[10px]">GET IT ON</span> <span className="text-md font-semibold">Google Play</span></p>
      </div>
      </div>
    </div>
  );
};

export default Download;
