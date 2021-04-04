import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../components/HomeHero'
import Partners from '../components/Partners'
import SimpleSlider from '../components/SimpleSlider'
import SplitTextImageAlt from '../components/SplitTextImageAlt'
import SplitTextImage from '../components/SplitTextImage'
import Link from 'next/link'
import ResponsiveScreens from '../components/ResponsiveScreens'

export default function Home() {
  return (
    <div className="">
      <HomeHero />
      <div className="">
        <SplitTextImageAlt
          style="py-36 z-0 -mt-24"
          title="What We Stand For"
          image="../images/home-results-image.png"
          text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
        />
      </div>
      <div className="promise-modern triangleRightBottom triangleRightBottom--blue"></div>
      <div className="bg-alkali-500">
        <div className="py-24 flex items-center max-w-7xl m-auto">
          <div className="w-1/2"><h4 className="font-play text-white font-bold text-3xl text-center">Get a complimentary site audit</h4></div>
          <div className="flex w-1/2 justify-between items-center max-w-lg m-auto border-b pb-3">
            <div className="">
              <input className="border-none bg-transparent placeholder-white focus:outline-none text-white text-lg" type="text" placeholder="www.mycompany.com"></input>
            </div>
            <div className="group uppercase text-white font-bold">
              Request Free Audit <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
            </div>
          </div>
        </div>
      </div>
      <SplitTextImage
        style="homeSliderSeparation bg-alkaligrey-300 py-36 pb-96"
        title="What We Stand For"
        image="../images/home-results-image.png"
        text="Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum"
      />
      <div className="pt-24 -mt-96">
        <h3 className="text-4xl pt-2 pb-16 font-play font-bold text-center">What Our Clients Say</h3>
        <SimpleSlider />
      </div>
      <div className="pt-48">
        <h3 id="services" className="text-4xl font-play font-bold text-center">Our Services</h3>
      </div>
      <div className="services-home py-36 flex max-w-7xl justify-center m-auto">
        <div className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-website.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-1/3 group shadow-2xl mx-10 rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-seo.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
      <div className="services-home pb-36 flex max-w-7xl justify-center m-auto">
        <div className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-website.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">Web Design</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-1/3 group shadow-2xl mx-10 rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <img className="service-icon w-72 -mt-32 pb-4" src="/images/home-seo.png"></img>
          <h3 className="font-play group-hover:text-white text-3xl font-bold pb-5 text-alkali-500">SEO</h3>
          <p className="group-hover:text-white max-w-sm">
            Lorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsumLorem ipsum Lorem ipsum Lorem ipsum
          </p>
          <div className="text-center mt-5 ml-44 shadow-2xl border-2 p-3 rounded-full w-14">
            <FontAwesomeIcon icon={faLongArrowAltRight}></FontAwesomeIcon>
          </div>
        </div>
        <div className="w-1/3 group shadow-2xl rounded-md p-10 hover:bg-alkali-500 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
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
      <div>
        <ResponsiveScreens
          style="text-center pt-14"
          link="https://getcarro.com"
          title="First Impressions Matter Experience Their Website For Yourself"
          buttonName="Our Clients"
          desktopImgL="../images/carro-desktop-brand.png"
          desktopImgR="../images/carro-desktop-score.png"
          tabletImg="../images/carro-tablet.png"
          phoneImg="../images/carro-phone.png"
        />
      </div>
      <SplitTextImage
        style="bg-alkaligrey-300 py-24"
        title="What We Stand For"
        image="../images/carro-before.png"
        text="At Alkali we value relationships over short-term profit. The greatest "
      />
    </div>
  )
}