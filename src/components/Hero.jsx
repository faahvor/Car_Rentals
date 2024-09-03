import VehicleFinder from "./VehicleFinder";

const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center items-center">
      <h1 className="absolute text-white w-[982px] h-[154px] top-[4rem] text-[64px] text-center">Discover the world on wheels with our car rental service</h1>
      <img
        src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1724925154/Car_rentals/image_23_jlrweu.png"
        alt=""
        className="w-full"
      />
      <VehicleFinder/>
    </div>
  );
};

export default Hero;
