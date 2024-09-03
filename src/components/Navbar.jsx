import { HiOutlineMenuAlt4 } from "react-icons/hi";


const Navbar = () => {
  return (
    <nav className="flex z-30 justify-between px-10 py-5 fixed top-0 right-0 left-0 text-white bg-[#0F0F0F]/15">
      <HiOutlineMenuAlt4 className="text-2xl"/>
      <img
      className="h-3"
        src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1724925237/Car_rentals/Heading_vhcilz.png"
        alt=""
      />
      <div className="border-white border-2 rounded-2xl px-3 py-1 flex gap-1 font-semibold">
        <button className="hover:border-b hover:border-b-white cursor-pointer">Login</button>
        <span>/</span>
        <button className="hover:border-b hover:border-b-white cursor-pointer">Register</button>
      </div>
    </nav>
  );
};

export default Navbar;
