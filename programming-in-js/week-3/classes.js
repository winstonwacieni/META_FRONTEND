// creating classes in javascript
/* inheritance in jscript is based around the
the prototype object.
all object built from the prototype share the 
same functionality
When building complex OOP relationships use the class keyword - easy to understand
*/

// coding a course class

class Course {
  constructor(name, level) {
    this.name = name;
    this.level = level;
  }
}
// noted: the costructor is a special function of the Courses class

// new instance of courses class

var myFirstCourse = new Course("engineering", 1);
console.log(myFirstCourse);

// adding methods to classes

class CourseDefine {
  constructor(courseName, courseLevel) {
    this.courseName = courseName;
    this.courseLevel = courseLevel;
    this.available;
    this.pass = pass;
  }
  togglePass() {
    this.pass = !this.pass;
  }
  passStatus() {
    console.log("Pass, or No Pass?", this.pass);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

// class extensions

class HighSpeedTrain extends Train {
  constructor(passengers, highspeedOn, color, lightsOn) {
    super(color, lightson);
    this.passengers = passengers;
    this.highspeedOn = highspeedOn;
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights on");
  }
}

// complete code

class Train {
  constructor(color, lightsOn) {
    this.color = color;
    this.lightsOn = lightsOn;
  }
  toggleLights() {
    this.lightsOn = !this.lightsOn;
  }
  lightsStatus() {
    console.log("Lights on?", this.lightsOn);
  }
  getSelf() {
    console.log(this);
  }
  getPrototype() {
    var proto = Object.getPrototypeOf(this);
    console.log(proto);
  }
}

class HighSpeedTrain extends Train {
  constructor(passengers, highSpeedOn, color, lightsOn) {
    super(color, lightsOn);
    this.passengers = passengers;
    this.highSpeedOn = highSpeedOn;
  }
  toggleHighSpeed() {
    this.highSpeedOn = !this.highSpeedOn;
    console.log("High speed status:", this.highSpeedOn);
  }
  toggleLights() {
    super.toggleLights();
    super.lightsStatus();
    console.log("Lights are 100% operational.");
  }
}

var myFirstTrain = new Train("red", false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train("blue", false);
var myThirdTrain = new Train("blue", false);

var train4 = new Train("red", false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train("blue", false);
var highSpeed1 = new HighSpeedTrain(200, false, "green", false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.
