const TwoColumnImage = (props) => {
    return (
        <div>
            <div className="portfolio-image-container">
                <img
                    className={`${props.layout === 'left' ? 'portfolio-image--left' : 'portfolio-image--right'} rounded-md shadow-2xl`}
                    src={props.image}
                />
            </div>
        </div>
    )
}

export default TwoColumnImage