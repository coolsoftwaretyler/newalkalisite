import Modal from '../components/Modal'

const ServiceLeadSection = props => {
    return (
        <div className={props.style}>
            <div className="w-5/6 lg:w-full m-auto">
                <h5 className="text-4xl text-center text-white font-play font-bold m-auto leading-tight">{props.title}</h5>
                <p className="text-white font-open pt-7 pb-10 text-center max-w-4xl m-auto text-lg font-normal">{props.text}</p>
                <div className="flex justify-center">
                    <Modal
                        style="p-4 px-6 font-semibold text-alkali-500 shadow-2xl rounded-md transition duration-500 ease-in-out bg-white hover:bg-alkali-700"
                        text={props.buttonText}
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceLeadSection