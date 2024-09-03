import BrandTypes from "./BrandTypes"
import carDetails from "../Data"


const BrandSection = () => {
  return (
    <div className="bg-white h-screen w-screen p-20 flex flex-col gap-20 mt-20 justify-between">
<BrandTypes title="Rent by Brands" data={carDetails[0].Brand}/>
<BrandTypes title="Rent by Body type" data={carDetails[1].Bodytype}/>
    </div>
  )
}

export default BrandSection