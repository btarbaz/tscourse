// Decorators in Typescript

/* 
1. Decorator: are attributes which we apply on classes and how they behave. Its just a function which is called by JS runtime
2. Parameterised Decorator: when we need to pass parameter to a decorator.
3. Decorator Compostion: we can apply multiple decorator and it will run in reversed order just like math equation
4. Method Decorator: it require 3 parameter: (target: any, methodName: string, descriptor: PropertyDescriptor)
   Target of the object type any because complier expect this
   MethodName type string
   DescriptorObject for the target method
5. Accessor Decorator: used for getter and setter similar to method
6. Property Decorator: used for property similar to method
7. Parameter Decorator: usually dont use it. It is useful when designing framework for other
*/

// Class Decorator
// Function means we are passing a class to it
function Component(constructor: Function) {
  console.log('Component decorator called');
  // prototype is a js property which add new property and methods to that class
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.insertInDOM = () => {
    console.log('component decorator method called');
  };
}

@Component
class ProductClass {}

// Parameterised Decorator
// We created a decorator factory simply a function which returns a decorator

type ComponentOptions = {
  selector: string;
};
function ParameterisedComponent(options: ComponentOptions) {
  return (constructor: Function) => {
    console.log('Component decorator called');
    // prototype is a js property which add new property and methods to that class
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
      console.log('component decorator method called');
    };
    // use that parameter inside decorator
    constructor.prototype.options = options;
  };
}

@ParameterisedComponent({ selector: '#my-list' })
class ParameterisedClass {}

// Decorator Compostion

// first Parameterized runs then Component will
@Component
@ParameterisedComponent({ selector: '#my-list' })
class CompostionClass {}

// Method Decorator

function Log(target: any, methodName: string, descriptor: PropertyDescriptor) {
  // We get a reference to the original method
  const original = descriptor.value as Function;
  // Then, we redefine the method
  descriptor.value = function (...arg: any) {
    // We have a chance to do something first
    console.log('start');
    // calling orginal method and providing an arg
    original.call(this, ...arg);
    // And we have a chance to do something after
    console.log('end');
  };
}

class People {
  @Log
  say(message: string): void {
    console.log('Person called ' + message);
  }
}

let peron1 = new People();
peron1.say('Yo whats up');

// Accessor Decorator

function Capilatize(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // for getter we use get instead of descriptor.value
  const original = descriptor.get;

  descriptor.get = function () {
    console.log('Applying Capitalize decorator');
    // here orignal canbe null or undefined
    const result = original?.call(this);
    return typeof result === 'string' ? result.toUpperCase() : result;
  };
}

class Gang {
  constructor(private firstName: string, private lastName: string) {}
  @Capilatize
  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}

let gan1 = new Gang('Obby', 'Lecaronfin');
console.log(gan1.fullName);

// Property Decorator

// decorator factory which return a decorator
function MinLength(length: number) {
  // decorator only require two parameters
  return (target: any, propertyName: string) => {
    // We use this variable to hold the value behind the target property.
    let value: string;
    // We create a descriptor for the target property.
    const descriptor: PropertyDescriptor = {
      get() {
        return value;
      },
      // We're defining the setter for the target property.
      set(newValue: string) {
        if (newValue.length < length)
          throw new Error(`${propertyName} should be atleast ${length} size`);
        value = newValue;
      },
    };
    // And finally, we redefine the property.
    Object.defineProperty(target, propertyName, descriptor);
  };
}

class UserForm {
  @MinLength(5)
  password: string;

  constructor(password: string) {
    this.password = password;
  }
}

let aUser = new UserForm('123456');
console.log(aUser.password);

// Parameter Decorator

type WatchedParameter = {
  methodName: string;
  parameterIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, parameterIndex: number) {
  watchedParameters.push({ methodName, parameterIndex });
}

class Vehicle {
  move(@Watch speed: number): void {}
  stop(speed: number, @Watch gear: number): void {}
}

console.log(watchedParameters);
