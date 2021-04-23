import Modal from '../components/Modal'
import CombinedNavigation from '../components/Navigation/CombinedNavigation'

function HomeHero() {
  return <div className="bg-alkaligrey-200">
      <CombinedNavigation />
    <div className="pt-20 flex justify-between max-w-7xl justify-center m-auto z-20">
      <div className="relative z-20">
        <p className="text-alkaligrey-800 uppercase font-medium text-lg">Our Mission</p>
        <h1 className="font-play text-alkaligrey-800 font-bold py-5 text-7xl max-w-2xl">Ehancing Your Online Presence Made Easy</h1>
        <p className="text-white text-alkaligrey-800 max-w-2xl pb-10">Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
      </div>
    </div>
    <div className="justify-between max-w-7xl justify-center m-auto">
      <span>
        <Modal
          style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
          text="Schedule a Discovery Call"
        />
        <a href="/#services"><a href="" className="p-4 shadow-2xl px-12 font-semibold ml-5 text-text-alkaligrey-600 mt-48 border border-alkaligrey-600 rounded-md transition duration-500 ease-in-out hover:bg-alkaligrey-600 hover:text-white transform hover:-translate-y-1 hover:scale-110">View Services</a></a>
      </span>
    </div>
    <div className="svg-divider svg-divider-bottom text-white mt-20 md:mt-1 xl:-mt-24 z-20">
      <svg className="align-middle" preserveAspectRatio="none" viewBox="0 0 2000 350" xmlns="http://www.w3.org/2000/svg">
        <polygon fill="currentColor" points="2000 0 2000 350 0 350"></polygon>
      </svg>
    </div>
  </div>
}

export default HomeHero