import { navlinks } from "../constant";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import {useState} from "react";

const Navbar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <nav className="flex items-center justify-between">
      <a href="#" className='logo text-logo font-bold font-poppins text-[20px] leading-[61.5px]'>
        Rent<span className='font-normal font-w-[200]'>Homes</span>
      </a>
      <ul className="list-none sm:flex hidden items-center justify-center">
        {navlinks.map((item, index)=>(
            <li key={item.id} className={`text-logo font-poppins font-normal ${index === navlinks.length - 1 ? "mr-0" : "mr-4"}`}>
                <a href={`#${item.id}`} className="nav_link">{item.link}</a>
            </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <div onClick={()=> setToggle(true)}>
        <GiHamburgerMenu className="w-[28px] h-[28px] object-contain text-logo" />
        </div>
          <div className={`${toggle ? "flex" : "hidden"} bg-logo absolute top-0 right-0 w-[200px] h-[100%] z-10 p-3`}>
          <IoClose className="w-[28px] h-[28px] object-contain text-white mb-0" onClick={()=> setToggle(false)} />
          <ul className="list-none flex flex-col items-start justify-center">
        {navlinks.map((item)=>(
            <li key={item.id} className="text-white font-poppins font-normal mb-2">
                <a href={`#${item.id}`} className="nav_link">{item.link}</a>
            </li>
        ))}
      </ul>
          </div>
      
      </div>
    </nav>
  )
}

export default Navbar
