const ServiceBreakdown = props => {
    return (
        <div className={props.style}>
            <ul className="flex items-center space-x-16 max-w-7xl m-auto">
                <li>
                    <img className="w-16" src={props.img1}/>
                    <h3 className="py-3 text-xl font-open font-bold">{props.title1}</h3>
                    <p className="max-w-xs text-lg font-open">{props.text1}</p>
                </li>
                <li>
                    <img className="w-16" src={props.img2}/>
                    <h3 className="py-3 text-xl font-open font-bold">{props.title2}</h3>
                    <p className="max-w-xs text-lg font-open">{props.text2}</p>
                </li>
                <li>
                    <img className="w-16" src={props.img3}/>
                    <h3 className="py-3 text-xl font-open font-bold">{props.title3}</h3>
                    <p className="max-w-xs text-lg font-open">{props.text3}</p>
                </li>
                <li>
                    <img className="w-16" src={props.img4}/>
                    <h3 className="py-3 text-xl font-open font-bold">{props.title4}</h3>
                    <p className="max-w-xs text-lg font-open">{props.text4}</p>
                </li>
            </ul>
        </div>
    )
}
export default ServiceBreakdown