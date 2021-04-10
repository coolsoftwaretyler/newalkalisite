import Modal from '../components/Modal'
import Link from 'next/link'

const HeaderAlt = props => {
    return (
        <div className={props.style}>
            <div className="flex justify-between max-w-7xl justify-center m-auto">
                <div className="flex items-center">
                    <a href="/"><img className="w-40" src={props.logo}></img></a>
                </div>
                <div>
                    <div className="dropdown">
                        <button className="dropbtn duration-500 text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Solutions</button>
                        <div className="dropdown-content justify-between bg-black bg-opacity-80 rounded-md shadow-2xl">
                            <div className="p-8 duration-500 flex justify-between max-w-7xl justify-center m-auto">
                                <div>
                                    <div className="text-white font-bold uppercase text-lg">
                                        Solutions
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        SEO
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Local SEO
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        PPC & Retargeting
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Content Marketing
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Social Media Marketing
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Reputation Management
                                    </div>
                                </div>
                                <div>
                                    <div className="text-white font-bold uppercase text-lg">
                                        Web Design
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Logo Design
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Pre-Development Mockups
                                    </div>
                                    <div className="text-white font-bold uppercase text-lg pt-6">
                                        Web Development
                                    </div>
                                    <Link href="/services/web-development/wordpress-website-development">
                                        <a>
                                            <div className="text-alkaligrey-400 text-lg pt-6">
                                                WordPress Websites
                                            </div>
                                        </a>
                                    </Link>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        E-commerce Websites
                                    </div>
                                    <div className="text-alkaligrey-400 text-lg pt-6">
                                        Custom Websites
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href="/clients"><a className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Clients</a></Link>
                    <a href="#" className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">About</a>
                    <a href="/contact" className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Contact</a>
                </div>
                <div>
                    <Modal
                        style="mt-1 p-3 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                        text="Schedule a call"
                    />
                </div>
            </div>
        </div>
    )
}

export default HeaderAlt