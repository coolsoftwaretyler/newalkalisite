import TestimonialSlider from '../components/TestimonialSlider'
import TestimonialSlide from '../components/TestimonialSlide'
import Testimonials from '../content/testimonials'

const Demo = () => {
    return (
        <main className="flex flex-col justify-center min-h-screen">
            <TestimonialSlider>
                {Testimonials.wordpress.map(testimonial =>
                    <TestimonialSlide
                        background={testimonial.background}
                        backgroundOverlay={testimonial.backgroundOverlay}
                        company={testimonial.company}
                        key={`devTestimonialFor${testimonial.company}`}
                        logo={testimonial.logo}
                        name={testimonial.name}
                        quote={testimonial.quote}
                    />
                )}
            </TestimonialSlider>
            <div className="mb-4"></div>
            <TestimonialSlider>
                {Testimonials.design.map(testimonial =>
                    <TestimonialSlide
                        background={testimonial.background}
                        backgroundOverlay={testimonial.backgroundOverlay}
                        company={testimonial.company}
                        key={`designTestimonialFor${testimonial.company}`}
                        logo={testimonial.logo}
                        name={testimonial.name}
                        quote={testimonial.quote}
                    />
                )}
            </TestimonialSlider>
        </main>
    )
}

export default Demo