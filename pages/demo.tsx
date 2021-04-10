import DemoSlider from '../components/DemoSlider'
import DemoSlide from '../components/DemoSlide'
import Testimonials from '../content/testimonials'

const Demo = () => {
    return (
        <main className="flex flex-col justify-center min-h-screen">
            <DemoSlider>
                {Testimonials.development.map(testimonial =>
                    <DemoSlide
                        background={testimonial.background}
                        backgroundOverlay={testimonial.backgroundOverlay}
                        company={testimonial.company}
                        key={`devTestimonialFor${testimonial.company}`}
                        logo={testimonial.logo}
                        name={testimonial.name}
                        quote={testimonial.quote}
                    />
                )}
            </DemoSlider>
            <div className="mb-4"></div>
            <DemoSlider>
                {Testimonials.design.map(testimonial =>
                    <DemoSlide
                        background={testimonial.background}
                        backgroundOverlay={testimonial.backgroundOverlay}
                        company={testimonial.company}
                        key={`designTestimonialFor${testimonial.company}`}
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