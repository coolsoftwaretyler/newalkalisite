import ClientContainer from "../components/ClientContainer"
import Link from "next/link"


const ClientSummary = props => {
    return (
        <div>
            <div className="max-w-7xl m-auto py-36 pt-72 -mt-72">
                <h3 className="text-4xl font-play font-bold m-auto leading-tight pt-7 pb-5 text-center xl:text-left ml-4 xl:text-left xl:ml-24">Other Projects</h3>
                <ul className="group flex flex-wrap max-w-7xl transition duration-500 ml-10 m-auto justify-center md:justify-left">
                    <Link href={props.client1Link}>
                        <a target="_blank" rel="noopener noreferrer">
                            <ClientContainer
                                style={props.client1Style}
                                title={props.client1Title}
                            />
                        </a>
                    </Link>
                    <Link href="https://carro.com">
                        <a target="_blank" rel="noopener noreferrer">
                            <ClientContainer
                                style={props.client2Style}
                                title={props.client2Title}
                            />
                        </a>
                    </Link>
                    <Link href="https://carro.com">
                        <a target="_blank" rel="noopener noreferrer">
                            <ClientContainer
                                style={props.client3Style}
                                title={props.client3Title}
                            />
                        </a>
                    </Link>
                    <Link href={props.client4Link}>
                        <a target="_blank" rel="noopener noreferrer">
                            <ClientContainer
                                style={props.client4Style}
                                title={props.client4Title}
                            />
                        </a>
                    </Link>
                </ul>
            </div>
        </div>
    )
}
export default ClientSummary