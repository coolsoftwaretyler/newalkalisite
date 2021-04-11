const TwoColumnImage = (props) => {
    const angleDirection = props.layout;
    if (angleDirection == "left") {
        return (
            <div>
                <div className="portfolio-image-container"><img className="portfolio-image2 rounded-md shadow-2xl" src={props.image}></img></div>
            </div>
        )
    }
    return (
        <div className="portfolio-image-container">
            <img className="portfolio-image rounded-md shadow-2xl" src={props.image}></img>
        </div>
    )
}

export default TwoColumnImage