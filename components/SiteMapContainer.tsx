const SiteMapContainer = props => {
    return (
        <a href={`/services/${props.slug}`} className="text-alkaligrey-400 text-lg">
            <div className="py-4">{props.name}</div>
        </a>
    )
}

export default SiteMapContainer