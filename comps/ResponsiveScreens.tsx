const ResponsiveScreens = props => {
    return (
        <div className={props.style}>
            <h3 className="text-center text-4xl font-play font-bold max-w-2xl m-auto mb-14 leading-tight">{props.title}</h3>
            <a href={props.link} className="p-3 px-12 font-semibold text-white shadow-2xl rounded-md transition duration-500 ease-in-out bg-alkali-500 hover:bg-alkali-600 transform hover:-translate-y-1 hover:scale-110">{props.buttonName}</a>
            <div id="arrow-container-container">
                <div id="arrow-container">
                    <div className="p-4 flex justify-between items-center max-w-7xl m-auto">
                        <div className="screenshot-container mx-3">
                            <img className="-mb-10 rounded-md screenshot-d shadow-2xl duration-500 transform -rotate-45 -translate-x-24 hover:-translate-y-1 hover:scale-110" src={props.desktopImgL}></img>
                        </div>
                        <div className="screenshot-container mx-3 mb-4">
                            <img className="rounded-md screenshot-d-alt shadow-2xl duration-500 transform rotate-45 translate-x-24 translate-y-3 hover:-translate-y-1 hover:scale-110" src={props.desktopImgR}></img>
                        </div>
                    </div>
                    <div className="p-4 flex justify-between items-center max-w-7xl m-auto">
                        <div className="screenshot-container w-2/3 mx-3">
                            <img className="rounded-md screenshot-t w-96 shadow-2xl duration-500 transform -rotate-45 -translate-x-21 hover:-translate-y-1 hover:scale-110" src={props.tabletImg}></img>
                        </div>
                        <div className="screenshot-container w-1/3 mx-3">
                            
                                <img className="rounded-md screenshot-p w-52 shadow-2xl duration-500 transform -rotate-45 -translate-x-21 hover:-translate-y-1 hover:scale-110" src={props.phoneImg}></img>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default ResponsiveScreens