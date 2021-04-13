import Header from '../../../components/Header'
import Modal from '../../../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp, faLongArrowAltRight, faPaintBrush, faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceLeadSection from '../../../components/ServiceLeadSection'
import 'react-vertical-timeline-component/style.min.css';
import TestimonialSlider from '../../../components/TestimonialSlider'
import TestimonialSlide from '../../../components/TestimonialSlide'
import Testimonials from '../../../content/testimonials'
import TwoColumnLayout from '../../../components/TwoColumnLayout'
import Wordpress from '../../../content/servicePages/wordpress'
import Integration from '../../../components/Integration'
import OurProcess from '../../../content/servicePages/ourProcess'
import OurProcessComp from '../../../components/OurProcess'
import TwoColumnLayoutTwo from '../../../components/TwoColumnLayoutTwo'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock'
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import ServiceHeader from '../../../components/ServiceHeader';

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

    const responsiveDesignImage = Wordpress.customBuilt.map(responsiveDesign =>
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

    return <div className="m-auto">
        <div>
            <Header
                headerColor="blue"
            />
            {ServiceHeroContent.wordpress.map(wordpress =>
                <ServiceHeader
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
                        <h3 className="text-4xl font-play font-bold m-auto leading-tight">WordPress Website Development</h3>
                        <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis iaculis cursus ex scelerisque pellentesque. Fusce fringilla ex sit amet ante aliquet volutpat. Maecenas laoreet purus in nulla rutrum porta. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Suspendisse congue erat vitae quam mattis, eu gravida ligula posuere. Phasellus at lectus quam. Nullam orci leo, sodales sit amet varius blandit, pharetra vel quam. Sed fringilla in est eu cursus.</p>
                    </div>
                    <div className="z-0 pointer-events-none">
                        <div className="angled-mockup rounded-md shadow-2xl">
                            <div className="browser-mockup z-0">
                                <img className="rounded-b-md" src="../../images/wordpress-stats.webp" width="100%" height="auto" />
                            </div>
                            <div className="bg-white stat-container float-right -mr-6 shadow-2xl p-7 rounded-md text-center uppercase font-medium text-sm -mt-14 relative">
                                <p className="pb-4">Wordpress Statistics</p>
                                <div className="flex justify-between items-center max-w-7xl m-auto">
                                    <div className="w-1/2 m-auto -ml-3 border-r">
                                        <p className="font-bold text-5xl pb-4"><FontAwesomeIcon className="text-sm mb-5 mr-3" icon={faCaretUp}></FontAwesomeIcon>40%</p>
                                        <p className="text-xs ml-4">Sites Use WordPress</p>
                                    </div>
                                    <div className="w-1/2 m-auto">
                                        <p className="font-bold text-5xl pb-4"><FontAwesomeIcon className="text-sm mb-5 mr-3" icon={faCaretUp}></FontAwesomeIcon>150%</p>
                                        <p className="text-xs ml-4">Monthly Leads Request</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <TwoColumnLayoutTwo
            style="bg-alkaligrey-300"
            child1={customBuiltText}
            child2={customBuiltImage}
        />

        <div className="bg-alkaligrey-300 p-4 pt-0 pb-24 px-0 lg:px-14">
            <div className="p-4 flex flex-col lg:flex-row space-x-24 justify-between max-w-7xl m-auto">
                <div className="w-full lg:w-1/2">
                    <h4 className="text-4xl font-play font-bold m-auto leading-tight pt-7">Advantages:</h4>
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
                <div className="w-1/2">
                    <h4 className="text-4xl font-play font-bold m-auto leading-tight pt-7">Disadvantages:</h4>
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
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel malesuada tellus. Quisque id arcu tincidunt, congue leo vitae, vehicula justo. Vestibulum turpis lectus, tincidunt quis massa nec, elementum gravida ligula. Integer elementum viverra ipsum in malesuada. Donec semper est egestas placerat pretium. Cras tincidunt vel odio in."
            buttonText="Schedule a Discovery Call"

        />
        <div className="py-24">
            <h6 className="text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Components of Custom WordPress Website Development</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        <TwoColumnLayoutTwo
            child1={responsiveDesignImage}
            child2={responsiveDesignText}
        />

        <TwoColumnLayoutTwo
            style="bg-alkaligrey-300 pb-96 mb-6"
            child1={seoText}
            child2={seoImage}
        />

        <div className="-mt-72">
            <h3 className="text-4xl text-center font-play font-bold m-auto leading-tight pb-10">Hear It Straight From Our Clients</h3>
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
        <TwoColumnLayoutTwo
            child1={userExperienceText}
            child2={userExperienceImage}
        />
 
        <TwoColumnLayoutTwo
            style="bg-alkaligrey-300"
            child1={performanceImage}
            child2={performanceText}
        />

        <TwoColumnLayoutTwo
            child1={conversionText}
            child2={conversionImage}
        />

        <div className="py-24 bg-white">
            <h6 className="text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Endless Integrations</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        <Integration
            style="bg-white pb-24 py-14"
        />
        <div className="py-24">
            <h6 className="text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">How Our Process Works</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        {OurProcess.wordpress.map((wordpress, index) =>
            <OurProcessComp
                style="bg-alkaligrey-300"
                title={wordpress.title}
                step={wordpress.step}
                icon={wordpress.icon}
                type={index}
            />
        )}

    </div>
}

export default WordPressWebsiteDevelopment