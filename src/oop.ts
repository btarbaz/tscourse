// OOP
/* 
1. Created class with constructor and method.
2. Used readonly and optional operator(?) in properties.
3. Used access modifier to strict accessibility.
    Private: not accessible outside class and not inherited to sub classes. 
    Protected: can inherited to sub classes but not outside classs
4. Parameters properties: implementation of properties in constructor's parameters to avoid rewrite.
5. Getter and Setter methods inside class to get and set values of properties
6. Index signatures: ""[property name: property type]: value type"" In ts we cant dynamically assign new props to objs so we use this
7. Static members: It makes property to only belongs to class not objects.
8. Inheritance: reuse of code, reusing properties and methods of one class into another.
9. Method Overriding: changing its implementation e.g changing fullname prefix for teacher and students.
10. Polymorphism: it refers where object can take many different forms. It pushes us towards Open closed principle.
11. Open closed Principle: classes should be open to extensions but closed for modification.
12. Abstract Classes: it is like uncooked meal which needs extending to solve purpose
13. Abstract Method: It has no implementation no use Similar to class but it can only aplicable inside abstract class
14. Interfaces: Using it describles shape of an object.
    It is somewhat similar to abstract but used to only declare properties and methods.
    Cant implement methods, if you want then use abstract classes.
 */

class Account {
  // readonly id: number;
  // name: string;
  // private _balance: number;
  nickname?: string;

  // constructor(id: number, name: string, balance: number) {
  //   this.id = id;
  //   this.name = name;
  //   this._balance = balance;
  // }

  // parameter properties implementation
  constructor(
    public readonly id: number,
    public name: string,
    private _balance: number
  ) {}

  deposited(amount: number): void {
    if (amount <= 0) throw new Error('Wrong amount');
    this._balance += amount;
  }

  // private calculateTax() {}

  // Normal Implementation

  // getBalance(): number {
  //   return this._balance;
  // }

  // getter
  get balance(): number {
    return this._balance;
  }

  // setter implementation

  // set balance(amount: number){
  //   if (amount <= 0) throw new Error('Wrong amount');
  //   this._balance += amount;
  // }
}

let account = new Account(0, 'Ali', 0);

account.deposited(1000);
console.log(account.balance);

// use instanceof to check object instead of typeof
// if(account instanceof Account) it returns boolean

class SeatAllotment {
  // A1, A2, ...
  // Ali, Saad, ...
  // let A1 = Ali ...

  // Index Signature
  [seatNumber: string]: string;
}

let seats = new SeatAllotment();

seats.A1 = 'Ali';
seats['A2'] = 'Saad';

console.log(seats);

class Ride {
  // this belongs to instance
  // activeRides: number = 0

  // this belongs to class only. we cant access with instance(object)
  private static _activeRides: number = 0;

  start(): void {
    Ride._activeRides++;
  }
  stop(): void {
    Ride._activeRides--;
  }

  // this belongs to class only. we cant access with instance(object)
  static get activeRides(): number {
    return Ride._activeRides;
  }
}

let ride1 = new Ride();
ride1.start();
let ride2 = new Ride();
ride2.start();

console.log(Ride.activeRides);

// Inheritance

class Person {
  constructor(public firstName: string, public lastName: string) {}

  get fullName(): string {
    return this.firstName + ' ' + this.lastName;
  }

  walk(): void {
    console.log('walking');
  }
}

class Student extends Person {
  // Since we have new property to initialize that why we use parameter property(studentId)
  // and parameters (first and lastname) to pass it to parent constructor using super()
  // NOTE: If we dont have new property or no constructor than no need to pass it to parent class
  constructor(public studentId: number, firstName: string, lastName: string) {
    super(firstName, lastName);
  }

  performTest(): void {
    console.log('Performing test');
  }
}

class Teacher extends Person {
  // NOTE: here we dont need constructor

  // method overriding to change implementation of it
  override get fullName(): string {
    // get remaining using super
    return 'Professor ' + super.fullName;
  }
}

class Principle extends Person {
  override get fullName(): string {
    // get remaining using super
    return 'Principle ' + super.fullName;
  }
}
let student1 = new Student(1, 'Ali', 'Saad');

console.log(student1.fullName);

let teacher1 = new Teacher('Uzair', 'Ali');

console.log(teacher1.fullName);

// NOTE: Polymorism technique used to print names
//       in which method fullname overriding depending upon its instance.
function printNames(peoples: Person[]): void {
  for (let people of peoples) console.log(people.fullName);
}

printNames([
  new Student(1, 'Ali', 'Saad'),
  new Teacher('Uzair', 'Ali'),
  new Principle('Arbaz', 'Khan'),
]);

// Abstract class and method

abstract class Shape {
  constructor(public color: string) {}

  abstract render(): void;
}

class Cirle extends Shape {
  constructor(public radius: number, color: string) {
    super(color);
  }

  override render(): void {
    console.log('rendering circle');
  }
}

// Interfaces

// JS dont support interface so there is no js code of it.
interface Calendar {
  name: string;
  addEvent(): void;
  removeEvent(): void;
}

interface CloudCalendar extends Calendar {
  sync(): void;
}

// use "implements" to use interface with class
class GoogleCalendar implements CloudCalendar {
  constructor(public name: string) {}
  sync(): void {
    throw new Error('Method not implemented.');
  }
  addEvent(): void {
    throw new Error('Method not implemented.');
  }
  removeEvent(): void {
    throw new Error('Method not implemented.');
  }
}
