import ServiceHeader from '../../../components/ServiceHeader';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'

function SearchEngineOptimization() {
    return (
        <div>
            <Header
                headerColor="blue"
            />
            {ServiceHeroContent.searchEngineOptimization.map(searchEngineOptimization =>
                <ServiceHeader
                    sub={searchEngineOptimization.sub}
                    title={searchEngineOptimization.title}
                    backgroundImg={searchEngineOptimization.backgroundImg}
                />
            )}
        </div>
    )
}

export default SearchEngineOptimization

