const SectionIntro = props => {
    return (
        <div className="p-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto">
            <div className="w-full lg:w-3/6 px-14 2xl:px-0">
                <div className="portfolio-title font-open text-alkaligrey-400 text-lg font-medium uppercase">{props.sub}</div>
                <h3 className="font-play font-bold text-4xl pt-5 pb-14 max-w-2xl leading-tight">{props.title}</h3>
                <p className="text-lg font-open font-normal">{props.text}</p>
            </div>
            <div className="w-full lg:w-3/6 bg-white">
                <div className="portfolio-image-container"><center><img className="portfolio-image rounded-md shadow-2xl" src={props.image}></img></center></div>
            </div>
        </div>
    )
}
export default SectionIntro