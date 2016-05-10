

function VehicleConstructor(name, numOfWheels, numOfPass, speed) {
	this.name = name;
	this.numOfWheels = numOfWheels;
	this.numOfPass = numOfPass;
	this.speed = speed;

	this.makeNoise = function(){
		console.log();
	}
 
 	var distance_travelled = 0;

 	var self = this;
 	var updateDistanceTravelled = function() {
 		distance_travelled += self.speed;
 	}

 	this.move = function() {
 		updateDistanceTravelled();
 		this.makeNoise();
	 };

  	this.checkMiles = function() {
		console.log(distance_travelled);
  	}
}

var car = new VehicleConstructor("toyota", 4, 3, 25);
car.move();
car.checkMiles();
