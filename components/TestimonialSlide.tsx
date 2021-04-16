const TestimonialSlide = (props) => {
    return (
        <div className={props.style}>
            <div className="relative">
                <div className="relative lg:flex overflow-hidden rounded-md">
                    <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                        <img className="absolute h-full w-full object-cover" src={props.background}/>
                        <div className={`absolute inset-0 bg-pink-300 opacity-75 ${props.backgroundOverlay}`}></div>
                        <img className="relative" width="275" height="120" src={props.logo} alt={props.altText}/>
                    </div>
                    <div className="relative lg:w-7/12 bg-white">
                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                            <p className="text-gray-900 font-open font-medium">
                                {props.quote}
                            </p>
                            <p className="mt-3 font-open font-bold">
                                {`- ${props.name}`}
                            </p>
                            <p className="mt-6">
                                <a href={`/clients/`} className="font-medium font-open duration-500 text-black hover:text-alkali-500">{`Learn more about ${props.company}'s project `}&rarr;</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
                </div>
                <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
                </div>
            </div>
        </div>
    )
}

export default TestimonialSlide