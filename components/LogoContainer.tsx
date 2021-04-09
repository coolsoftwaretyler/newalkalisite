const LogoContainer = props => {
	const icons = [
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 1200, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 1150, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 1175, "translateY": 550, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 1000, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 950, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 975, "translateY": 550, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 800, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 750, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 775, "translateY": 550, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 600, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 550, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 575, "translateY": 550, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 400, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 350, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 375, "translateY": 550, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 200, "translateY": 150, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 150, "translateY": 350, scale: 1 },
		{ "name": "Spotify1", "fileName": "imgSpotify", "speed": "slow", "translateX": 175, "translateY": 550, scale: 1 }
		
	];
	return (
		<div className="Header-hero">

			<div className="IconsContainer">
				{
					icons.map((icon, index) =>
						<div className={"Icon Icon-" + icon.speed + " Icon-" + icon.fileName} key={index} style={{ "transform": "translate(" + icon.translateX + "px, " + icon.translateY + "px) scale(" + icon.scale + ") !important" }}>
							<span>{icon.name}</span>
						</div>
						
					)
				}
			</div>
		</div>
	)
}
export default LogoContainer;
