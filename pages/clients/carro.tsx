import HeaderAlt from '../../comps/HeaderAlt'
import Modal from '../../comps/Modal'
import ResponsiveScreens from '../../comps/ResponsiveScreens'
import SectionIntro from '../../comps/SectionIntro'
import SplitTextImage from '../../comps/SplitTextImage'
import SplitTextImageAlt from '../../comps/SplitTextImageAlt'

function Carro() {
  return <div className="max-w-7xl m-auto">
    <div>
      <HeaderAlt />
    </div>
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
      <ResponsiveScreens 
      style="text-center"
      link="https://google.com" 
      title="First Impressions Matters Experience Their Website For Yourself" 
      buttonName="View Site" 
      desktopImgL="../images/carro-desktop-brand.png" 
      desktopImgR="../images/carro-desktop-score.png" 
      tabletImg="../images/carro-tablet.png" 
      phoneImg="../images/carro-phone.png" 
      />
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

export default Carro