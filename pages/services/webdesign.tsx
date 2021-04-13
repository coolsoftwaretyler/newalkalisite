import Header from '../../components/Header'
import Modal from '../../components/Modal'
import ResponsiveScreens from '../../components/ResponsiveScreens'
import ServiceBreakdown from '../../components/ServiceBreakdown'
import AngledSplitTextImageAlt from '../../components/AngledSplitTextImageAlt'

function Webdesign() {
    return <div className="m-auto">
        <div>
            <Header 
            headerColor="blue"
            />
        </div>
        <div className="flex justify-between items-center max-w-7xl m-auto pt-12">
            <div className="w-3/5 z-10">
                <div className="">
                    <h1 className="text-6xl font-play font-bold max-w-2xl">Title for website design services title title</h1>
                    <p className="text-lg pt-11 max-w-2xl font-open">How our service is unique. How our service is unique. How our service is unique. How our service is unique. How our service is unique. How our service is unique. How our service is unique. How our service is unique. </p>
                    <div className="flex max-w-7xl m-auto items-center pt-7">
                        <div>
                            <a href="https://google.com">
                                <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                                    Our Features
                            </button>
                            </a>
                        </div>
                        <div className="ml-7">
                            <Modal
                                style="p-3 px-6 font-semibold text-alkali-500 transition duration-500 ease-in-out"
                                text="Contact Us &rarr;"
                            />
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-2/5 z-10">
                <div className="">
                    <img src="../images/carro-after.jpg"></img>
                </div>
            </div>
        </div>
        <div className="py-14">
            <svg id="section-divider" className="-mt-36 z-0" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 66"><polygon className="cls-1" points="0 0 500 43 500 66 0 66 0 0" /></svg>
            <div className="pb-80 -mb-11 bg-alkaligrey-300">
                <div className="max-w-7xl m-auto">
                    <p className="text-alkali-500 uppercase font-open text-md font-bold">Sub Heading</p>
                    <h1 className="text-4xl font-play font-bold m-auto leading-tight pt-7">About Web Services</h1>
                    <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7 pb-24">Making sure your website accurately represents your brand is critical to your success. Making sure your website accurately represents your brand is critical to your success.</p>
                </div>
                <ServiceBreakdown
                    style=""
                    img1="../images/icons/website-responsive3.png"
                    title1="Responsive"
                    text1="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img2="../images/icons/website-search-engine-optimization.png"
                    title2="SEO-Friendly"
                    text2="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img3="../images/icons/website-performance.png"
                    title3="Performance Built"
                    text3="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img4="../images/icons/website-convert.png"
                    title4="Built to Convert"
                    text4="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                />

                <ServiceBreakdown
                    style="pt-16"
                    img1="../images/icons/website-content.png"
                    title1="Content"
                    text1="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img2="../images/icons/website-reporting-analytics.png"
                    title2="Reporting & Analytics"
                    text2="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img3="../images/icons/website-live-chat2.png"
                    title3="Live Chat"
                    text3="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                    img4="../images/icons/website-crm.png"
                    title4="CRM Integration"
                    text4="This is text about the title. This is text about the title. This is text about the title. This is text about the title."
                />
            </div>
        </div>

        <div className="pb-36 -mt-96">
        </div>
        <AngledSplitTextImageAlt
            style="pb-36"
            sub="The Goal"
            title="Rebrand Existing Site"
            image="../images/carro-before.png"
            text="Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website. Talk about rebranding and transitioning old website."
        />
        <ResponsiveScreens
            style="text-center"
            link="https://google.com"
            title="First Impressions Matter Experience Their Website For Yourself"
            buttonName="Our Work"
            desktopImgL="../images/carro-desktop-brand.png"
            desktopImgR="../images/carro-desktop-score.png"
            tabletImg="../images/carro-tablet.png"
            phoneImg="../images/carro-phone.png"
        />
        <div className="p-4 pt-36 flex justify-between items-center max-w-7xl m-auto">
            <div><h3 className="text-4xl font-play font-bold max-w-2xl m-auto mb-14 leading-tight">We're here to realize your vision.</h3></div>
            <div className="-mt-14">
                <Modal
                    text="Schedule a call"
                    style="p-3 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700" />
            </div>
        </div>
    </div>
}

export default Webdesign