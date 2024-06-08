import { home } from "../assets"

const Hero = () => {
  return (
    <section id='home'>
      <div className="flex flex-col sm:flex-row ">
        <div className='flex flex-1 flex-col sm:items-start items-center py-16 '>
            <h1 className="text-text font-semibold sm:text-[48px] text-[30px] sm:leading-[66.8px] leading-10 w-full mb-5 font-roboto sm:text-start text-center">Your<br className="sm:block hidden"/> Rental Journey<br className="sm:block hidden"/> Begins Here</h1>
            <p className="text-para text-[18px] font-normal w-full font-poppins sm:mb-3 mb-5 leading-[30px]">We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
            <div className="flex cursor-pointer">
                <button className="bg-text px-4 py-2 rounded-full text-white mr-3 btn_primary"><a href="#">Rent Now</a></button>
                <button className="border border-border px-4 py-2 rounded-full text-text btn_secondary"><a href="#">Rent Your Place</a></button>
            </div>
        </div>
        <img src={home} alt="hero" className="sm:w-[50%] h-[50%] w-[100%] relative z-5" />
      </div>
    </section>
  )
}

export default Hero
