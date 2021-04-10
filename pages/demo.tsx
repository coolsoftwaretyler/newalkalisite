import DemoSlider from '../components/DemoSlider'
import DemoSlide from '../components/DemoSlide'
import Testimonials from '../content/testimonials'

const Demo = () => {
    return (
        <main className="flex flex-col justify-center min-h-screen">
            <DemoSlider>
                {Testimonials.map(testimonial =>
                    <DemoSlide
                        background={testimonial.background}
                        backgroundOverlay={testimonial.backgroundOverlay}
                        company={testimonial.company}
                        logo={testimonial.logo}
                        name={testimonial.name}
                        quote={testimonial.quote}
                    />
                )}
            </DemoSlider>
        </main>
    )
}

export default Demo