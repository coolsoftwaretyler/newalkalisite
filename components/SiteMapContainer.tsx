const SiteMapContainer = props => {
    return (
        <a href={`/services/${props.slug}`}>
            <a className="text-alkaligrey-400 text-lg">
                <div className="pt-8">{props.name}</div>
            </a>
        </a>
    )
}

export default SiteMapContainer