const dog = {};
console.log(dog);

dog.name = "Bobby";
dog.legs = 4;
dog.color = "white";
dog.age = 5;
dog.breed = "German Shepherd";

dog.bark = function () {
  return "woof woof";
};
dog.getDogInfo = function () {
  return `${this.name} is a ${this.breed} dog with ${this.color} color`;
};

console.log(dog);
console.log(dog.bark());
console.log(dog.getDogInfo());