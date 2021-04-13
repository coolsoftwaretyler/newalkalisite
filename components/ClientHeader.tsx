import Header from '../components/Header'
const ClientHeader = props => {
    return (
        <div className="client-hero px-14" style={{ backgroundImage: `url(${props.backgroundImg})`, backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
            <Header 
            headerColor="white"
            />
            <div className="max-w-7xl flex justify-between items-center m-auto py-48">
                <div className="ml-7 2xl:mx-0">
                    <p className="uppercase text-white font-open font-medium">{props.sub}</p>
                    <h1 className="text-6xl text-white font-play font-bold pt-3 pb-10">{props.title}</h1>
                    <div className="max-w-7xl m-auto">
                        <div className="border border-white p-2 rounded-md text-xs text-center text-white uppercase font-open font-bold hover:bg-white hover:text-alkaligrey-800">
                            {props.service}
                        </div>
                    </div>
                </div>
                <div>
                    <img src="" />
                </div>
            </div>
        </div>
    )
}

export default ClientHeader