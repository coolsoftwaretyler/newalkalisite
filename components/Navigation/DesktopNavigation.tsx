import Modal from '../../components/Modal'
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
        return `${props.headerColor === "white" ? 'text-alkaligrey-800 bg-white hover:bg-alkaligrey-700' : 'text-white bg-alkali-500 hover:bg-alkali-700'} mt-1 p-3 px-6 font-semibold shadow-2xl rounded-md transition transition-colors duration-500 ease-in-out`
    }
    const headerNonDropDown = () => {
        return `${props.headerColor === "white" ? 'text-white hover:text-alkaligrey-700' : 'hover:text-alkali-500'} font-play duration-500 font-bold uppercase inline-block p-5`
    }
    return (
        <div className="p-20">
        <div className="group inline-block relative">
          <button
            className="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center"
          >
            <span className="mr-1">Dropdown</span>
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
              />
            </svg>
          </button>
          <ul className="absolute hidden text-gray-700 pt-1 group-hover:block transition duration-1000">
            <li className="">
              <a
                className="rounded-t bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >One</a
              >
            </li>
            <li className="">
              <a
                className="bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >Two</a
              >
            </li>
            <li className="">
              <a
                className="rounded-b bg-gray-200 hover:bg-gray-400 py-2 px-4 block whitespace-no-wrap"
                href="#"
                >Three is the magic number</a
              >
            </li>
          </ul>
        </div>
      </div>
    )
}
export default DesktopNavigation