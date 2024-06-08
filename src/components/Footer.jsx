import { footerlinks } from "../constant"
import { social } from "../constant"

const Footer = () => {
  return (
    <div className='py-6 sm:py-16' id='contact'>
      <div className='flex flex-wrap item-center justify-between '>
        <div className='flex flex flex-col gap-6'>
            <a href="#" className='logo text-logo font-bold font-poppins text-[20px] leading-[61.5px]'>
                Rent<span className='font-normal font-w-[200]'>Homes</span>
            </a>
            <p className='text-para font-poppins '>The best and easiest way to rent homes</p>
        </div>
            {footerlinks.map((footerlink)=>(
                <div key={footerlink.key} className="flex flex-col ss:my-0 my-4 min-w-[150px]">
                    <h4 className="text-text font-medium text-[18px] leading-[27px]">{footerlink.title}</h4>
                    <ul className="list-none mt-4">
                        {footerlink.links.map((link, index)=>(
                            <li key={index} className="font-poppins cursor-pointer font-normal text-[16px] text-para mb-4">
                                <a href="">{link.name}</a>
                            </li>
                        ))}
                    </ul>
                </div>
            ))}
      </div>
      <div className="flex flex-wrap items-center justify-center sm:justify-start mt-5 gap-5">
        {social.map((item)=>(
            <img src={item.icon} key={item.id} className="w-[40px] h-[40px] object-fit cursor-pointer bg-text mr-6 p-3 rounded-full" />
        ))}
        <p className="text-para text-[16px] font-poppins ml-5">copyright@ 2023 | all right reserved</p>
      </div>
    </div>
  )
}

export default Footer
