const ClientContainers = props => {
    return (
            <li className="mt-6 mr-7 portfolio1 rounded-md shadow-2xl w-64 ease-in-out bg-white hover:bg-alkaligrey-700 transition duration-500 transform hover:-translate-y-1 hover:scale-110" style={props.style}>
                <h3 className="font-open rounded-md text-3xl text-white pl-2 pt-80 pl-5 pb-4">{props.title}</h3>
            </li>
    )
}
export default ClientContainers