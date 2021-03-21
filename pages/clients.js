function Clients() {
  return <div>
    <div className="home-hero-bg">
      <div className="p-4 flex justify-between items-center max-w-6xl m-auto">
        <div className="flex items-center">
          <img className="w-52" src="../images/alkali-new-logo.png"></img>
        </div>
        <div>
          <a className="text-white">Home</a>
          <a href="#" className="text-white inline-block p-5 text-black hover:text-white">About</a>
          <a href="#" className="text-white inline-block p-5 text-black hover:text-white">Solutions</a>
        </div>
      </div>
      <div className="pt-16 pb-14 flex justify-between max-w-6xl justify-center m-auto">
        <div className="relative">
          <h1 className="text-white text-5xl">Our Clients</h1>
        </div>
      </div>
    </div>
    <div className="pt-36 pb-24 flex max-w-6xl justify-center m-auto">
      <div className="text-center bg-alkaligrey-500 mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        All
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Web Design
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        E-commerce
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        SEO
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Social
      </div>
    </div>
    <div className="group flex max-w-6xl justify-center m-auto">
      <div className="portfolio1 rounded-md shadow-2xl mx-3 w-72 transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110">
        <h3 className="text-3xl text-white pl-4 pb-4 pt-80">CarTalk Repair</h3>
      </div>
      <div className="portfolio2 rounded-md shadow-2xl mx-3 w-72 transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110">
        <h3 className="text-3xl text-white pl-4 pb-4 pt-80">Carro</h3>
      </div>
      <div className="portfolio3 rounded-md shadow-2xl mx-3 w-72 transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110">
        <h3 className="text-3xl text-white pl-4 pb-4 pt-80">Magnetite</h3>
      </div>
      <div style={{ backgroundImage: "url('../images/cartalk-portfolio-cover.jpg')" }} className="rounded-md shadow-2xl mx-3 w-72 transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110">
        <h3 className="text-3xl text-white pl-4 pb-4 pt-80">CarTalk Repair</h3>
      </div>
    </div>
  </div>
}

export default Clients