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
