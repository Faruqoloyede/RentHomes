import { about } from "../assets"


const About = () => {
  return (
    <section id='about' className='py-6 sm:py-16'>
      <div className="flex sm:flex-row flex-col gap-16">
        <img src={about} alt="about" className="w-[100%] sm:w-[50%] object-contain sm:block hidden" />
        <div className="flex flex-col">
            <h1 className="text-text font-roboto sm:text-[48px] text-[30px] leading-[60px] mb-5 sm:text-start text-center">Begin <br className="sm:block hidden" />your awesome<br className="sm:block hidden" /> journey</h1>
            <p className="font-normal font-poppins text-[16px] text-para leading-[30px] mb-3 sm:text-start text-center">Looking for the perfect home to rent? Our user-friendly house rental website makes your search a breeze. Browse through a diverse range of listings,From cozy apartments to spacious family houses.</p>
            <p className="font-normal font-poppins text-[16px] text-para leading-[30px] mb-3 sm:text-start text-center">With detailed descriptions, vivid photos, and handy filters, finding your ideal rental is just a click away.</p>
        </div>
      </div>
    </section>
  )
}

export default About
