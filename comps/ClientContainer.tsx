const ClientContainers = props => {
    return (
            <li className="mt-6 portfolio1 rounded-md shadow-2xl mx-3 w-72 transition duration-500 ease-in-out bg-white hover:bg-alkaligrey-700 transform hover:-translate-y-1 hover:scale-110" style={props.style}>
                <h3 className="font-open rounded-md text-3xl text-white pl-2 pb-4 pt-80 bg-black bg-opacity-25">{props.title}</h3>
            </li>
    )
}
export default ClientContainers