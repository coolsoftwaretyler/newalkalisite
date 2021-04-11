import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faSearch } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const OurProcess = props => {
    const type = props.type;
    if (type % 2 == 0) {
        return (
            <div className="mb-16 md:mb-36">
                <div className="flex flex-col md:flex-row-reverse relative self-center max-w-5xl mx-14 lg:m-auto shadow-2xl md:shadow-none">
                    <div className="event-dotR bg-alkali-500 text-center rounded-none md:rounded-full w-auto h-auto md:w-20 md:h-20 self-stretch md:self-center p-6 ml-0 md:ml-7 shadow-2xl rounded-t-md md:rounded-none">
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
    return (
        <div className="mb-16 md:mb-36">
            <div className="flex flex-col md:flex-row relative self-center max-w-5xl mx-14 lg:m-auto shadow-2xl md:shadow-none">
                <div className="event-dotL bg-alkali-500 text-center rounded-none md:rounded-full w-auto h-auto md:w-20 md:h-20 self-stretch md:self-center p-6 ml-0 md:mr-7 shadow-2xl rounded-t-md md:rounded-none">
                    <FontAwesomeIcon className="text-3xl text-white" icon={faSearch}></FontAwesomeIcon>
                </div>
                <div className="bg-alkali-500 relative shadow-2xl text-white font-open text-xl flex align-center justify-center w-full md:w-3/12 rounded-none md:rounded-l-md">
                    <div className="relative self-center text-center px-4 pb-7 md:pb-0">{props.title}</div>
                </div>
                <div className="bg-white p-4 shadow-2xl w-full md:w-8/12 rounded-r-md rounded-b-md md: md:rounded-l-none ">
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