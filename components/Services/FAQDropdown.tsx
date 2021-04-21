import { Disclosure } from "@headlessui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"; // Import the FontAwesomeIcon component
import { faChevronRight, faChevronUp } from "@fortawesome/free-solid-svg-icons"; // import the icons you need

const FAQDropdown = (props) => {
    return (
        <div className="w-full px-4 pt-16">
            <div className="w-full max-w-5xl p-2 mx-auto bg-white rounded-2xl">
                <div className="grid grid-cols-2 gap-x-10">
                    <div>
                        <Disclosure as="div" className="mt-2">
                            {({ open }) => (
                                <>
                                    <Disclosure.Button className="flex items-center justify-between w-full py-5 px-3 text-md font-medium text-left text-black bg-alkaligrey-300 rounded-lg hover:bg-alkaligrey-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75">
                                        <span>{props.question}</span>
                                        <FontAwesomeIcon
                                            icon={faChevronRight}
                                            className={`${open ? "transform rotate-90" : ""
                                                } w-4 h-4 text-alkali-500`}
                                        />
                                    </Disclosure.Button>
                                    <Disclosure.Panel className="px-4 pt-4 pb-2 text-md text-alkaligrey-400">
                                        {props.answer}
                                    </Disclosure.Panel>
                                </>
                            )}
                        </Disclosure>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQDropdown