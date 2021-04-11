import HeaderAlt from '../../../components/HeaderAlt'
import Modal from '../../../components/Modal'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp, faLongArrowAltRight, faPaintBrush, faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceSplitSection from '../../../components/ServiceSplitSection'
import ServiceSplitSectionAlt from '../../../components/ServiceSplitSectionAlt'
import ServiceLeadSection from '../../../components/ServiceLeadSection'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LogoContainer from '../../../components/LogoContainer'
import TestimonialSlider from '../../../components/TestimonialSlider'
import TestimonialSlide from '../../../components/TestimonialSlide'
import Testimonials from '../../../content/testimonials'
import TwoColumnLayout from '../../../components/TwoColumnLayout'
import Wordpress from '../../../content/servicePages/wordpress'
import Integration from '../../../components/Integration'
import OurProcess from '../../../content/servicePages/ourProcess'
import OurProcessComp from '../../../components/OurProcess'

const info = [
    { "company": "CarTalkRepair", "background": "CarTalk-Testimonial-Image.jpg", "backgroundOverlay": "bg-alkali-600", "logo": "CarTalk-Repair.png", "name": "Cody Lintz, Owner", "quote": "Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali we did. They have provided us the tools we need to adequately serve our customers." },
    { "company": "Carro", "background": "carro-testimonial-bg.jpg", "backgroundOverlay": "bg-pink-300", "logo": "carro-logo-white.png", "name": "Eric Sanchez, Operations Manager", "quote": "Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial.Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial Client testimonial." },

];

function WordPressWebsiteDevelopment() {
    return <div className="m-auto">
        <div>
            <HeaderAlt
                style="py-8"
                logo="../../images/alkali-logo-blue.png"
            />
            <div className="client-hero" style={{ backgroundImage: "url(../../images/cartalk-hero.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <div className="max-w-7xl flex justify-between items-center m-auto pt-56 pb-20">
                    <div className="ml-7 2xl:mx-0">
                        <h1 className="portfolio-title font-open text-white uppercase font-open text-md font-bold">WordPress Website Development in Houston</h1>
                        <h2 className="text-6xl text-white font-play font-bold pt-3 py-10 max-w-4xl">Customizing and developing high-performance WordPress websites is what we do</h2>
                        <Modal
                            style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                            text="Schedule a Discovery Call"
                        />
                    </div>
                </div>
            </div>
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
                                <img className="rounded-b-md" src="../../images/wordpress-stats.png" />
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
        {Wordpress.customBuilt.map(wordpress =>
            <TwoColumnLayout
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType="regular"
            />
        )}
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
        {Wordpress.responsiveDesign.map(wordpress =>
            <TwoColumnLayout
                style="bg-white"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType="regular"
            />
        )}
        {Wordpress.seo.map(wordpress =>
            <TwoColumnLayout
                style="bg-alkaligrey-300 pb-96 mb-6"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType=""
            />
        )}
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
        {Wordpress.userExperience.map(wordpress =>
            <TwoColumnLayout
                style="bg-white relative z-0"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType="regular"
            />
        )}
        {Wordpress.performance.map(wordpress =>
            <TwoColumnLayout
                style="bg-alkaligrey-300"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType=""
            />
        )}
        {Wordpress.conversion.map(wordpress =>
            <TwoColumnLayout
                style="bg-white"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType="regular"
            />
        )}
        {Wordpress.conversion.map(wordpress =>
            <TwoColumnLayout
                style="bg-alkaligrey-300"
                title={wordpress.title}
                text={wordpress.text}
                image={wordpress.image}
                altText={wordpress.altText}
                layoutType=""
            />
        )}
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
                step1={wordpress.step1}
                step2={wordpress.step2}
                step3={wordpress.step3}
                step4={wordpress.step4}
                step5={wordpress.step5}
                step6={wordpress.step6}
                step7={wordpress.step7}
                icon={wordpress.icon}
                type={index}
            />
        )}

    </div>
}

export default WordPressWebsiteDevelopment