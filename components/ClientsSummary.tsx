const ClientSummary = props => {
    return (
        <div>
            <div className="max-w-7xl m-auto py-36 pt-72 -mt-72">
                <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7 pb-14 ml-0 lg:ml-7 text-center lg:text-left">Other Projects</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-y-10 max-w-7xl m-auto transition duration-500 content-center relative justify-center">
                    {props.children}
                </ul>
            </div>
        </div>
    )
}
export default ClientSummary