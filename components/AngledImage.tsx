const TwoColumnImage = (props) => {
    return (
        <div className="w-full lg:w-1/2 px-5 2xl:px-0">
        <div className="portfolio-image-container"><img className="portfolio-image rounded-md shadow-2xl" src={props.image}></img></div>
        </div>
    )
}

export default TwoColumnImage