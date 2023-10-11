// Question 1

let student = {
    firstName: "",
    lastName: "",
    grade: [],
    inputNewGrade(newGrade) {
        this.grade.push(newGrade);
    },
    computeAverageGrade() {
        if (this.grade.length == 0) {
            return 0;
        }
        return this.grade.reduce((e1,e2) => e1 + e2) / this.grade.length;
    }
}

let stu1 = Object.create(student);
stu1.grade = [];
stu1.firstName = "John";
stu1.lastName = "Smiths";
stu1.inputNewGrade(3);
stu1.inputNewGrade(4);
console.log(stu1);

let stu2 = Object.create(student);
stu2.grade = [];
stu2.inputNewGrade(3);
stu2.inputNewGrade(3);
stu2.firstName = "Anna";
stu2.lastName = "Keys";
console.log(stu2);

let stu3 = Object.create(student);
stu3.grade = [];
stu3.inputNewGrade(4);
stu3.inputNewGrade(4);
stu3.firstName = "Samantha"
stu3.lastName = "Murphy"

let array = [stu1,stu2, stu3]
console.log(array);

// compute the average
let q1Average = array.map(e => e.computeAverageGrade()).reduce((e1,e2) => e1 + e2)/array.length
console.log("q1 average: " + q1Average)


// question 2
function Student(firstName, lastname) {
    this.firstName = firstName;
    this.lastName = lastname;
    this.grade = [];
}

Student.prototype.inputNewGrade = function(newGrade) {
    this.grade.push(newGrade);
}

Student.prototype.computeAverageGrade = function() {
    if (this.grade.length == 0) {
        return 0;
    }
    return this.grade.reduce((e1,e2) => e1 + e2) / this.grade.length;
}

let q2Stu1 = new Student("John", "Smiths")
q2Stu1.inputNewGrade(3);
q2Stu1.inputNewGrade(4);
console.dir(q2Stu1);

let q2Stu2 = new Student("Anna", "Keys")
q2Stu2.inputNewGrade(3);
q2Stu2.inputNewGrade(3);
console.dir(q2Stu2);

let q2Stu3 = new Student("Samantha", "Murphy")
q2Stu3.inputNewGrade(4);
q2Stu3.inputNewGrade(4);



let q2Array = [q2Stu1,q2Stu2, q2Stu3]
console.log(q2Array);
// compute the average
let average = q2Array.map(e => e.computeAverageGrade())
.reduce((e1,e2) => e1 + e2)/q2Array.length
console.log("q2 average: " + average)


// question 3: 
Array.prototype.mySort = function() {
    this.sort ((e1, e2) => {
        if (e1 == e2) {
            return 0;
        }
        if (e1 > e2) {
            return 1;
        }
        return -1;
    })
}

let q3Array = ["Manthou", "Charsiu", "Ramen"]
q3Array.mySort();
console.log(q3Array);

// question 4
function Animal(name, speed) {
    this.name = name;
    this.speed = speed;
}
Animal.compareBySpeed = function (a1, a2) {
    if (a1.speed > a2.speed) {
        return 1;
    }
    if (a1.speed == a2.speed) {
        return 0;
    }
    return -1;
}
Animal.prototype.run = function (speed) {
    this.speed += speed;
}

function Rabbit(name, speed) {
    Animal.call(this,name,speed);
}

Rabbit.prototype.hide = function() {
    console.log(this.name + " hides");
}

Object.setPrototypeOf(Rabbit,Animal);
Object.setPrototypeOf(Rabbit.prototype,Animal.prototype);

let cheetah = new Animal("Cheetah", 3);
let rabbit = new Rabbit("Rabbit",2);
rabbit.hide();

cheetah.run(1);
console.log(cheetah.speed)

console.log(Animal.compareBySpeed(cheetah,rabbit));
rabbit.run(5);
console.log(Animal.compareBySpeed(cheetah,rabbit));