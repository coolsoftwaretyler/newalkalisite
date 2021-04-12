import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const OurProcess = props => {
    const eventDotWrapperClass = () => {
        return `flex flex-col ${props.type % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} relative self-center max-w-5xl mx-14 lg:m-auto shadow-2xl md:shadow-none`
    }

    const eventDotClass = () => {
        return `${props.type % 2 === 0 ? 'event-dotR ml-0 md:ml-7' : 'event-dotL ml-0 md:mr-7'}  bg-alkali-500 text-center rounded-none md:rounded-full w-auto h-auto md:w-20 md:h-20 self-stretch md:self-center p-6 shadow-2xl rounded-t-md md:rounded-none`
    }

    return (
        <div className="mb-16 md:mb-36">
            <div className={eventDotWrapperClass()}>
                <div className={eventDotClass()}>
                    <FontAwesomeIcon className="text-3xl text-white" icon={faSearch}></FontAwesomeIcon>
                </div>
                <div className="bg-alkali-500 relative shadow-2xl text-white font-open text-xl flex align-center justify-center w-full md:w-3/12 rounded-non md:rounded-r-md">
                    <div className="relative self-center text-center px-4 pb-7 md:pb-0">{props.title}</div>
                </div>
                <div className="bg-white p-4 shadow-2xl w-full md:w-8/12 rounded-l-md rounded-b-md md: md:rounded-r-none ">
                    <div className="text-center sm:text-left ml-none sm:ml-7 lg:ml-14">
                        {props.step1}<br />
                        {props.step2}<br />
                        {props.step3}<br />
                        {props.step4}<br />
                        {props.step5}<br />
                        {props.step6}<br />
                        {props.step7}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurProcess