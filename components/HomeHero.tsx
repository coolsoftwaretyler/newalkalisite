import Modal from '../components/Modal'
import Header from '../components/Header'
function HomeHero() {
    return <div className="home-hero-bg">
    <Header />
    <div className="pt-28 flex justify-between max-w-7xl justify-center m-auto">
      <div className="relative">
        <h1 className="font-play text-white font-bold text-6xl">Enhance Your Online Presence</h1>
        <h2 className="font-play font-bold text-white text-2xl py-7">Expanding online can be challenging. We make it easy.</h2>
        <p className="text-white max-w-2xl pb-10">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </div>
    </div>
    <div className="pb-36 justify-between max-w-7xl justify-center m-auto">
      <span>
        <Modal 
        style="p-3 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
        name="Schedule a Discovery Call"
        />
        <a href="" className="p-3 px-12 font-semibold ml-5 text-alkaligrey-600 mt-48 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110">View Services</a>
      </span>
    </div>
  </div>
  }
  
  export default HomeHero