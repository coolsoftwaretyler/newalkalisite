const StandardTextBlock = (props) => {
    return (
        <div>
            <div className="portfolio-title font-open text-alkaligrey-400 uppercase font-open text-md font-bold">{props.sub}</div>
            <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7">{props.title}</h3>
            <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">{props.text}</p>
        </div>
    )
}

export default StandardTextBlock