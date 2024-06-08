import { feedback } from "../constant"
import Feedback from "./Feedback"


const Testimonial = () => {
  return (
    <div className='py-6 sm:py-16 text-center' id='review'>
        <h1 className='text-[30px] sm:text-[40px] text-text font-roboto leading-[60px]'>What Customers Says <br/>About Our Services</h1>
        <p className='text-para font-poppins'>we make finding rentals Easy, Effortless Search, Effort Choice</p>
        <div className="flex flex-wrap justify-center items-center pt-5">
            {feedback.map((item)=>(
                <Feedback key={item.id} {...item} />
            ))}
        </div>
    </div>
  )
}

export default Testimonial
