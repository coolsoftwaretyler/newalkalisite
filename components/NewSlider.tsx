const NewSlider = props => {
    const icons = [
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 1175, "translateY": 550, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 1150, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 1000, "translateY": 150, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 975, "translateY": 550, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 950, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 800, "translateY": 150, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 775, "translateY": 550, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 750, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 600, "translateY": 150, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 575, "translateY": 550, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 550, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 400, "translateY": 150, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 350, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 375, "translateY": 550, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 200, "translateY": 150, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 150, "translateY": 350, scale: 1 },
        { "name": "Spotify1", "fileName": "imgSpotify", "speed": "", "translateX": 175, "translateY": 550, scale: 1 },

    ];

    const info = [
        { "company": "CarTalkRepair", "background": "CarTalk-Testimonial-Image.jpg", "backgroundOverlay": "bg-alkali-600", "logo": "CarTalk-Repair.png", "name": "Cody Lintz, Owner", "quote": "Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali we did. They have provided us the tools we need to adequately serve our customers." },
        { "company": "CarTalkRepair", "background": "CarTalk-Testimonial-Image.jpg", "backgroundOverlay": "bg-alkali-600", "logo": "CarTalk-Repair.png", "name": "Cody Lintz, Owner", "quote": "Starting off as a new business we realized the importance of having a sound online presence early on. We are extremely grateful we found Alkali we did. They have provided us the tools we need to adequately serve our customers." },
    ];
    return (
        <div className="">

            <div className="IconsContainer">
                {
                    icons.map((icon, index) =>
                        <div className={"Icon Icon-" + icon.speed + " Icon-" + icon.fileName} key={index} style={{ "transform": "translate(" + icon.translateX + "px, " + icon.translateY + "px) scale(" + icon.scale + ") !important" }}>
                            <span>{icon.name}</span>
                        </div>

                    )
                }
            </div>

                {
                    info.map((info) =>
                        <div className="">
                            <div className="relative">
                                <div className="relative lg:flex overflow-hidden rounded-md">
                                    <div className="h-56 lg:h-auto lg:w-5/12 relative flex items-center justify-center">
                                        <img className="absolute h-full w-full object-cover" src={`../../images/${info.background}`} alt="" />
                                        <div className={`absolute inset-0 ${info.backgroundOverlay} opacity-75`}></div>
                                        <img className="relative" width="275" height="120" src={`../../images/${info.logo}`}></img>
                                    </div>
                                    <div className="relative lg:w-7/12 bg-white">
                                        <svg className="absolute h-full text-white w-24 -ml-12" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none">
                                            <polygon points="50,0 100,0 50,100 0,100" />
                                        </svg>
                                        <div className="relative py-12 lg:py-24 px-8 lg:px-16 text-gray-700 leading-relaxed">
                                            <p className="text-gray-900 font-open font-medium">
                                                {info.quote}
                                            </p>
                                            <p className="mt-3 font-open font-bold">
                                                {`- ${info.name}`}
                                            </p>
                                            <p className="mt-6">
                                                <a href={`/clients/${info.company.toLowerCase()}`} className="font-medium font-open duration-500 text-black hover:text-alkali-500">{`Learn more about ${info.company}'s project `}&rarr;</a>
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
            </div>
    )
}
export default NewSlider;
