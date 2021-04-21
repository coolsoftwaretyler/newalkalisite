import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'
import SearchEngineMetrics from '../../../components/Services/SearchEngineMetrics'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock';
import PPC from '../../../content/servicePages/payPerClick'
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


function PayPerClick() {
    const seoImage1 = PPC.text1.map(text1 =>
        <StandardImage
            image={text1.image}
            imageAngle="none"
        />
    )

    const seoText1 = PPC.text1.map(text1 =>
        <StandardTextBlock
            title={text1.title}
            text={text1.text}
        />
    )

    const seoImage2 = PPC.text2.map(text2 =>
        <StandardImage
            image={text2.image}
            imageAngle="none"
        />
    )

    const seoText2 = PPC.text2.map(text2 =>
        <StandardTextBlock
            title={text2.title}
            text={text2.text}
        />
    )

    const seoImage3 = PPC.text3.map(text3 =>
        <StandardImage
            image={text3.image}
            imageAngle="none"
        />
    )

    const seoText3 = PPC.text3.map(text3 =>
        <StandardTextBlock
            title={text3.title}
            text={text3.text}
        />
    )

    const seoImage4 = PPC.text4.map(text4 =>
        <StandardImage
            image={text4.image}
            imageAngle="none"
        />
    )

    const seoText4 = PPC.text4.map(text4 =>
        <StandardTextBlock
            title={text4.title}
            text={text4.text}
        />
    )

    const seoImage5 = PPC.text5.map(text5 =>
        <StandardImage
            image={text5.image}
            imageAngle="none"
        />
    )

    const seoText5 = PPC.text5.map(text5 =>
        <StandardTextBlock
            title={text5.title}
            text={text5.text}
        />
    )

    return (
        <div>
            <CombinedNavigation 
            
            />
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
                <h6 className="text-3xl md:text-4xl text-center font-play font-bold m-auto leading-tight">AdWords Isn't The Only Game in Town Anymore</h6>
                <p className="text-center text-alkaligrey-400 pt-4 text-lg max-w-xl m-auto">We can manage your pay-per-click campagins on more than just AdWords. See what types of campaigns we can manage for you below:</p>
                <div className="max-w-7xl m-auto grid grid-cols-3 gap-x-14 gap-y-14 pt-24">
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Search</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Local Service Ads</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Shopping</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Conversion Flywheel</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Social Advertising</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div className="rounded shadow-2xl p-7">
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Tailored Reporting</h4>
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
            <TwoColumnLayout
                style="bg-alkaligrey-300 pb-100 mb-3"
                child2={seoImage3}
                child1={seoText3}
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
                flexType="reverse"
                style="pt-36"
                child1={seoImage4}
                child2={seoText4}
            />
            <div className="bg-alkaligrey-300">
                <div className="py-36 max-w-7xl m-auto">
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

export default PayPerClick

