import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'
import SearchEngineMetrics from '../../../components/Services/SearchEngineMetrics'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock';
import LocalSEO from '../../../content/servicePages/localSeo'
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


function LocalSearchEngineOptimization() {
    const seoImage1 = LocalSEO.text1.map(text1 =>
        <StandardImage
            image={text1.image}
            imageAngle="none"
        />
    )

    const seoText1 = LocalSEO.text1.map(text1 =>
        <StandardTextBlock
            title={text1.title}
            text={text1.text}
        />
    )

    const seoImage2 = LocalSEO.text2.map(text2 =>
        <StandardImage
            image={text2.image}
            imageAngle="none"
        />
    )

    const seoText2 = LocalSEO.text2.map(text2 =>
        <StandardTextBlock
            title={text2.title}
            text={text2.text}
        />
    )

    const seoImage3 = LocalSEO.text3.map(text3 =>
        <StandardImage
            image={text3.image}
            imageAngle="none"
        />
    )

    const seoText3 = LocalSEO.text3.map(text3 =>
        <StandardTextBlock
            title={text3.title}
            text={text3.text}
        />
    )

    const seoImage4 = LocalSEO.text4.map(text4 =>
        <StandardImage
            image={text4.image}
            imageAngle="none"
        />
    )

    const seoText4 = LocalSEO.text4.map(text4 =>
        <StandardTextBlock
            title={text4.title}
            text={text4.text}
        />
    )

    const seoImage5 = LocalSEO.text5.map(text5 =>
        <StandardImage
            image={text5.image}
            imageAngle="none"
        />
    )

    const seoText5 = LocalSEO.text5.map(text5 =>
        <StandardTextBlock
            title={text5.title}
            text={text5.text}
        />
    )

    return (
        <div>
            <CombinedNavigation />
            {ServiceHeroContent.searchEngineOptimization.map(searchEngineOptimization =>
                <ServiceHero
                    sub={searchEngineOptimization.sub}
                    title={searchEngineOptimization.title}
                    backgroundImg={searchEngineOptimization.backgroundImg}
                />
            )}
            <TwoColumnLayout
                style=""
                child2={seoImage1}
                child1={seoText1}
            />
            <TwoColumnLayout
                flexType="reverse"
                style="bg-alkaligrey-300"
                child1={seoImage2}
                child2={seoText2}
            />
            <div className="py-24">
                <h6 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight">Our Local SEO Services</h6>
                <div className="max-w-7xl m-auto grid grid-cols-3 gap-x-14 gap-y-14 pt-24">
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Google My Business Optimization</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Keyword Research & Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">On-Site Optimization</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Link Building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Google Local Service Ads Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Content Writing</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Local Citation Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Franchise SEO</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Service Platform Management</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                </div>
                <div className="text-center pt-24">
                    <Modal
                        style="p-3 px-6 font-semibold text-alkaligrey-400 hover:text-white shadow-2xl rounded-md transition duration-500 ease-in-out border border-alkaligrey-400 hover:bg-alkaligrey-400"
                        text="Schedule a call"
                    />
                </div>
            </div>
            <div className="bg-alkaligrey-300 py-24">
                <div className="flex space-x-0 lg:space-x-14 flex-col lg:flex-row m-auto justify-between items-center max-w-7xl">
                    <div className="w-full lg:w-1/2 pb-10">
                        <Image
                            src="/images/audit.png"
                            width={490}
                            height={335}
                            quality={100}
                        />
                    </div>
                    <div className="w-full lg:w-1/2 px-14 lg:px-0">
                        <h2 className="text-2xl md:text-3xl font-play font-bold leading-tight">Get a Complementary Local SEO Audit</h2>
                        <form className="flex rounded-md my-7 shadow-2xl">
                            <input className="rounded-l-lg border-t pl-4 w-screen border-b border-l text-gray-800 border-gray-200 bg-white" placeholder="yourwebsite.com" />
                            <button className="p-3 px-6 font-semibold text-white rounded-r-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700">Submit</button>
                        </form>
                        <p>Our Local SEO specialists are standing by to audit your website and provide a detailed and actionable report.</p>
                    </div>
                </div>
            </div>

            <TwoColumnLayout
                style="mb-3"
                child2={seoImage3}
                child1={seoText3}
            />
            <div className="px-14 pt-36 2xl:px-0">
                <h3 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight pb-14">Hear It Straight From Our Clients</h3>
            </div>
            <div className="relative z-20 -mb-48 ">
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
                style="pt-80 mt-3 bg-alkaligrey-300"
                child1={seoImage4}
                child2={seoText4}
            />
            <div className="bg-alkaligrey-300">
                <div className="pt-24 pb-36 max-w-7xl m-auto">
                    <h6 className="text-3xl md:text-4xl pb-14 text-center font-play font-bold m-auto leading-tight">You Give Us Trust, We Give You Results</h6>
                    <div className="grid grid-cols-3 gap-x-14 gap-y-14 pt-10">
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                        <div className="flex items-center bg-white rounded-md shadow-2xl justify-between px-7 py-4">
                            <div>
                                <img className="w-36" src="/images/alkalismall.png" />
                            </div>
                            <div>
                                <h3 className="text-alkali-500 relative font-play font-bold text-4xl py-4 pl-5 pb-4">5,319</h3>
                                <p className="pl-5 uppercase text-md">Top 5 Keywords</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <TwoColumnLayout
                style="pt-36"
                child2={seoImage5}
                child1={seoText5}
            />
            <div className="bg-alkaligrey-300 pb-24">
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
                    />
                )}
                <div className="max-w-5xl bg-white py-20 m-auto rounded-md shadow-2xl text-alkali-500 text-center text-white text-3xl z-20 relative">
                    Start Seeing Results
            </div>
            </div>
        </div>
    )
}

export default LocalSearchEngineOptimization

