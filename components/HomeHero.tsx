import Modal from '../components/Modal'
import HeaderAlt from '../components/HeaderAlt'
function HomeHero() {
    return <div className="bg-alkaligrey-200 home-hero-bg">
    <HeaderAlt />
    <div className="pt-28 flex justify-between max-w-7xl justify-center m-auto">
      <div className="relative">
        <p className="text-alkaligrey-800 uppercase font-medium text-lg">Our Mission</p>
        <h1 className="font-play text-alkaligrey-800 font-bold py-5 text-7xl max-w-2xl">Ehancing Your Online Presence Made Easy</h1>
        <p className="text-white text-alkaligrey-800 max-w-2xl pb-10">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </div>
    </div>
    <div className="pb-36 justify-between max-w-7xl justify-center m-auto">
      <span>
        <Modal 
        style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
        text="Schedule a Discovery Call"
        />
        <a href="" className="p-4 shadow-2xl px-12 font-semibold ml-5 text-text-alkaligrey-600 mt-48 border border-alkaligrey-600 rounded-md transition duration-500 ease-in-out hover:bg-alkaligrey-600 hover:text-white transform hover:-translate-y-1 hover:scale-110">View Services</a>
      </span>
    </div>
  </div>
  }
  
  export default HomeHero