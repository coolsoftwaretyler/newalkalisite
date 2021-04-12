const ClientContainer = props => {
    return (
        <a href={`/clients/${props.slug}`}>
            <li className="portfolio1 rounded-md shadow-2xl m-auto w-64 ease-in-out bg-white hover:bg-alkaligrey-700 transition duration-500 transform hover:-translate-y-1 hover:scale-110" style={{ backgroundImage: `url("${props.backgroundImg}")`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                <h3 className="font-open rounded-md text-3xl text-white pl-2 pt-80 pl-5 pb-4">{props.name}</h3>
            </li>
        </a>
    )
}
export default ClientContainer