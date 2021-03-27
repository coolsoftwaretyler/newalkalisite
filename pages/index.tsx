import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../comps/HomeHero'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <div className="services-home pt-48 pb-24 flex justify-between max-w-6xl justify-center m-auto">
        <div className="group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/website-design.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
      </p>
          <div className="mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="group shadow-2xl mx-10 rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/search-engine-optimization.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
      </p>
          <div className="mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/website-hosting.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Website Hosting</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
        </p>
          <div className="mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="content-end">
          <button>See all services</button>
        </div>
        <div className="bg-alkaligrey-500">
          <div className="py-24 max-w-7xl m-auto">
            <h3 className="text-2xl pb-4">Our Partners</h3>
            <p className="text-sm">To deliver the best result for our clients we formed strategic parnterships with industry leaders.</p>
            <div className="pt-5 flex justify-between max-w-5xl justify-center m-auto">
              <div>
                <img className="w-60 px-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/images/Google-Partner.png"></img>
              </div>
              <div>
                <img className="w-60 px-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/images/Digital-Ocean-Partner.png"></img>
              </div>
              <div>
                <img className="w-60 px-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/images/Facebook-Marketing-Partner.png"></img>
              </div>
              <div>
                <img className="w-60 px-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/images/Zapier-Automation.png"></img>
              </div>
              <div>
                <img className="w-60 px-3 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" src="/images/Kraken-Image-Optimization.png"></img>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-white m-auto pt-14">
          <div className="flex overflow-x-scroll pb-10 hide-scroll-bar">
            <div className="flex flex-nowrap lg:ml-96 md:ml-20 ml-10">
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
              <div className="inline-block px-3">
                <div className="w-96 h-96 max-w-xs overflow-hidden rounded-lg shadow-md bg-white hover:shadow-xl transition-shadow duration-300 ease-in-out"></div>
              </div>
            </div>
          </div>
        </div>

        <div className="overflow-x bg-blue-500 mt-20 max-w-5xl m-auto p-10 rounded-md">
          <h4 className="text-white text-5xl pb-20">Portfolio</h4>
          <div className="flex relative flex-nowrap -ml-40 overflow-x-auto justify-between justify-center m-auto">
            <div className="flex-auto cartalk rounded-md shadow-2xl p-10 pt-72 max-w-5xl m-auto">
              <h6 className="text-2xl text-white">CarTalk Repair</h6>
            </div>
            <div className="flex-none cartalk rounded-md shadow-2xl p-10 pt-32 flex justify-between max-w-5xl justify-center m-auto">
              <h6 className="text-2xl text-white">CarTalk Repair</h6>
            </div>
            <div className="flex-none cartalk rounded-md shadow-2xl p-10 pt-32 flex justify-between max-w-5xl justify-center m-auto">
              <h6 className="text-2xl text-white">CarTalk Repair</h6>
            </div>
            <div className="flex-none cartalk rounded-md shadow-2xl p-10 pt-32 flex justify-between max-w-5xl justify-center m-auto">
              <h6 className="text-2xl text-white">CarTalk Repair</h6>
            </div>
            <div className="flex-none cartalk rounded-md shadow-2xl p-10 pt-32 flex justify-between max-w-5xl justify-center m-auto">
              <h6 className="text-2xl text-white">CarTalk Repair</h6>
            </div>
          </div>
        </div>
        <div className="mt-28 flex justify-between max-w-5xl justify-center m-auto items-center">
          <div className="flex-1">
            <h6 className="pb-5 text-3xl">About Us</h6>
            <p>
              Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum
        </p>
            <button className="p-3 text-white mt-7 shadow-2xl rounded-md transition duration-500 ease-in-out bg-blue-500 hover:bg-blue-400 transform hover:-translate-y-1 hover:scale-110">Learn About Us</button>
          </div>
          <div className="flex-1">
            <img className="w-100" src="/images/friends-grilling.png"></img>
          </div>
        </div>
      </div>
    </div>
  )
}