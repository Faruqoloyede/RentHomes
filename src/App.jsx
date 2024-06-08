import { About, Hero, Navbar } from "./components"


const App = () => {
  return (
    <div className='bg-bg w-full overflow-hidden '>
      <div className="flex justify-center items-center sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Navbar />
        </div>
      </div>
      {/* HERO SECTION */}
      <div className="flex justify-center items-start sm:px-16 px-6">
        <div className="xl:max-w-[1280px] w-full">
          <Hero />
        </div>
      </div>

      <div className="px-16 flex justify-center items-start">
        <div className="xl:max-w-[1280px] w-full">
          <About />
        </div>
      </div>
    </div>
  )
}

export default App
