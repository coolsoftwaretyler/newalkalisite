const LogoContainer = props => {
    const icons = [
	    { "name": "imgSpotify", "speed": "slow", "translateX": 1100, "translateY": 200, scale: 1 },
	    { "name": "imgSpotify", "speed": "slow", "translateX": 900, "translateY": 150, scale: 1 },
	    { "name": "imgSpotify", "speed": "slow", "translateX": 700, "translateY": 123, scale: 1 },
	    { "name": "imgSpotify", "speed": "slow", "translateX": 500, "translateY": 88, scale: 1 },
        { "name": "imgSpotify", "speed": "slow", "translateX": 300, "translateY": 88, scale: 1 },
        { "name": "imgSpotify", "speed": "slow", "translateX": 100, "translateY": 88, scale: 1 }
    ];
    return (
		    <div className="Header-hero">

		    <div className="IconsContainer">
		    {
		    	icons.map((icon, index) => 
		    	<div className={"Icon Icon-" + icon.speed + " Icon-" + icon.name} key={index} style={{ "transform": "translate(" + icon.translateX + "px, " + icon.translateY + "px) scale(" + icon.scale + ") !important"}}>
				<span>Spotify</span>
			</div>
			)
		    }
		    </div>
		    </div>
	   )
}
export default LogoContainer;
