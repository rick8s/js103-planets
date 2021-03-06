var solarSystem = (function(){
	var planets = ["mercury, venus, earth, mars, jupiter, saturn, uranus, neptune"];
	var planetsLandedOn = 0;
	var activeSpacecraft = [];

return {
	last_modified: new Date(),
	addSpacecraft: function(spacecraft) {
		return activeSpacecraft;
	},
	getPlanets: function(){
		return planets;
	},
	getSpacecraft: function() {
		return activeSpacecraft;
	},
	setLandedOn: function(newNum) {
		planetsLandedOn = newNum;
	},
	getLandedOn: function() {
		return planetsLandedOn;
	},
	setCraftExploring: function(newCraft) {
		activeSpacecraft = activeSpacecraft.push(newCraft);
	},
	getCraftExploring: function() {
		return activeSpacecraft;
	}
 };
})();



console.log(solarSystem.getLandedOn());
