"use strict";
class Account {
    constructor(id, name, _balance) {
        this.id = id;
        this.name = name;
        this._balance = _balance;
    }
    deposited(amount) {
        if (amount <= 0)
            throw new Error('Wrong amount');
        this._balance += amount;
    }
    get balance() {
        return this._balance;
    }
}
let account = new Account(0, 'Ali', 0);
account.deposited(1000);
console.log(account.balance);
class SeatAllotment {
}
let seats = new SeatAllotment();
seats.A1 = 'Ali';
seats['A2'] = 'Saad';
console.log(seats);
class Ride {
    start() {
        Ride._activeRides++;
    }
    stop() {
        Ride._activeRides--;
    }
    static get activeRides() {
        return Ride._activeRides;
    }
}
Ride._activeRides = 0;
let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();
console.log(Ride.activeRides);
class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return this.firstName + ' ' + this.lastName;
    }
    walk() {
        console.log('walking');
    }
}
class Student extends Person {
    constructor(studentId, firstName, lastName) {
        super(firstName, lastName);
        this.studentId = studentId;
    }
    performTest() {
        console.log('Performing test');
    }
}
class Teacher extends Person {
    get fullName() {
        return 'Professor ' + super.fullName;
    }
}
class Principle extends Person {
    get fullName() {
        return 'Principle ' + super.fullName;
    }
}
let student1 = new Student(1, 'Ali', 'Saad');
console.log(student1.fullName);
let teacher1 = new Teacher('Uzair', 'Ali');
console.log(teacher1.fullName);
function printNames(peoples) {
    for (let people of peoples)
        console.log(people.fullName);
}
printNames([
    new Student(1, 'Ali', 'Saad'),
    new Teacher('Uzair', 'Ali'),
    new Principle('Arbaz', 'Khan'),
]);
class Shape {
    constructor(color) {
        this.color = color;
    }
}
class Cirle extends Shape {
    constructor(radius, color) {
        super(color);
        this.radius = radius;
    }
    render() {
        console.log('rendering circle');
    }
}
class GoogleCalendar {
    constructor(name) {
        this.name = name;
    }
    sync() {
        throw new Error('Method not implemented.');
    }
    addEvent() {
        throw new Error('Method not implemented.');
    }
    removeEvent() {
        throw new Error('Method not implemented.');
    }
}
//# sourceMappingURL=oop.js.map