
function personConstractor(name) {
	person = {
			name: name,
			distance_traveled: 0,
			say_name:  function() {
				alert(person.name);
			},
			say_something: function (word) {
				console.log(person.name + " says " + word);
			},
			walk: function(){
				alert(person.name + " is walking");
				person.distance_traveled += 3;
				console.log(person.distance_traveled);
			},
			run: function() {
				alert(person.name + " is running ");
				person.distance_traveled += 10;
				console.log(person.distance_traveled);
			},
			crawl: function() {
				alert(person.name + " is crawling");
				person.distance_traveled += 1;
				console.log(person.distance_traveled);
			}
		}

		return person;

	}

function ninjaConstractor(name, cohort){
var ninja = {
	name: name,
	cohort:cohort,
	beltLevel: 1,
	levelUp: function(){
		ninja.beltLevel++;
		}
	};
	return ninja;
}

var newNinja = ninjaConstractor("sensei", "Los-Angeles");
newNinja.levelUp();
console.log(newNinja);


