import { navlinks } from "../constant"

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <a href="" className='logo text-logo font-bold font-poppins text-[20px] leading-[61.5px]'>
        Rent<span className='font-normal font-w-[200]'>Homes</span>
      </a>
      <ul className="list-none flex items-center justify-center">
        {navlinks.map((item, index)=>(
            <li key={item.id} className={`text-logo font-poppins font-normal ${index === navlinks.length - 1 ? "mr-0" : "mr-4"}`}>
                <a href={`#${item.id}`}>{item.link}</a>
            </li>
        ))}
      </ul>
    </nav>
  )
}

export default Navbar
