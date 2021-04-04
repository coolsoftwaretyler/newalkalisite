const SectionIntroAlt = props => {
    return (
<div className={props.style}>
<div className="flex flex-col-reverse lg:flex-row justify-between items-center max-w-7xl m-auto">
            <div className="w-full lg:w-3/6">
                <div className="portfolio-image-container"><img className="portfolio-image2 rounded-md shadow-2xl" src={props.image}></img></div>
                <div><img className="portfolio-image3 rounded-md shadow-2xl" src={props.image2}></img></div>
            </div>
            <div className="w-full lg:w-3/6 px-14 2xl:px-0 ml-24">
                <div className="portfolio-title font-open text-alkaligrey-400 uppercase font-open text-md font-bold">{props.sub}</div>
                <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7">{props.title}</h3>
                <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">{props.text}</p>
            </div>
        </div>
</div>
    )
}
export default SectionIntroAlt