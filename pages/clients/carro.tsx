import HeaderAlt from '../../components/HeaderAlt'
import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import SectionIntro from '../../components/SectionIntro'
import SplitTextImage from '../../components/SplitTextImage'
import SplitTextImageAlt from '../../components/SplitTextImageAlt'
import PageHero from '../../components/PageHero'
import StaticTestimonial from '../../components/StaticTestimonial'
import SimpleSlider from '../../components/SimpleSlider'
import ClientContainer from '../../components/ClientContainer'
import Link from 'next/link'

function Carro2() {
  return <div className="m-auto">
    <div>
      <HeaderAlt />
    </div>
    <PageHero
      title="Carro"
      text="Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.      "
      button1="Learn More"
      button1url="https://google.com"
      button2=""
      image="../images/carro-figure.png"
    />
    <svg id="section-divider" className="-mt-36 z-0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 66"><polygon className="cls-1" points="0 0 500 43 500 66 0 66 0 0" /></svg>
    <SplitTextImageAlt
      style="bg-alkaligrey-300 -mt-3 pb-64"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-before.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
    <div className="pb-24 -mt-36">
      <StaticTestimonial
        style="max-w-7xl m-auto shadow-2xl"
        quote="Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."
        name="-Eric Sanchez, Operations Manager"
        background="../images/carro-testimonial-bg.jpg"
        logo="../images/carro-logo-white.png"
      />
    </div>
    <div className="p-4 pt-16 pb-24 flex justify-between items-center max-w-7xl m-auto">
      <div><h3 className="text-4xl font-play font-bold max-w-2xl m-auto mb-14 leading-tight">We're here to realize your vision.</h3></div>
      <div className="-mt-14">
        <Modal
          style="p-3 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
          text="Schedule a call"
        />
      </div>
    </div>
    <SplitTextImage
      style="pb-24"
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-desktop.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
    <ResponsiveScreens
      style="text-center pt-14"
      link="https://getcarro.com"
      title="First Impressions Matter Experience Their Website For Yourself"
      buttonName="Visit Site"
      desktopImgL="../images/carro-desktop-brand.png"
      desktopImgR="../images/carro-desktop-score.png"
      tabletImg="../images/carro-tablet.png"
      phoneImg="../images/carro-phone.png"
    />
    <div className="bg-alkaligrey-300 -mt-36 pt-36 pb-48">
      <SimpleSlider />
    </div>
    <div className="max-w-7xl m-auto my-36">
      <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7 pb-5">Other Clients</h3>
      <ul className="group flex flex-wrap max-w-7xl space-x-10 m-auto transition duration-500">
        <Link href="/clients/carro">
          <a>
            <ClientContainer
              style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
              title="Carro"
            />
          </a>
        </Link>
        <Link href="/clients/carro">
          <a>
            <ClientContainer
              style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
              title="Carro"
            />
          </a>
        </Link>
        <Link href="/clients/carro">
          <a>
            <ClientContainer
              style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
              title="Carro"
            />
          </a>
        </Link>
        <Link href="/clients/carro">
          <a>
            <ClientContainer
              style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
              title="Carro"
            />
          </a>
        </Link>
      </ul>
    </div>
  </div>
}

export default Carro2