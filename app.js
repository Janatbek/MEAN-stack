function VehicleConstructor(name, numOfWheels, numOfPass, speed) {
  var vehicle = {};
  vehicle.name = name;
  vehicle.wheels = numOfWheels;
  vehicle.passengers = numOfPass;
  vehicle.makeNoise = function(){

  }
  return vehicle;
}

//Bike
var Bike = VehicleConstructor("Schwin", 2, 1);
Bike.makeNoise = function() {
	console.log("ring ring");
}
Bike.makeNoise();

//Sedan
var Sedan = VehicleConstructor("Sedan", 4, 0);
Sedan.makeNoise = function() {
	console.log("Honk Honk");
}
Sedan.makeNoise();

//Bus
var Bus = VehicleConstructor("Bus", 6, 30);
Bus.pickUpPassengers = function(numOfPass){
	this.passengers += numOfPass;
	return this.passengers;
};


//Bus.pickUpPassengers();

console.log(Bus.pickUpPassengers(25));




//private variables called: distance
function VehicleConstructor(name, numOfWheels, numOfPass, speed) {
 this.name = name;
 this.numOfWheels = 

var distance_travelled = 0;
var self = this;
var updateDistanceTravelled = function(speed) {
  return distance_travelled += speed;
}

this.move = updateDistanceTravelled();
//this.move = makeNoise();
this.checkMiles = function() {
  console.log(distance_travelled);
};

var travel = new VehicleConstructor("Toyota", 4, 3, 35);
this.();
//=================================

