function HeaderAlt() {
    return <div className="py-8 flex justify-between max-w-6xl justify-center m-auto border-b border-gray-300">
        <div className="flex items-center">
            <a href="/"><img className="w-52" src="../images/alkali-logo-alt.png"></img></a>
        </div>
        <div>
            <a href="#" className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Home</a>
            <a href="#" className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">About</a>
            <a href="#" className="text-black font-play font-bold uppercase inline-block p-5 hover:text-alkali-500">Solutions</a>
        </div>
    </div>
}

export default HeaderAlt