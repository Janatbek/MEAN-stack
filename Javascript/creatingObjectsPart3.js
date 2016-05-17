
function Vehicle(name) {
	this.name = name;
	this.vin = 0;
	this.vinGen = function () {
	var arr = [];
	var num = 0;
	var vin = '';

		for (var i = 0; i < 15; i++){

			num = (Math.floor(Math.random() * arr.length));
			arr[i] = num;
			vin = +arr.join('');
		
		};
		
		this.vin = vin;
	};
};

var vehicle1 = new Vehicle("Toyota");
var mercedes = new Vehicle("Mercedes-Benz");

mercedes.vinGen()
console.log(mercedes.vin);


