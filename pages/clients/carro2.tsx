import HeaderAlt from '../../comps/HeaderAlt'
import Modal from '../../comps/Modal'
import ResponsiveScreens from '../../comps/ResponsiveScreens'
import SectionIntro from '../../comps/SectionIntro'
import SplitTextImage from '../../comps/SplitTextImage'
import SplitTextImageAlt from '../../comps/SplitTextImageAlt'
import PageHero from '../../comps/PageHero'
import StaticTestimonial from '../../comps/StaticTestimonial'

function Carro2() {
  return <div className="m-auto">
    <div>
      <HeaderAlt />
    </div>
    <PageHero
      title="Carro"
      text="Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.      "
      button1="Our Features"
      button1url="https://google.com"
      button2=""
      image="../images/brands.png"
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
      style="text-center"
      link="https://getcarro.com"
      title="First Impressions Matter Experience Their Website For Yourself"
      buttonName="Visit Site"
      desktopImgL="../images/carro-desktop-brand.png"
      desktopImgR="../images/carro-desktop-score.png"
      tabletImg="../images/carro-tablet.png"
      phoneImg="../images/carro-phone.png"
    />
    <div className="py-14">
      <SectionIntro
        client="Carro"
        title="Bringing Digital Designs to Life"
        sub="Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with  influencers and each other so they can sell more, together."
      />
      <div className="max-w-6xl m-auto mt-7">
        <img className="w-5/6 xl:w-full m-auto z-0" src="../images/carro-hero.jpg"></img>
      </div>
      <div className="py-48">
        <SplitTextImage
          sub="The Goal"
          title="Rebrand Existing Site"
          image="../images/carro-before.png"
          text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
        />
      </div>
      <div className="p-4 pt-0 pb-36 flex justify-between items-center max-w-7xl m-auto">
        <div><h3 className="text-4xl font-play font-bold max-w-2xl m-auto mb-14 leading-tight">We're here to realize your vision.</h3></div>
        <div className="-mt-14"><Modal /></div>
      </div>
      <div className="pb-48">
        <SplitTextImageAlt
          sub="The Goal"
          title="Rebrand Existing Site"
          image="../images/carro-desktop.png"
          text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
        />
      </div>
    </div>
    <div className="pt-48 pb-36 -mt-72 bg-alkali-500">
      <div className="mt-36 rounded-md shadow-2xl bg-white text-white max-w-5xl m-auto p-16">
        <div className="font-medium text-black text-3xl">"Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial."</div>
        <div className="font-medium text-black text-xl pt-7">Eric Sanchez</div>
        <div className="text-black text-l">Operations Manager, Carro</div>
      </div>
    </div>
    <div className="p-4 py-36 flex justify-between items-center max-w-7xl m-auto">
      <div><h3 className="text-4xl font-play font-bold max-w-2xl m-auto mb-14 leading-tight">We're here to realize your vision.</h3></div>
      <div className="-mt-14"><Modal /></div>
    </div>
    <SplitTextImage
      sub="The Goal"
      title="Rebrand Existing Site"
      image="../images/carro-desktop.png"
      text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
    />
  </div>
}

export default Carro2