const StaticTestimonial = props => {
    return (
        <div className={props.style}>
            <div className="relative lg:flex overflow-hidden rounded-md">
                <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                    <img className="absolute h-full w-full object-cover" src="../images/carro-testimonial-bg.jpg" alt="" />
                    <div className="absolute inset-0 bg-pink-300 opacity-75"></div>
                    <img className="relative" width="150" src="../images/carro-logo-white.png"></img>
                </div>
                <div className="relative lg:w-7/12 bg-white">
                    <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                    <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                        <p className="text-gray-900 font-open font-medium">
                            "Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali Designs we did. They have provided us the tools we need to adequately serve our customers."</p>
                        <p className="mt-3 font-open font-bold">
                            -Eric Sanchez, Operations Manager</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default StaticTestimonial