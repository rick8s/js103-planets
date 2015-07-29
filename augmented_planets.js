var solarSystem = function((solarSystem)
	var closestFiveStars = [];
	var estAgeInYrs = 0;
	var knownDwarfPlanets = [];

	return {
		addClosestStar: function(star) {
			return closestFiveStars;
		},
		addDwarfs: function(dwarf) {
			return knownDwarfPlanets;
		},
		setClosestStars: function(newStar){
			for (var i=0; i<closestFiveStars.length; i++;){
				if (closestFiveStars.length < 5) {
					closestFiveStars = closestFiveStars.push(newStar);
				}else {alert("Sorry...there can only be five.");}
			}
		};
		getClosestStars: function() {
			return closestFiveStars;
		},
		setAge: function(age) {
			estAgeInYrs = age;
		},
		getAge: function() {
			return estAgeInYrs;
		},
		setDwarfs: function(dwarf) {
		knownDwarfPlanets = knownDwarfPlanets.push(dwarf);
		},
		getDwarfs: function() {
		return knownDwarfPlanets;
		}
	},
})();