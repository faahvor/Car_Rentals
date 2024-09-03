import { AiOutlineYoutube } from "react-icons/ai"
import { FaInstagram } from "react-icons/fa"
import { FiTwitter } from "react-icons/fi"
import { MdOutlineSportsVolleyball } from "react-icons/md"

const Footer = () => {
  return (
    <div className="h-[113px] bg-black flex justify-evenly items-center text-white border-t-2 border-t-[#0F0F0F]">
        <img
      className="h-3"
        src="https://res.cloudinary.com/dsjsvmug6/image/upload/v1724925237/Car_rentals/Heading_vhcilz.png"
        alt=""
      />
      <div className="flex gap-6">
       <a href="">Rent</a>
       <a href="">Share</a>
       <a href="">About us</a>
       <a href="">Contact</a>
      </div>
      <div className="flex gap-6">
      <FaInstagram />
      <MdOutlineSportsVolleyball />
      <FiTwitter />
      <AiOutlineYoutube />

      </div>
    </div>
  )
}

export default Footer
