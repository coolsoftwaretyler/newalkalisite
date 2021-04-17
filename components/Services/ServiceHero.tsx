import Modal from '../Modal'
import Image from 'next/image'

const ServiceHero = props => {
    return (
        <div>
            <div className="relative" style={{fontSize: '0'}}>
                <Image
                    layout="fill"
                    className="object-center object-cover pointer-events-none"
                    src={`/images/${props.backgroundImg}`}
                    alt=""
                />
                <div className="relative z-1">
            <div className="client-hero px-14" >
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
                </div>
            </div>
        </div>
    )
}

export default ServiceHero