const TwoColumnLayoutTwo = props => {
    return (
        <div className="p-4 flex flex-col lg:flex-row justify-between items-center max-w-7xl m-auto">
            {props.children}
            <div className="portfolio-image-container">
                {props.children}
            </div>
        </div>
    )
}

export default TwoColumnLayoutTwo