import HeaderAlt from "../comps/HeaderAlt"
import Modal from "../comps/Modal"

function Clients() {
    return (
        <div>
            <HeaderAlt />
            <h1 className="text-center text-6xl font-open font-bold">Contact</h1>
            <p className="text-center text-xl pt-7 font-opens">Get in touch and let us know how we can help.</p>
            <div className="flex justify-between items-center max-w-6xl m-auto pt-24 space-x-7">
                <div className="rounded-md shadow-2xl p-14">
                    
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"></img>
                        </div>
                    
                    <h2 className="text-center py-3 pt-11 text-xl font-medium">Email</h2>
                    <p className="text-center max-w-xs text-lg font-opens pb-7">We'd love to talk about how we can work together.</p>
                    
                        <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                            Send Email
                    </button>
                    
                </div>
                <div className="rounded-md shadow-2xl p-14">
                    
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"></img>
                        </div>
                    
                    <h2 className="text-center py-3 pt-11 text-xl font-medium">Call</h2>
                    <p className="text-center max-w-xs text-lg font-opens pb-7">We'd love to talk about how we can work together.</p>
                    
                        <Modal
                            style="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl"
                            name="Schedule a call" />
                    
                </div>
                <div className="rounded-md shadow-2xl p-14">
                    
                        <div className="">
                            <img className="-mt-24 w-32 h-32 text-center rounded-full p-5 bg-white shadow-2xl" src="../images/alkalismall.png"></img>
                        </div>
                    
                    <h2 className="text-center py-3 pt-11 text-xl font-medium">Email</h2>
                    <p className="text-center max-w-xs text-lg font-opens pb-7">We'd love to talk about how we can work together.</p>
                    
                        <button className="bg-alkali-500 border-1 p-2 px-6 text-white rounded-md shadow-2xl">
                            Send Email
                    </button>
                    
                </div>
            </div>
        </div>
    )
}

export default Clients