// console.log('hello world');
// let age: number = 20;
// if (age < 50) age += 10;
// console.log(age);

// Array
let marks: number[] = [1, 2, 3];

// Tuples: fixed length array where element have different type
let info: [number, string] = [1, 'Ali'];

// Enum: list of related constant. And if we use const it will generate optimal js code
enum mySize {
  small = 1,
  medium,
  large,
}

let yo = mySize.large;

// Function

function calculateTax(income: number, taxYear = 2022): number {
  if (taxYear > 2022) {
    return income * 1.3;
  } else {
    return income * 1.2;
  }
}

// Object

let employee: {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
} = {
  id: 1,
  name: 'Ali',
  retire(date: Date) {
    console.log(date);
  },
};

// Type allias: let you duplicate properties

type Employee = {
  readonly id: number;
  name: string;
  retire: (date: Date) => void;
};

let one: Employee = {
  id: 2,
  name: 'Saad',
  retire(date: Date) {
    console.log(date);
  },
};

// Union type: symbol "|" means a varaible can have one of the type

function calKgToGram(weight: number | string): number {
  if (typeof weight === 'number') return weight / 1000;
  else return parseInt(weight) / 1000;
}

calKgToGram(2);
calKgToGram('2kg');

// Intersection type: '&' means a variable can have both types

type Dragable = {
  drag: () => void;
};
type Resizable = {
  resize: () => void;
};

type UIWidget = Dragable & Resizable;

// we need to initialize all methods of dragable and resizable
let textbox: UIWidget = {
  drag() {},
  resize() {},
};

// Literal type: exactly,specific

type Quantity = 50 | 100;

let quantity: Quantity = 100;

type Unit = 'cm' | 'inch';

let unit: Unit = 'cm';

// Nullable type: by default we cant pass null value

function greet(name: string | null | undefined): void {
  if (name) console.log(name);
  else console.log('Yo sup!');
}

greet('Hello');

// Optional Chaining: "?." access optional property/element/call

type Customer = {
  // optional its type
  birthday?: Date;
};

function getBirthday(id: number): Customer | null | undefined {
  return id === 0 ? null : { birthday: new Date() };
}

let customer = getBirthday(0);
console.log(customer?.birthday?.getFullYear());

// element
let products: [] | null = null;

products?.[0];

// call
// let log: any = null;

// log?.('a');

// Nullish Coalescing operator: "??"

let speed: number | null = null;
let ridee = {
  // speed: speed !== null ? 30 : null
  speed: speed ?? 30,
};

// Type assertion: "as TYPE" or "let email = <TYPE> ...."  changes its type to given type, when you know more about the element

let email = document.getElementById('email') as HTMLInputElement;
let email1 = <HTMLInputElement>document.getElementById('email');

// if its not return your given type then it will crash your code. So use carefully
email.value;

// Unknown type: use it instead of Any type because it wont crash our code if we use non exist elements but it force us to validate and narrow types of

function render(document: unknown) {
  // Narrowing by using typeof for strings/numbers/... and instanceof for custom type
  if (typeof document === 'string') document.concat();
  // if(document instanceof DisplayCheck)
}

// Never type: use when to tell complier that function never returns

// function processTest(): never{
//   while (true) {

//   }
// }
// processTest()
// console.log('test');

// ------- Wildcard Import if you have alot of imports
// import * as Shapes from './decorator'

// JSdoc: It is used to define type of JS file for TS complier
/**
 * @description Something something
 * @params {type} parmName
 * @returns {type}
 */

// Declaration file: must have same name as JS file(name.d.ts). If you create declaration file then you must declare all in order to use it otherwise complier wont allow
import { CalculateTax } from './tax';

console.log(CalculateTax(2_000));

// IMPORTANT NOTE:
// Declaration files for JS libaries: most of them comes with declaration file if not
// We can use type definition files from the Definitely Typed GitHub repository (@types/<package>) as dev dependancy
