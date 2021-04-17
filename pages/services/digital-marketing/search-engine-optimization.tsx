import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'
import SearchEngineMetrics from '../../../components/Services/SearchEngineMetrics'

function SearchEngineOptimization() {
    return (
        <div>
            <Header
                headerColor="blue"
            />
            {ServiceHeroContent.searchEngineOptimization.map(searchEngineOptimization =>
                <ServiceHero
                    sub={searchEngineOptimization.sub}
                    title={searchEngineOptimization.title}
                    backgroundImg={searchEngineOptimization.backgroundImg}
                />
            )}
            <SearchEngineMetrics />
        </div>
    )
}

export default SearchEngineOptimization

