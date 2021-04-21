import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceLeadSection from '../../../components/ServiceLeadSection'
import TestimonialSlider from '../../../components/TestimonialSlider'
import TestimonialSlide from '../../../components/TestimonialSlide'
import Testimonials from '../../../content/testimonials'
import Wordpress from '../../../content/servicePages/wordpress'
import Integration from '../../../components/Integration'
import wordpressProcess from '../../../content/servicePages/ourProcess'
import OurProcessComp from '../../../components/Services/OurProcess'
import TwoColumnLayout from '../../../components/TwoColumnLayout'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock'
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import ServiceHero from '../../../components/Services/ServiceHero';
import CarroScreenImages from '../../../content/clientPages/screenImages'
import ResponsiveScreens from '../../../components/ResponsiveScreens'
import Image from 'next/image'
import CombinedNavigation from '../../../components/Navigation/CombinedNavigation';
import FAQDropdown from '../../../components/Services/FAQDropdown'
import WordpressFAQ from '../../../content/servicePages/faq'


function WordPressWebsiteDevelopment() {
    const customBuiltImage = Wordpress.customBuilt.map(customBuilt =>
        <StandardImage
            image={customBuilt.image}
            imageAngle="none"
        />
    )

    const customBuiltText = Wordpress.customBuilt.map(customBuilt =>
        <StandardTextBlock
            title={customBuilt.title}
            text={customBuilt.text}
        />
    )

    const responsiveDesignImage = Wordpress.responsiveDesign.map(responsiveDesign =>
        <StandardImage
            image={responsiveDesign.image}
            imageAngle="none"
        />
    )

    const responsiveDesignText = Wordpress.responsiveDesign.map(responsiveDesign =>
        <StandardTextBlock
            title={responsiveDesign.title}
            text={responsiveDesign.text}
        />
    )

    const seoImage = Wordpress.seo.map(seo =>
        <StandardImage
            image={seo.image}
            imageAngle="none"
        />
    )

    const seoText = Wordpress.seo.map(seo =>
        <StandardTextBlock
            title={seo.title}
            text={seo.text}
        />
    )

    const userExperienceImage = Wordpress.userExperience.map(userExperience =>
        <StandardImage
            image={userExperience.image}
            imageAngle="none"
        />
    )

    const userExperienceText = Wordpress.userExperience.map(userExperience =>
        <StandardTextBlock
            title={userExperience.title}
            text={userExperience.text}
        />
    )

    const performanceImage = Wordpress.performance.map(performance =>
        <StandardImage
            image={performance.image}
            imageAngle="none"
        />
    )

    const performanceText = Wordpress.performance.map(performance =>
        <StandardTextBlock
            title={performance.title}
            text={performance.text}
        />
    )

    const conversionImage = Wordpress.conversion.map(conversion =>
        <StandardImage
            image={conversion.image}
            imageAngle="none"
        />
    )

    const conversionText = Wordpress.conversion.map(conversion =>
        <StandardTextBlock
            title={conversion.title}
            text={conversion.text}
        />
    )

    const faqItems = WordpressFAQ.wordpress.map((wordpress) =>
        <FAQDropdown
            question={wordpress.question}
            answer={wordpress.answer}
        />
    )


    return <div className="m-auto overflow-hidden">
        <div>
            <CombinedNavigation />
            {ServiceHeroContent.wordpress.map(wordpress =>
                <ServiceHero
                    sub={wordpress.sub}
                    title={wordpress.title}
                    backgroundImg={wordpress.backgroundImg}
                />
            )}
        </div>
        <div className="">
            <div className="p-4 py-24 px-0 lg:px-14">
                <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
                    <div className="w-5/6 lg:w-1/2 pb-20 lg:pb-0">
                        <h3 className="text-3xl md:text-4xl font-play font-bold m-auto leading-tight">WordPress Website Development</h3>
                        <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">
                            Standing out in a crowded marketplace can be difficult. Our specialty is not only driving interested users to your site and catching their attention once there but enticing them to engage and come back for more. Whether your site is orientated toward Sales, Information, Charity, or something else, we’ve seen it all, so we do it all. Let our team of talented, inspired professionals give your website the attention it deserves, leaving you free to devote your attention to what matters to you!
                        </p>
                    </div>
                    <div className="z-0 pointer-events-none">
                        <div className="angled-mockup rounded-md shadow-2xl mx-14">
                            <div className="browser-mockup z-0">
                                <div style={{ fontSize: '0' }}>
                                    <Image
                                        src="/images/wordpress-stats.png"
                                        alt=""
                                        className="rounded-b-md"
                                        width={588}
                                        height={410}
                                    />
                                </div>
                            </div>
                            <div className="bg-white stat-container float-right -mr-6 shadow-2xl p-7 rounded-md text-center uppercase font-medium text-sm -mt-14 relative">
                                <p className="pb-4">Wordpress Statistics</p>
                                <div className="flex justify-between items-center max-w-7xl m-auto">
                                    <div className="w-1/2 m-auto -ml-3 border-r">
                                        <p className="font-bold text-5xl pb-4"><FontAwesomeIcon className="w-3 relative top-10 ml-3" icon={faCaretUp}></FontAwesomeIcon>40%</p>
                                        <p className="text-xs ml-4">Sites Use WordPress</p>
                                    </div>
                                    <div className="w-1/2 m-auto">
                                        <p className="font-bold text-5xl pb-4"><FontAwesomeIcon className="w-3 relative top-10 ml-3" icon={faCaretUp}></FontAwesomeIcon>150%</p>
                                        <p className="text-xs ml-4">Monthly Leads Request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <TwoColumnLayout
            style="bg-alkaligrey-300"
            child1={customBuiltText}
            child2={customBuiltImage}
        />
        <div className="py-24 pt-0 bg-alkaligrey-300">
            <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between max-w-7xl">
                <div className="w-full lg:w-3/6 px-14 2xl:px-0">
                    <h4 className="text-3xl md:text-4xl font-play font-bold m-auto leading-tight pt-7">Advantages:</h4>
                    <div className="difference-listG">
                        <ul>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                        </ul>
                    </div>
                </div>
                <div className="w-full lg:w-3/6 px-14 2xl:px-0">
                    <h4 className="text-3xl md:text-4xl font-play font-bold m-auto leading-tight pt-7">Disadvantages:</h4>
                    <div className="difference-listR">
                        <ul>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                            <li className="list-item">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <ServiceLeadSection
            style="bg-alkali-500 py-24"
            title="We're Here to Realize Your Vision"
            text="Do you have an idea and vision for your website but not sure where to start? Our team of professionals are standing by to answer any questions you may have. Whether you need a free audit of your current website or want to discuss specifics of a new WordPress website build, we look forward to serving you!"
            buttonText="Schedule a Discovery Call"
        />
        <div className="py-24 px-14 2xl:px-0">
            <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Not All Websites Are Created Equal</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                An unfortunate reality of WordPress websites, particularly template based build are the overeliance on plugins, lack of customization
            </p>
        </div>
        <TwoColumnLayout
            flexType="reverse"
            child1={responsiveDesignImage}
            child2={responsiveDesignText}
        />

        <TwoColumnLayout
            style="bg-alkaligrey-300 pb-100 mb-2"
            child1={seoText}
            child2={seoImage}
        />

        <div className="-mt-72 px-14 2xl:px-0">
            <h3 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight pb-14">Hear It Straight From Our Clients</h3>
        </div>
        <div className="relative z-20">
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
            child1={userExperienceText}
            child2={userExperienceImage}
        />

        <TwoColumnLayout
            style="bg-alkaligrey-300"
            flexType="reverse"
            child1={performanceImage}
            child2={performanceText}
        />
        {CarroScreenImages.carro.map(carro =>
            <ResponsiveScreens
                style="py-36 pb-12 overflow-hidden z-30 relative"
                link="https://getcarro.com"
                desktopLeft={carro.desktopLeft}
                desktopRight={carro.desktopRight}
                tablet={carro.tablet}
                phone={carro.phone}
                desktopLeftLink={carro.desktopLeftLink}
                desktopRightLink={carro.desktopRightLink}
                tabletLink={carro.tabletLink}
                phoneLink={carro.phoneLink}
            />
        )}
        <TwoColumnLayout
            style="bg-alkaligrey-300 z-10 relative -mt-48 pt-72"
            child1={conversionText}
            child2={conversionImage}
        />

        <div className="py-24 px-14 2xl:px-0 bg-white">
            <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Integration Is the Name of the Game</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        <Integration
            style="pb-24 bg-white py-14 px-14 2xl:px-0"
        />
        <div className="bg-alkaligrey-300 pb-24">
            <div className="py-24 px-14 2xl:px-0">
                <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">How Our Process Works</h6>
                <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
            </div>
            {wordpressProcess.wordpress.map((wordpress, index) =>
                <OurProcessComp
                    style=""
                    title={wordpress.title}
                    step={wordpress.step}
                    icon={wordpress.icon}
                    type={index}
                />
            )}
            <div className="max-w-5xl bg-white py-20 m-auto rounded-md shadow-2xl text-alkali-500 text-center text-white text-3xl z-20 relative">
                Start Seeing Results
            </div>
        </div>
        <div className="py-24">
            <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Frequently Asked Questions About Our WordPress Development</h6>
            {faqItems}
        </div>
    </div>
}

export default WordPressWebsiteDevelopment