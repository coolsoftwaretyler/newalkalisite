function Header() {
    return <div className="py-8 flex justify-between max-w-6xl justify-center m-auto">
        <div className="flex items-center">
            <img className="w-52" src="../images/alkali-new-logo.png"></img>
        </div>
        <div>
            <a className="text-white">Home</a>
            <a href="#" className="text-white inline-block p-5 text-black hover:text-white">About</a>
            <a href="#" className="text-white inline-block p-5 text-black hover:text-white">Solutions</a>
        </div>
    </div>
}

export default Header