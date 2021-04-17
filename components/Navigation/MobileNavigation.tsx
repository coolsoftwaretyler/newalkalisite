/*  ./components/Navbar.jsx     */
import { useState } from 'react';
import SiteMap from '../../content/siteMap'
import Image from 'next/image'

const Group = (props) => {
    return (
        <div className="relative group">
            <button>{props.group.title}</button>
            {props.group.links.map(link =>
                <li className="pb-3">
                    <a className="hover:text-white" href={link.slug}>{link.name}</a>
                </li>)}
        </div>
    )
}

export const NavigationRound2 = () => {
    const [active, setActive] = useState(false);

    const handleClick = () => {
        setActive(!active);
    };

    const [toggleSubDigitalMarketing, setSubToggleDigitalMarketing] = useState(false);

    const handleSubDigitalMarketing = () => {
        setSubToggleDigitalMarketing(!toggleSubDigitalMarketing);
    };

    const [toggleSubWebDevelopment, setSubToggleWebDevelopment] = useState(false);

    const handleSubWebDevelopment = () => {
        setSubToggleWebDevelopment(!toggleSubWebDevelopment);
    };

    const [toggleSubWebDesign, setSubToggleWebDesign] = useState(false);

    const handleSubWebDesign = () => {
        setSubToggleWebDesign(!toggleSubWebDesign);
    };

    const digitalMarketingLinks = SiteMap.digitalMarketing
    const webDevelopmentLinks = SiteMap.webDevelopment
    const webDesignLinks = SiteMap.webDesign
    const marketingLinks = [digitalMarketingLinks]
    const developmentLinks = [webDevelopmentLinks]
    const designLinks = [webDesignLinks]


    return (
        <>
            <div className="bg-alkaligrey-200">
                <nav className='flex items-center flex-wrap p-3 max-w-7xl m-auto'>
                    <a className='inline-flex items-center p-2 mr-4 ' style={{fontSize: '0'}}>
                        <Image 
                        src="/images/alkali-logo-blue.png"
                        width={160}
                        height={34}
                        alt=""
                        />
                    </a>
                    <button
                        className=' inline-flex p-3 hover:bg-green-600 rounded lg:hidden text-white ml-auto hover:text-white outline-none'
                        onClick={handleClick}
                    >
                        <svg
                            className='w-6 h-6 text-alkali-500'
                            fill='none'
                            stroke='currentColor'
                            viewBox='0 0 24 24'
                            xmlns='http://www.w3.org/2000/svg'
                        >
                            <path
                                strokeLinecap='round'
                                strokeLinejoin='round'
                                strokeWidth={2}
                                d='M4 6h16M4 12h16M4 18h16'
                            />
                        </svg>
                    </button>

                    <div className={`${active ? '' : 'hidden'} mt-3 justif-center w-full py-10 px-4 lg:inline-flex lg:flex-grow lg:w-auto bg-black rounded-md shadow-2xl bg-opacity-40`}>
                        <div className='lg:inline-flex lg:flex-row lg:ml-auto lg:w-auto w-full lg:items-center items-start  flex flex-col lg:h-auto'>
                            <ul className="">
                                <li>
                                    <a className='lg:inline-flex lg:w-auto w-full uppercase text-2xl px-3 py-2 rounded font-bold items-center justify-center hover:text-alkali-500 '>
                                        Solutions
                                    </a>
                                </li>
                                <li className="pb-4 pt-2">
                                    <button
                                        className='lg:inline-flex px-3 py-2 rounded font-bold uppercase text-xl items-center justify-center pl-7 hover:text-alkali-500'
                                        onClick={handleSubDigitalMarketing}
                                    >
                                        Digital Marketing
                                    </button>
                                    <ul className={`${toggleSubDigitalMarketing ? '' : 'hidden text-alkali-500'} uppercase text-lg lg:inline-flex lg:w-auto w-full px-3 pl-14 py-2 pl-10 rounded font-bold items-center justify-center`}>
                                        {marketingLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="pb-4">
                                    <button
                                        className='lg:inline-flex px-3 py-2 rounded font-bold uppercase text-xl items-center justify-center pl-7 hover:text-alkali-500'
                                        onClick={handleSubWebDevelopment}
                                    >
                                        Web Development
                                    </button>
                                    <ul className={`${toggleSubWebDevelopment ? '' : 'hidden text-alkali-500'} uppercase text-lg lg:inline-flex lg:w-auto w-full px-3 pl-14 py-2 pl-10 rounded font-bold items-center justify-center`}>
                                        {developmentLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="pb-4">
                                    <button
                                        className='lg:inline-flex px-3 py-2 rounded uppercase text-xl font-bold items-center justify-center pl-7 hover:text-alkali-500'
                                        onClick={handleSubWebDesign}
                                    >
                                        Web Design
                                    </button>
                                    <ul className={`${toggleSubWebDesign ? '' : 'hidden text-alkali-500'} uppercase text-lg lg:inline-flex lg:w-auto w-full px-3 pl-14 py-2 pl-10 rounded font-bold items-center justify-center hover:text-white`}>
                                        {designLinks.map(group => <Group group={group} />)}
                                    </ul>
                                </li>
                                <li className="pb-4">
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 uppercase text-2xl rounded font-bold items-center justify-center hover:text-alkali-500 '>
                                        About
                                    </a>
                                </li>
                                <li>
                                    <a className='lg:inline-flex lg:w-auto w-full px-3 py-2 uppercase text-2xl rounded font-bold items-center justify-center hover:text-alkali-500'>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
};

export default NavigationRound2