import Link from 'next/link'

const SiteMapContainer = props => {
    return (
        <Link href={`/services/${props.slug}`}>
                <a className="text-alkaligrey-400 text-lg">
                    <div className="pt-8">{props.name}</div>
                </a>
        </Link>
    )
}

export default SiteMapContainer