import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import ClientCardContainer from '../../components/Clients/ClientCardContainer'
import TestimonialSlide from '../../components/TestimonialSlide'
import Testimonials from '../../content/testimonials'
import TwoColumnLayout from '../../components/TwoColumnLayout'
import StandardImage from '../../components/StandardImage'
import StandardTextBlock from '../../components/StandardTextBlock'
import AmeliaScreenImages from '../../content/clientPages/screenImages' 
import ClientMainPage from '../../content/clientPages/clientMainPage'
import ClientCard from '../../components/Clients/ClientCard'
import ClientContentBlocks from '../../content/clientPages/clientContentBlocks'
import ClientHeader from '../../components/Clients/ClientHeader'
import ClientHeroContents from '../../content/clientPages/clientHeroContent'

function Amelia() {
  const carroGoalImage = ClientContentBlocks.amelia.splice(1, 1).map(amelia =>
    <StandardImage
      imageAngle="left"
      image={amelia.image}
      key={`carroGoalImageClientBlocksFor${amelia.image}`}
    />
  )
  const carroGoalText = ClientContentBlocks.amelia.map(amelia =>
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`ClientContentBlocks${amelia.title}`}
    />
  )
  const carroResultImage = ClientContentBlocks.amelia.map(amelia =>
    <StandardImage
      imageAngle="right"
      image={amelia.image}
      key={`carroResultImageClientBlocksFor${amelia.image}`}
    />
  )
  const carroResultText = ClientContentBlocks.amelia.map(amelia =>
    <StandardTextBlock
      sub={amelia.sub}
      title={amelia.title}
      text={amelia.text}
      key={`carroResultTextClientBlocksFor${amelia.title}`}
    />
  )

  const servicesPerformed = ClientContentBlocks.amelia.map(amelia =>
    <StandardTextBlock
      service={amelia.sub.split(",")}
      key={`servicesPerformedFor${amelia.title}`}
    />
  )

  return <div className="m-auto">
    <div className="">
      {ClientHeroContents.amelia.map(amelia =>
        <ClientHeader
          backgroundOverlay={amelia.backgroundOverlay}
          style="py-48"
          sub={amelia.sub}
          title={amelia.title}
          backgroundImg={amelia.backgroundImg}
          service={amelia.service}
        />
      )}
    </div>
    <div className="py-24 flex flex-col md:flex-row justify-between max-w-7xl items-center justify-center m-auto mx-7 xl:mx-auto">
      <div className="w-full xs:w-1/2 pb-14 lg:pb-0">
        <h3 className="text-4xl alkaligrey-800 font-play font-bold m-auto leading-tight pb-4 lg:pb-7">About Homewatch Amelia</h3>
        <a href="https://homewatchamelia.com" className="uppercase font-open font-bold text-lg text-alkali-500 duration-500 hover:mr-3">Visit Website</a><FontAwesomeIcon className="text-alkali-500 ml-3" icon={faLongArrowAltRight}></FontAwesomeIcon>
      </div>
      <div className="w-full xs:w-1/2 ">
        <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal">Carro is the world’s largest collaborative commerce network, with more than 25,000 brands and 6.5 million influencers. The platform seamlessly enables brands to work with influencers and each other so they can sell more, together.</p>
      </div>
    </div>

    <TwoColumnLayout
      flexType="reverse"
      style="bg-alkaligrey-300 py-24 pb-80 mb-6"
      child1={carroGoalImage}
      child2={carroGoalText}
    >
    </TwoColumnLayout>


    <div className="mx-14">
      <div className="pb-24 -mt-56">
        {Testimonials.amelia.map(amelia =>
          <TestimonialSlide
            style="max-w-7xl m-auto shadow-2xl rounded-md"
            background={amelia.background}
            backgroundOverlay={amelia.backgroundOverlay}
            company={amelia.company}
            key={`designTestimonialFor${amelia.company}`}
            logo={amelia.logo}
            name={amelia.name}
            quote={amelia.quote}
          />
        )}
      </div>
    </div>
    <TwoColumnLayout
      style="bg-white py-24 mb-6"
      child1={carroResultText}
      child2={carroResultImage}
    >
    </TwoColumnLayout>

    <div className="p-4 py-24 bg-alkali-500">
      <div className="flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto mx-3 xl:mx-auto">
        <div><h3 className="text-4xl font-play font-bold max-w-7xl m-auto text-white leading-tight text-center mb-14 lg:mb-0">We're here to realize your vision.</h3></div>
        <div className="">
          <Modal
            style="p-3 px-6 font-semibold text-alkaligrey-800 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700"
            text="Schedule a call"
          />
        </div>
      </div>
    </div>
    {AmeliaScreenImages.amelia.map(amelia =>
      <ResponsiveScreens
        style="py-24 overflow-hidden"
        link="https://getcarro.com"
        desktopLeft={amelia.desktopLeft}
        desktopRight={amelia.desktopRight}
        tablet={amelia.tablet}
        phone={amelia.phone}
        desktopLeftLink={amelia.desktopLeftLink}
        desktopRightLink={amelia.desktopRightLink}
        tabletLink={amelia.tabletLink}
        phoneLink={amelia.phoneLink}
      />
    )}
    <ClientCardContainer>
      {ClientMainPage.map(clientMainPage =>
        <ClientCard
          name={clientMainPage.name}
          backgroundImg={clientMainPage.backgroundImg}
          slug={clientMainPage.slug}
        />
      )}
    </ClientCardContainer>
  </div>
}

export default Amelia