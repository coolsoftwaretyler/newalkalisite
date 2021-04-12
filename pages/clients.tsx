import ClientContainer from '../components/ClientContainer'
import HeaderAlt from '../components/HeaderAlt'
import ClientsSummary from '../components/ClientsSummary'
import ClientMainPage from '../content/clientPages/clientMainPage'
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
    <ClientsSummary>
      {ClientMainPage.map(clientMainPage =>
        <ClientContainer
          name={clientMainPage.name}
          backgroundImg={clientMainPage.backgroundImg}
          slug={clientMainPage.slug}
        />
      )}
    </ClientsSummary>
  </div>
}

export default Clients