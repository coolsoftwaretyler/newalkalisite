import ServiceHeader from '../../../components/ServiceHeader';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import HeaderAlt from '../../../components/HeaderAlt'

function SearchEngineOptimization() {
    return (
        <div>
            <HeaderAlt
                style="py-8"
                logo="../../images/alkali-logo-blue.png"
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

