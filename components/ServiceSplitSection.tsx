const ServiceSplitSection = props => {
    return (
        <div className={props.style}>
            <div className="flex flex-col space-x-0 lg:space-x-14 lg:flex-row m-auto justify-between items-center max-w-7xl">
                <div className="w-5/6 lg:w-1/2 pb-20 lg:pb-0">
                    <h3 className="text-4xl font-play font-bold m-auto leading-tight">{props.title}</h3>
                    <p className="text-alkaligrey-400 font-open max-w-4xl text-lg font-normal pt-7">{props.text}</p>
                </div>
                <div className="w-5/6 lg:w-1/2">
                    <div className=""><img className="rounded-md" src={props.image}></img></div>
                </div>
            </div>
        </div>
    )
}

export default ServiceSplitSection