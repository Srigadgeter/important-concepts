// **************************************************** //
// Prototypes, Prototype Chain, Prototype Inheritance
// **************************************************** //

// Definition
// ----------
// Every object in JavaScript has a built-in property, which is called its prototype.
// The prototype is itself an object, so the prototype will have its own prototype,
// making what's called a prototype chain. The chain ends when we reach a prototype that has null for its own prototype

// Note: The property of an object that points to its prototype is not called prototype.
// Its name is not standard, but in practice all browsers use __proto__.
// The standard way to access an object's prototype is the Object.getPrototypeOf() method

// When we want to read a property from object, and it’s missing, JavaScript automatically takes it from the prototype.
// In programming, such thing is called 'prototypal inheritance'

// Example
// -------
const myObject = {
  city: "Bangalore",
  greet() {
    console.log(`Greetings from ${this.city}`);
  },
};

myObject.greet();

// Prototypical inheritance
function Human(name) {
  this.name = name;
  this.energy = 100;
  this.stamina = 100;
}

Human.prototype.walk = function () {
  this.energy -= 10;
};
Human.prototype.eat = function () {
  this.energy += 15;
};

function Athlete(name) {
  Human.call(this, name);
}

// Athlete.prototype.playFootball = function(){ this.energy -= 30 }
// Declaring a new property will be deleted due to below line (Due to recreating complete prototype)
Athlete.prototype = Object.create(Human.prototype);
Athlete.prototype.playFootball = function () {
  this.energy -= 30;
}; // Here it would be added a new property

// References
// ----------
// https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
// https://learn.devkode.io/#/javascript/prototypal-inheritance/guides
