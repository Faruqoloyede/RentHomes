import { footerlinks } from "../constant"
import { FaFacebook } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

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
      <div className="flex flex-wrap items-center justify-center sm:justify-start mt-5 gap-10">
          <div className="flex items-center gap-5">
          <FaFacebook className="cursor-pointer text-para p-2 text-[35px] rounded-full border border-border hover:bg-text hover:text-white " />
          <FaInstagram className="cursor-pointer text-para p-2 text-[35px] rounded-full border border-border hover:bg-text hover:text-white" />
          <FaXTwitter className="cursor-pointer text-para p-2 text-[35px] rounded-full border border-border hover:bg-text hover:text-white" />
          </div>
        <p className="text-para text-[16px] font-poppins ml-5">copyright@ 2023 | all right reserved</p>
      </div>
    </div>
  )
}

export default Footer
