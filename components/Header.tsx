import Modal from '../components/Modal'

function HeaderAlt() {
    return <div className="py-8 flex justify-between max-w-7xl justify-center m-auto">
        <div className="flex items-center">
            <a href="/"><img className="w-40" src="../images/alkali-logo-white.png"></img></a>
        </div>
        <div>
            <a href="/clients" className="text-white font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Clients</a>
            <a href="#" className="text-white font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">About</a>
            <a href="#" className="text-white font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Solutions</a>
        </div>
        <div>
            <Modal
                style="mt-1 p-3 px-6 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-700"
                text="Schedule a call"
            />
        </div>
    </div>
}

export default HeaderAlt