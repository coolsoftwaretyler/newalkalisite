import Modal from '../../components/Modal'
import Link from 'next/link'
import SiteMap from '../../content/siteMap'
import SiteMapContainer from '../../components/SiteMapContainer'
import Image from 'next/image'

const DesktopNavigation = props => {
    const headerDropDownColor = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} dropbtn font-play duration-500 font-bold uppercase inline-block p-5`
    }
    const headerLogoColor = () => {
        return `${props.headerColor === "white" ? '/images/alkali-logo-white.png' : '/images/alkali-logo-blue.png'}`
    }
    const headerCTAColor = () => {
        return `${props.headerColor === "white" ? 'text-alkaligrey-800 bg-white hover:bg-alkaligrey-700' : 'text-white bg-alkali-500 hover:bg-alkali-700'} mt-1 p-3 px-6 font-semibold shadow-2xl rounded-md transition duration-500 ease-in-out`
    }
    const headerNonDropDown = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} font-play duration-500 font-bold uppercase inline-block p-5`
    }
    return (
        <div className={props.style}>
            <div className="flex justify-between max-w-7xl justify-center m-auto py-7">
                <div className="flex items-center">
                    <a style={{ fontSize: '0' }}>
                        <Image
                            src="/images/alkali-logo-blue.png"
                            width={160}
                            height={34}
                            alt=""
                        />
                    </a>
                </div>
                <div>
                    <a className="dropdown">
                        <div className={headerDropDownColor()}>Solutions</div>
                        <div className="dropdown-content justify-between bg-black bg-opacity-80 z-30 rounded-md shadow-2xl">
                            <div className="p-8 flex justify-between max-w-7xl justify-center m-auto text-white">
                                <div>
                                    <a>
                                        <div className="font-bold uppercase text-lg">
                                            Digital Marketing
                                            </div>
                                    </a>
                                    {SiteMap.digitalMarketing.links.map(digitalMarketing =>
                                        <SiteMapContainer
                                            name={digitalMarketing.name}
                                            slug={digitalMarketing.slug}
                                        />
                                    )}
                                </div>
                                <div>
                                    <a>
                                        <div className="font-bold uppercase text-lg">
                                            Web Design
                                        </div>
                                    </a>
                                    {SiteMap.webDesign.links.map(webDesign =>
                                        <SiteMapContainer
                                            name={webDesign.name}
                                            slug={webDesign.slug}
                                        />
                                    )}
                                    <a>
                                        <div className="font-bold uppercase text-lg pt-10">
                                            Web Development
                                        </div>
                                    </a>
                                    {SiteMap.webDevelopment.links.map(webDevelopment =>
                                        <SiteMapContainer
                                            name={webDevelopment.name}
                                            slug={webDevelopment.slug}
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </a>
                    <Link href="/clients"><a className={headerNonDropDown()}>Clients</a></Link>
                    <a href="#" className={headerNonDropDown()}>About</a>
                    <a href="/contact" className={headerNonDropDown()}>Contact</a>
                </div>
                <div>
                    <Modal
                        style={headerCTAColor()}
                        text="Schedule a call"
                    />
                </div>
            </div>
        </div>
    )
}
export default DesktopNavigation