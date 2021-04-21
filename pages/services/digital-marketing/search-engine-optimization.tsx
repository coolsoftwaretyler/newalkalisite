import ServiceHero from '../../../components/Services/ServiceHero';
import ServiceHeroContent from '../../../content/servicePages/serviceHeroContent'
import Header from '../../../components/Header'
import SearchEngineMetrics from '../../../components/Services/SearchEngineMetrics'
import StandardImage from '../../../components/StandardImage'
import StandardTextBlock from '../../../components/StandardTextBlock';
import SEO from '../../../content/servicePages/seo'
import TwoColumnLayout from '../../../components/TwoColumnLayout';

function SearchEngineOptimization() {
    const seoContent1 = SEO.results.map(results =>
        <StandardImage
            image={results.image}
            imageAngle="none"
        />
    )

    const seoContent2 = SEO.results.map(results =>
        <StandardTextBlock
            title={results.title}
            text={results.text}
        />
    )
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
            <TwoColumnLayout
                style=""
                child2={seoContent1}
                child1={seoContent2}
            />
            <TwoColumnLayout
                style="bg-alkaligrey-300"
                child1={seoContent1}
                child2={seoContent2}
            />
            <div className="py-24">
                <h6 className="text-3xl md:text-4xl pb-7 text-center font-play font-bold m-auto leading-tight">Our SEO Services</h6>
                <div className="max-w-7xl m-auto grid grid-cols-3 gap-x-36 pt-24">
                    <div>
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Keyword Research & Strategy</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div>
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Link Building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                    <div>
                        <img className="w-14" src="/images/alkalismall.png" />
                        <h4 className="py-3 font-bold">Link Building</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam arcu ex, sodales ac ipsum volutpat, mattis.</p>
                    </div>
                </div>
            </div>
            <SearchEngineMetrics />

        </div>
    )
}

export default SearchEngineOptimization

