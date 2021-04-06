import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import SectionIntro from '../../components/SectionIntro'
import AngledSplitTextImage from '../../components/AngledSplitTextImage'
import SplitTextImageAlt from '../../components/SplitTextImageAlt'
import PageHero from '../../components/PageHero'
import StaticTestimonial from '../../components/StaticTestimonial'
import SimpleSlider from '../../components/SimpleSlider'
import ClientContainer from '../../components/ClientContainer'
import Link from 'next/link'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import ClientsSummary from "../../components/ClientsSummary"

function Carro2() {
  return <div className="m-auto">
    <div className="carro-bg">
      <Header />
      <div className="max-w-7xl flex justify-between items-center m-auto py-14">
        <div className="ml-7 2xl:mx-0">
          <p className="uppercase text-white font-open font-medium">Technology</p>
          <h1 className="text-6xl text-white font-play font-bold py-7">Carro</h1>
          <div className="max-w-7xl m-auto">
            <div className="border border-white p-2 rounded-md text-xs text-center text-white uppercase font-open font-bold hover:bg-white hover:text-alkaligrey-800">
              Web Development
          </div>
          </div>
        </div>
        <div>
          <img src="../images/carro-header-image.png"></img>
        </div>
      </div>
    </div>
    <div className="py-24 flex flex-col md:flex-row justify-between max-w-7xl items-center justify-center m-auto mx-7 xl:mx-auto">
      <div className="w-full xs:w-1/2 pb-14 lg:pb-0">
        <h3 className="text-4xl alkaligrey-800 font-play font-bold m-auto leading-tight pb-4 lg:pb-7">About Carro</h3>
        <a href="" className="uppercase font-open font-bold text-lg text-alkali-500 duration-500 hover:mr-3">Visit Website</a><FontAwesomeIcon className="text-alkali-500 ml-3" icon={faLongArrowAltRight}></FontAwesomeIcon>
      </div>
      <div className="w-full xs:w-1/2 ">
        <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal">Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.</p>
      </div>
    </div>
    <div id="arrow-container-container2">
      <div id="arrow-container2">
        <div className="screenshot-container2">
          <img className="screenshot-d2" src="../images/carro-devices.png"></img>
        </div>
      </div>
    </div>

    <style jsx>{`
    <div id="arrow-container-container2">
    <div id="arrow-container">
      <div className="screenshot-container2">
        <img className="screenshot-d2" src="../images/carro-devices.png"></img>
      </div>
    </div>
  </div>
`}</style>

    <SplitTextImageAlt
      style="bg-alkaligrey-300 pt-36 pb-72 overflow-hidden"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-before.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
    <div className="pb-24 -mt-36">
      <StaticTestimonial
        style="max-w-7xl m-auto shadow-2xl rounded-md overflow-hidden mx-7 xl:mx-auto"
        quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
        name="-Eric Sanchez, Operations Manager"
        background="../images/carro-testimonial-bg.jpg"
        backgroundOverlay="absolute inset-0 bg-pink-300 opacity-75"
        logo="../images/carro-logo-white.png"
      />
    </div>
    <AngledSplitTextImage
      style="pb-24 overflow-hidden"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-desktop.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
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
    <div className="">
      <ResponsiveScreens
        style="text-center py-36 overflow-hidden"
        link="https://getcarro.com"
        title="First Impressions Matter Experience Their Website For Yourself"
        buttonName="Visit Site"
        desktopImgL="../images/carro-desktop-brand.png"
        desktopImgR="../images/carro-desktop-score.png"
        tabletImg="../images/carro-tablet.png"
        phoneImg="../images/carro-phone.png"
      />
    </div>
    <ClientsSummary
      client1Style={{ backgroundImage: "url(../../images/cartalk-repair-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      client1Title="CarTalk Repair"
      client1Link="https://cartalkrepair.com"
      client2Style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      client2Title="Carro"
      client2Link="https://carro.com"
      client3Style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      client3Title="Carro"
      client3Link="https://carro.com"
      client4Style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
      client4Title="Carro"
      client4Link="https://carro.com"
    />
  </div>
}

export default Carro2