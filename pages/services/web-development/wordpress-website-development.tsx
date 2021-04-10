import HeaderAlt from '../../../components/HeaderAlt'
import Modal from '../../../components/Modal'
import ResponsiveScreens from '../../../components/ResponsiveScreens'
import SimpleSlider from '../../../components/SimpleSlider'
import ServiceBreakdown from '../../../components/ServiceBreakdown'
import SplitTextImage from '../../../components/SplitTextImage'
import SplitTextImageAlt from '../../../components/SplitTextImageAlt'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp, faCheck } from "@fortawesome/free-solid-svg-icons"; // import the icons you need
import ServiceSplitSection from '../../../components/ServiceSplitSection'
import ServiceSplitSectionAlt from '../../../components/ServiceSplitSectionAlt'
import ServiceLeadSection from '../../../components/ServiceLeadSection'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import LogoContainer from '../../../components/LogoContainer'

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
                        <div className="rounded-md shadow-2xl">
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
        <ServiceSplitSection
            style="bg-alkaligrey-300 p-4 py-24 px-0 lg:px-14"
            title="Custom-Built WordPress vs. Templated WordPress"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/wordpress-versus.svg"
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
        <ServiceSplitSection
            style="bg-white p-4 py-24 px-0 lg:px-14"
            title="Headline for Responsive Design"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/user-experience.png"
        />
        <ServiceSplitSectionAlt
            style="bg-alkaligrey-300 p-4 py-24 px-0 lg:px-14 pb-96 mb-6"
            title="Headline for SEO"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/carro-before.png"
        />
        <div className="-mt-72">
            <h3 className="text-4xl text-center font-play font-bold m-auto leading-tight pb-10">Hear It Straight From Our Clients</h3>
            <SimpleSlider
            />
        </div>
        <ServiceSplitSection
            style="bg-white mt-20 p-4 py-24 px-0 lg:px-14"
            title="Headline for User Experience"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/carro-before.png"
        />
        <ServiceSplitSectionAlt
            style="bg-alkaligrey-300 p-4 py-24 px-0 lg:px-14"
            title="Headline for Performance"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/carro-before.png"
        />
        <ServiceSplitSection
            style="bg-white p-4 py-24 px-0 lg:px-14"
            title="Headline for Conversion"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus turpis diam, scelerisque at porta a, vulputate a purus. Fusce ipsum diam, pellentesque a scelerisque sollicitudin, cursus nec tellus. In sit amet laoreet quam. Proin euismod metus ut consectetur ultrices. Suspendisse ac est eget augue venenatis congue ac a odio. Sed feugiat elementum malesuada. Phasellus augue dolor, accumsan quis ante in, eleifend placerat metus."
            image="../../images/responsive.svg"
        />
        <div className="py-24 bg-alkaligrey-300">
            <h6 className="text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Endless Integrations</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-y-10 max-w-7xl m-auto">
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto shadow-2xl">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon2 text-center bg-alkaligrey-300 py-14 m-auto shadow-2xl">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon3 text-center bg-alkaligrey-300 py-14 m-auto shadow-2xl">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon4 text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon5 text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>
            <div className="IntegrationIcon text-center bg-alkaligrey-300 py-14 m-auto">
                <span className="IconSpan">Test Hover</span>
            </div>

        </div>
        <div className="py-24 bg-alkaligrey-300">
            <LogoContainer />
        </div>
        <div className="py-24">
            <h6 className="text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">How Our Process Works</h6>
            <p className="font-open text-center max-w-4xl m-auto text-lg font-normal pt-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec commodo, urna ut ultrices maximus, felis libero ultricies justo, quis bibendum ante felis dictum augue. Etiam efficitur odio non tortor finibus feugiat mollis quis ex. Mauris porta tellus a dignissim vestibulum. Praesent sagittis sodales ex, nec.
            </p>
        </div>
        <VerticalTimeline
            animate={false}
        >
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f8f8f8', color: '#949494', borderRadius: '.375rem' }}
                contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                date="Project Discovery"
                iconStyle={{ background: '#00baff', color: '#' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project Management, Team Leading
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Website Design"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Art Director</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, SEO, Online Marketing
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Website Development"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Search Engine Structuring"
                iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Web Designer</h3>
                <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                <p>
                    User Experience, Visual Design
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Acceptance"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Content Marketing for Web, Mobile and Social Media</h3>
                <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
                <p>
                    Strategy, Social Media
                </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Stakeholder Maintenance"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Agile Development Scrum Master</h3>
                <h4 className="vertical-timeline-element-subtitle">Certification</h4>
                <p>
                    Creative Direction, User Experience, Visual Design
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                className="vertical-timeline-element--education"
                contentStyle={{ background: '#f8f8f8', color: '#949494' }}
                date="Launch"
                iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            >
                <h3 className="vertical-timeline-element-title">Bachelor of Science in Interactive Digital Media Visual Imaging</h3>
                <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
                <p>
                    Creative Direction, Visual Design
            </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
                icon={<FontAwesomeIcon icon={faCaretUp} className="text-4xl"></FontAwesomeIcon>}
            />
        </VerticalTimeline>
    </div>
}

export default WordPressWebsiteDevelopment