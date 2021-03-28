import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../components/HomeHero'

export default function Home() {
  return (
    <div>
      <HomeHero />
      <div className="services-home pt-48 pb-24 flex justify-between max-w-6xl justify-center m-auto">
        <div className="group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-website.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
      </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="group shadow-2xl mx-10 rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/search-engine-optimization.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
      </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-hosting.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Website Hosting</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
        </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  )
}