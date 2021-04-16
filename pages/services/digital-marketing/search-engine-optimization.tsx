import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'

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
        </div>
    )
}

export default SearchEngineOptimization

