import About from "../components/About"
import BrandSection from "../components/BrandSection"
import CarBooking from "../components/CarBooking"
import Download from "../components/Download"
import Footer from "../components/Footer"
import Hero from "../components/Hero"
import Reviews from "../components/Reviews"
import Service from "../components/Service"


const Home = () => {
  return (
    <div>
        <Hero/>
        <BrandSection/>
        <CarBooking/>
        <About/>
        <Service/>
        <Reviews/>
        <Download/>
        <Footer/>
    </div>
  )
}

export default Home