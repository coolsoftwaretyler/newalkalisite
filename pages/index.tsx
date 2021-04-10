import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import HomeHero from '../components/HomeHero'
import Partners from '../components/Partners'
import SimpleSlider from '../components/SimpleSlider'
import SplitTextImageAlt from '../components/SplitTextImageAlt'
import SplitTextImage from '../components/SplitTextImage'
import Link from 'next/link'
import ResponsiveScreens from '../components/ResponsiveScreens'
import Modal from '../components/Modal'
import Footer from '../components/Footer'
import Parts from '../components/Parts';

export default function Home() {
  return (
    <div className="">
      <style jsx>{`
      <div className="particle-header">
      <Parts />
      </div>
`}</style>
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
        {/* <SimpleSlider
          backgroundOverlay1={'absolute inset-0 bg-alkali-600 opacity-75'}
          logo1={'../../images/CarTalk-Repair.png'}
          name1={'-Cody Lintz, Owner of CarTalk Repair'}
          quote1={'Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali we did. They have provided us the tools we need to adequately serve our customers.'}
          cta1={'Learn more about CarTalks project &rarr;'}
          background2="../../images/carro-testimonial-bg.jpg"
          backgroundOverlay2={'absolute inset-0 bg-pink-300 opacity-75'}
          logo2={'../../images/carro-logo-white.png'}
          name2={'-Eric Sanchez, Operations Manager'}
          quote2={'Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.'}
          cta2={'Learn more about Carros project &rarr;'}
        /> */}
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
      <div className="p-4 py-24 bg-alkali-500">
        <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
          <div><h3 className="text-4xl font-play font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
          <div className="">
            <Modal
              style="p-3 px-6 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkali-700"
              text="Schedule a call"
            />
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
      <Footer />
    </div>
  )
}