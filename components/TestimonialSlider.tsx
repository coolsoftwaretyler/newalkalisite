const TestimonialSlider = props => {
    return (
        <div className="max-w-6xl mx-auto mt-36 px-8 py-16">
            <div className="relative">
                <div className="relative lg:flex rounded-lg shadow-2xl overflow-hidden">
                    <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                        <img className="absolute h-full w-full object-cover" src="../images/CarTalk-Testimonial-Image.jpg" alt="" />
                        <div className="absolute inset-0 bg-alkali-600 opacity-75"></div>
                        <img className="relative" width="275" height="120" src="../images/CarTalk-Repair.png"></img>
                    </div>
                    <div className="relative lg:w-7/12 bg-white">
                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                            <polygon points="50,0 100,0 50,100 0,100" />
                        </svg>
                        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                            <p text-gray-900 font-open font-medium>
                                "Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali Designs we did. They have provided us the tools we need to adequately serve our customers."</p>
                            <p className="mt-3 font-open font-bold">
                                -Cody Lintz, Owner of CarTalk Repair</p>
                            <p className="mt-6">
                                <a href="#" className="font-medium duration-500 text-black hover:text-alkali-500">Learn more about CarTalk's project &rarr;</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="absolute inset-y-0 left-0 lg:flex lg:items-center">
                    <button className="mt-24 lg:mt-0 -ml-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
                        <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M5.41 11H21a1 1 0 0 1 0 2H5.41l5.3 5.3a1 1 0 0 1-1.42 1.4l-7-7a1 1 0 0 1 0-1.4l7-7a1 1 0 0 1 1.42 1.4L5.4 11z" />
                        </svg>
                    </button>
                </div>
                <div className="absolute inset-y-0 right-0 lg:flex lg:items-center">
                    <button className="mt-24 lg:mt-0 -mr-6 h-12 w-12 rounded-full bg-white p-3 shadow-lg">
                        <svg className="h-full w-full text-indigo-900" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M18.59 13H3a1 1 0 0 1 0-2h15.59l-5.3-5.3a1 1 0 1 1 1.42-1.4l7 7a1 1 0 0 1 0 1.4l-7 7a1 1 0 0 1-1.42-1.4l5.3-5.3z" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    )
}
export default TestimonialSlider