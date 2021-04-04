const SectionIntro = props => {
    return (
        <div className={props.style}>
            <div className="p-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto">
                <div className="w-full lg:w-1/2 px-5 2xl:px-0">
                    <div className="portfolio-title font-open text-alkaligrey-400 uppercase font-open text-md font-bold">{props.sub}</div>
                    <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7">{props.title}</h3>
                    <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">{props.text}</p>
                </div>
                <div className="w-full lg:w-1/2">
                    <div className="portfolio-image-container"><img className="portfolio-image rounded-md shadow-2xl" src={props.image}></img></div>
                </div>
            </div>
        </div>
    )
}
export default SectionIntro