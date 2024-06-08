import { services } from "../constant"

const Service = () => {
  return (
    <section id='services' className='py-6 sm:py-16 text-center'>
      <h1 className='text-[30px] sm:text-[48px] text-text font-roboto'>See Our Services</h1>
      <p className='text-para font-poppins'>We Make Finding Rentals Easy, Effortless Search, Endless Choices</p>
      <div className='flex sm:flex-row flex-col items-center justify-between gap-4 mt-5'>
            {services.map((item)=>(
                <div className="bg-text flex flex-col items-center p-4 w-full max-w[450px] h-[250px] rounded-[30px]" key={item.id}>
                    <img src={item.icon} alt="responsive" className="w-[80px] object-contain w-full" />
                    <div>
                        <h4 className="text-white font-bold text-[20px] mt-3 font-poppins">{item.title}</h4>
                        <p className="text-white font-poppins mt-3 leading-[20px]">{item.text}</p>
                    </div>
                </div>
            ))}
      </div>
    </section>
  )
}

export default Service
