import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'
import SearchEngineMetrics from '../../../components/Services/SearchEngineMetrics'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock';
import SEO from '../../../content/servicePages/seo'
import TwoColumnLayout from '../../../components/TwoColumnLayout';
import ServiceLeadSection from '../../../components/ServiceLeadSection';
import Modal from '../../../components/Modal';
import TestimonialSlide from '../../../components/TestimonialSlide';
import TestimonialSlider from '../../../components/TestimonialSlider'
import Testimonials from '../../../content/testimonials'
import seoProcess from '../../../content/servicePages/ourProcess'
import OurProcessComp from '../../../components/Services/OurProcess'
import Image from 'next/image'
import CombinedNavigation from '../../../components/Navigation/CombinedNavigation';
import SocialServices from '../../../content/servicePages/serviceBlocks'
import ServiceBlocks from '../../../components/Services/ServiceBlocks';
import ResultsBlocks from '../../../components/Services/ResultsBlocks';
import SEOResults from '../../../content/servicePages/resultsBlock'
import FAQDropdown from '../../../components/Services/FAQDropdown';
import SocialFAQ from '../../../content/servicePages/faq'
import SocialMarketing from '../../../content/servicePages/social'
import Integrations from '../../../components/Integration';
import SocialIntegrations from '../../../content/servicePages/integrationContent'

function SocialMediaMarketing() {
    const socialImage1 = SocialMarketing.text1.map(text1 =>
        <StandardImage
            image={text1.image}
            imageAngle="none"
        />
    )

    const socialText1 = SocialMarketing.text1.map(text1 =>
        <StandardTextBlock
            title={text1.title}
            text={text1.text}
        />
    )

    const socialImage2 = SocialMarketing.text2.map(text2 =>
        <StandardImage
            image={text2.image}
            imageAngle="none"
        />
    )

    const socialText2 = SocialMarketing.text2.map(text2 =>
        <StandardTextBlock
            title={text2.title}
            text={text2.text}
        />
    )

    const socialImage3 = SocialMarketing.text3.map(text3 =>
        <StandardImage
            image={text3.image}
            imageAngle="none"
        />
    )

    const socialText3 = SocialMarketing.text3.map(text3 =>
        <StandardTextBlock
            title={text3.title}
            text={text3.text}
        />
    )

    const socialImage4 = SocialMarketing.text4.map(text4 =>
        <StandardImage
            image={text4.image}
            imageAngle="none"
        />
    )

    const socialText4 = SocialMarketing.text4.map(text4 =>
        <StandardTextBlock
            title={text4.title}
            text={text4.text}
        />
    )


    return (
        <div>
            <CombinedNavigation

            />
            {ServiceHeroContent.social.map(social =>
                <ServiceHero
                    sub={social.sub}
                    title={social.title}
                    backgroundImg={social.backgroundImg}
                />
            )}
            <TwoColumnLayout
                style=""
                child2={socialImage1}
                child1={socialText1}
            />
            <TwoColumnLayout
                flexType="reverse"
                style="bg-alkaligrey-300"
                child1={socialImage2}
                child2={socialText2}
            />
            <div className="py-24 px-14 2xl:px-0">
                <h6 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight pb-24">Our Social Media Marketing Services</h6>
                <div className="grid grid-cols md:grid-cols-2 xl:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
                    {SocialServices.Social.map(Social =>
                        <ServiceBlocks
                            serviceTitle={Social.serviceTitle}
                            serviceText={Social.serviceText}
                            image={Social.image}
                            altText={Social.altText}
                        />
                    )}
                </div>
            </div>
            <div className="bg-alkaligrey-300 py-24 px-14 2xl:px-0">
                <div className="flex space-x-0 lg:space-x-14 flex-col lg:flex-row m-auto justify-between items-center max-w-7xl">
                    <div className="w-full lg:w-1/2">
                        <Image
                            src="/images/audit.png"
                            width={490}
                            height={335}
                            quality={100}
                        />
                    </div>
                    <div className="w-full lg:w-1/2">
                        <h2 className="text-2xl md:text-3xl font-play font-bold leading-tight">Get a Complementary Social Media Audit</h2>
                        <form className="flex rounded-md my-7 shadow-2xl">
                            <input className="rounded-l-lg border-t pl-4 w-screen border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="yourwebsite.com" />
                            <button className="p-3 px-6 font-semibold text-white rounded-r-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700">Submit</button>
                        </form>
                        <p>Our Social Media Marketing specialists are standing by to audit your social presence and provide a detailed action report.</p>
                    </div>
                </div>
            </div>
            <TwoColumnLayout
                style="bg-white pb-100 mb-3"
                child2={socialImage3}
                child1={socialText3}
            />
            <div className="-mt-72 px-14 2xl:px-0">
                <h3 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight pb-24">Hear It Straight From Our Clients</h3>
            </div>
            <div className="relative z-20 mb-2">
                <TestimonialSlider>
                    {Testimonials.wordpress.map(testimonial =>
                        <TestimonialSlide
                            background={testimonial.background}
                            backgroundOverlay={testimonial.backgroundOverlay}
                            company={testimonial.company}
                            key={`designTestimonialFor${testimonial.company}`}
                            logo={testimonial.logo}
                            altText={testimonial.altText}
                            name={testimonial.name}
                            quote={testimonial.quote}
                        />
                    )}
                </TestimonialSlider>
            </div>
            <TwoColumnLayout
                flexType="reverse"
                style="bg-alkaligrey-300 pt-80 -mt-48"
                child1={socialImage4}
                child2={socialText4}
            />
            <div className="py-24 px-14 2xl:px-0">
                <h6 className="text-3xl md:text-4xl pb-24 text-center font-play font-bold m-auto leading-tight">You Give Us Trust, We Give You Results</h6>
                <div className="grid grid-cols md:grid-cols-2 lg:grid-cols-3 max-w-7xl m-auto gap-x-14 gap-y-14">
                    {SEOResults.SEO.map(SEO =>
                        <ResultsBlocks
                            image={SEO.image}
                            result={SEO.result}
                            resultName={SEO.resultName}
                            altText={SEO.altText}
                        />
                    )}
                </div>
            </div>
            <div className="bg-alkaligrey-300 py-24">
                <h6 className="text-3xl md:text-4xl pb-24 text-center font-play font-bold m-auto leading-tight">Platforms We Work With</h6>
                <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 max-w-3xl m-auto">
                    {
                        SocialIntegrations.social.map((social) =>
                            <div className="relative m-auto" style={{ fontSize: '0' }}>
                                <Image
                                    height={144}
                                    width={144}
                                    quality={100}
                                    className="object-center object-cover pointer-events-none rounded-full duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                                    src={`/images/icons/${social.fileName}.png`}
                                    alt={social.altText}
                                />
                                <div className="IntegrationIconContainer relative z-1">
                                    <div className="IntegrationIcon text-center py-16 m-auto shadow-2xl h-36 w-36 rounded-full bg-center">
                                        <span className="IconSpan transition duration-500 pointer-events-none shadow-2xl relative-30">{social.name}</span>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>
            </div>
            <div className="bg-white">
                <div className="py-24 px-14 2xl:px-0">
                    <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">How Our Process Works</h6>
                    <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
                </p>
                </div>
                {seoProcess.seo.map((seo, index) =>
                    <OurProcessComp
                        style=""
                        title={seo.title}
                        step={seo.step}
                        icon={seo.icon}
                        type={index}
                        isLastItem={index === seoProcess.seo.length - 1}
                    />
                )}
            </div>
            <div className="bg-alkaligrey-300">
                <div className="py-24 max-w-7xl m-auto">
                    <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Frequently Asked Questions About Our Social Media Marketing Services</h6>
                    <div className="w-full px-4 pt-16">
                        <div className="p-2 mx-auto rounded-2xl">
                            <div className="grid grid-cols-1 xl:grid-cols-2 gap-x-10 gap-y-10">
                                {SocialFAQ.Social.map(Social =>
                                    <FAQDropdown
                                        question={Social.question}
                                        answer={Social.answer}
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SocialMediaMarketing

