import ClientContainer from '../components/ClientContainer'
import Link from 'next/link'
import HeaderAlt from '../components/HeaderAlt'

function Clients() {
  return <div>
    < HeaderAlt />
    <div className="pt-36 pb-24 flex max-w-6xl justify-center m-auto">
      <div className="text-center bg-alkaligrey-500 mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        All
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Web Design
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        E-commerce
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        SEO
      </div>
      <div className="text-center mx-5 w-36 text-alkaligrey-700 rounded-md p-2 border border-alkaligray-700">
        Social
      </div>
    </div>
    <ul className="group flex flex-wrap flex-grow max-w-7xl justify-center m-auto transition duration-500">
    <Link href="/clients/carro">
        <a>
          <ClientContainer
            style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            title="Carro"
          />
        </a>
      </Link>
      <Link href="/clients/cartalk-repair">
        <a>
          <ClientContainer
            style={{ backgroundImage: "url(../../images/cartalk-repair-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
            title="CarTalk Repair"
          />
        </a>
      </Link>
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="HBP"
      />
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="Blueflame Medical"
      />
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="CarTalk Repair"
      />
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="The HID Factory"
      />
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="The HID Factory"
      />
      <ClientContainer
        style={{ backgroundImage: "url(../../images/carro-cover.jpg)", backgroundRepeat: "no-repeat", backgroundSize: "cover" }}
        title="The HID Factory"
      />
    </ul>
  </div>
}

export default Clients