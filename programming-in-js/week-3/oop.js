class Animal {
  /* Class code here */
}
// creating a new class
var myDog = Object.create(Animal);

//alternative

var myDog2 = new Animal();

// inheritance

class Animal {}
class Bird extends Animal {}
class Eagle extends Bird {}

// encapsulation

"abc".toUpperCase(); // the funtion is encapsulated

// abstraction

// polymorphism
/* So, to understand what polymorphism is about, let's consider some real-life objects.

A door has a bell. It could be said that the bell is a property of the door object. This bell can be rung. When would someone ring a bell on the door? Obviously, to get someone to show up at the door.

Now consider a bell on a bicycle. A bicycle has a bell. It could be said that the bell is a property of the bicycle object. This bell could also be rung. However, the reason, the intention, and the result of somebody ringing the bell on a bicycle is not the same as ringing the bell on a door.*/

const bicycle = {
  bell: function () {
    return "Ring, ring! Watch out, please!";
  },
};
const door = {
  bell: function () {
    return "Ring, ring! Come here, please!";
  },
};

function ringTheBell(thing) {
  console.log(thing.bell());
}
// Here's an example of polymorphism using classes in JavaScript:

class Bird {
  useWings() {
    console.log("Flying!");
  }
}
class Eagle extends Bird {
  useWings() {
    super.useWings();
    console.log("Barely flapping!");
  }
}
class Penguin extends Bird {
  useWings() {
    console.log("Diving!");
  }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); // "Flying! Barely flapping!"
kingPenguin.useWings(); // "Diving!"
