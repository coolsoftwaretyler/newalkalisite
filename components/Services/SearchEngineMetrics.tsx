import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faCaretUp, faSquare, faCircle } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const ServiceHero = () => {
    return (
        <div className="py-14 px-14 2xl:px-0">
            <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 max-w-4xl m-auto pb-10">
                <div>
                    <div className="rounded-full px-1 py-1 m-4 w-28 bg-green-300 m-auto">
                        <div className="rounded-full bg-green-100 px-9 py-9 pl-7">
                            <p className="text-green-300 font-bold text-3xl">100</p>
                        </div>
                    </div>
                    <p className="text-center pt-4">Performance</p>
                </div>
                <div>
                    <div className="rounded-full px-1 py-1 w-28 bg-green-300 m-auto">
                        <div className="rounded-full bg-green-100 px-9 py-9 pl-7">
                            <p className="text-green-300 font-bold text-3xl">100</p>
                        </div>
                    </div>
                    <p className="text-center pt-4">Accessibility</p>
                </div>
                <div>
                    <div className="rounded-full px-1 py-1 w-28 bg-green-300 m-auto">
                        <div className="rounded-full bg-green-100 px-9 py-9 pl-7">
                            <p className="text-green-300 font-bold text-3xl">100</p>
                        </div>
                    </div>
                    <p className="text-center pt-4">Best Practices</p>
                </div>
                <div>
                    <div className="rounded-full px-1 py-1 w-28 bg-green-300 m-auto">
                        <div className="rounded-full bg-green-100 px-9 py-9 pl-7">
                            <p className="text-green-300 font-bold text-3xl">100</p>
                        </div>
                    </div>
                    <p className="text-center pt-4">SEO</p>
                </div>
            </div>
            <div>
                <div className="border flex justify-between max-w-lg m-auto mt-3 p-3 px-10 rounded-2xl items-center ">
                    <div>
                        <FontAwesomeIcon className="text-red-500 text-2xl" icon={faCaretUp}></FontAwesomeIcon>  0-49
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-yellow-500 text-sm" icon={faSquare}></FontAwesomeIcon>  50-89
                    </div>
                    <div>
                        <FontAwesomeIcon className="text-green-300 text-md" icon={faCircle}></FontAwesomeIcon>  90-100
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServiceHero