import { home } from "../assets"

const Hero = () => {
  return (
    <section id='home'>
      <div className="flex ">
        <div className='flex flex-1 flex-col items-start py-16 '>
            <h1 className="text-text font-semibold text-[48px] leading-[66.8px] w-full mb-5 font-roboto">Your<br/> Rental Journey<br/> Begins Here</h1>
            <p className="text-para text-[18px] font-normal w-full font-poppins mb-3 leading-[30px]">We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
            <div className="flex cursor-pointer">
                <button className="bg-text px-4 py-2 rounded-full text-white mr-3 btn_primary"><a href="#">Rent Now</a></button>
                <button className="border border-border px-4 py-2 rounded-full text-text btn_secondary"><a href="#">Rent Your Place</a></button>
            </div>
        </div>
        <img src={home} alt="hero" className="w-[50%] h-[50%] relative z-5" />
      </div>
    </section>
  )
}

export default Hero
