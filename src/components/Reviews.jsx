import { useState } from "react";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import { reviews } from "../Data";

const Reviews = () => {
  const [currentReview, setCurrentReview] = useState(0);

  const handleNext = () => {
    setCurrentReview((prev ) => (prev  + 1) % reviews.length);
  };

  const handlePrev = () => {
    setCurrentReview((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };
  return (
    <div className="h-[606px] text-black flex flex-col font-fig mx-[10rem] gap-6 py-[5rem]">
      <h1 className="text-[40px] font-bold">What Our Customers Say</h1>
      <div className="flex justify-end ">
        <button
          onClick={handlePrev}
          className={`h-[50px] w-[50px] rounded-full border-2 border-black/10 ${
            currentReview <= 3 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <FiArrowLeft className="text-[24px]  mx-auto" />
        </button>
        <button
          onClick={handleNext}
          className={`h-[50px] w-[50px] rounded-full border-2 border-black/10 ${
            currentReview >= 1 ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <FiArrowRight className="text-[24px]  mx-auto" />
        </button>
      </div>
      <p className="w-[1104px] text-[30px] font-semibold text-[#0F0F0F]">{reviews[currentReview].text}</p>
      <div className="flex gap-8">
        <img
          className="h-[80px] rounded-full w-[80px]"
          src={reviews[currentReview].image}
          alt=""
        />
        <div className="flex flex-col">
          <h1 className="text-[24px] font-bold">{reviews[currentReview].name}</h1>
          <p className="text-[20px] font-normal">{reviews[currentReview].state}</p>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
