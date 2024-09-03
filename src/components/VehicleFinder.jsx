import { FaArrowRight } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const VehicleFinder = () => {
  return (
    <div className="flex z-10 items-end -bottom-10 shadow-xl absolute justify-center gap-4 py-5 px-5 w-fit rounded-2xl bg-[#e7e7e7]">
      <div className="flex flex-col gap-2 text-base">
        <label>Pick-up Location</label>
        <div className="relative w-fit">
          <IoLocationOutline  className="absolute  top-3 left-1 text-xl"/>
          <input
            type="text"
            placeholder="search a location"
            className="border-2 border-black border-opacity-10 py-2 pl-8 rounded-lg placeholder:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base">
        <label>Pick-up Date</label>
        <div className="relative w-fit">
          
          <input
            type="date"
            placeholder="12/12/2023"
            className="border-2 border-black border-opacity-10 py-2 px-6 rounded-lg placeholder:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base">
        <label>Drop-off Location</label>
        <div className="relative w-fit">
          <IoLocationOutline  className="absolute  top-3 left-1 text-xl"/>
          <input
            type="text"
            placeholder="search a location"
            className="border-2 border-black border-opacity-10 py-2 pl-8 rounded-lg placeholder:text-black"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2 text-base">
        <label>Drop-off Date</label>
        <div className="relative w-fit">
          
          <input
            type="date"
            placeholder="12/12/2023"
            className="border-2 border-black border-opacity-10 py-2 px-6 rounded-lg placeholder:text-black"
          />
        </div>
      </div>
      <button className="flex items-center h-fit justify-center gap-2 text-white bg-black rounded-2xl px-5 py-3">
        Find a Vehicle <FaArrowRight />
      </button>
    </div>
  );
};

export default VehicleFinder;
