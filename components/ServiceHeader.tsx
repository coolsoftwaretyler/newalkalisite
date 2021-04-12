import Modal from '../components/Modal'

const ServiceHeader = props => {
    return (
        <div className="client-hero px-14" style={{ backgroundImage: `url(/images/${props.backgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <div className="max-w-7xl flex justify-between items-center m-auto pt-56 pb-20">
                <div className="">
                    <h1 className="portfolio-title font-open text-white uppercase font-open text-md font-bold">{props.sub}</h1>
                    <h2 className="text-6xl text-white font-play font-bold pt-3 py-10 max-w-4xl">{props.title}</h2>
                    <Modal
                        style="p-4 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                        text="Schedule a Discovery Call"
                    />
                </div>
            </div>
        </div>
    )
}

export default ServiceHeader