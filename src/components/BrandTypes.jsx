/* eslint-disable react/prop-types */
import { FaArrowRight } from "react-icons/fa";


const BrandTypes = ({title ,data}) => {
  return (
    <div className="text-black flex flex-col">
      <div className="flex justify-between">
        <p className="font-bold">{title}</p>
        <span className="flex gap-3 items-center">
          <p>view all</p> <FaArrowRight />
        </span>
      </div>
      <div className="grid grid-cols-6 gap-5">
        {data.map((item,i) => (
          <div
            key={i}
            className="flex flex-col bg-black/5 hover:cursor-pointer hover:bg-black/10 gap-2 items-center justify-center py-8 rounded-lg"
          >
            <img
              className="h-8 w-fit"
              src={item.image}
              alt=""
            />
            <p>{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandTypes;
