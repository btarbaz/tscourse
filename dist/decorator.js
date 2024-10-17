"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function Component(constructor) {
    console.log('Component decorator called');
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.insertInDOM = () => {
        console.log('component decorator method called');
    };
}
let ProductClass = class ProductClass {
};
ProductClass = __decorate([
    Component
], ProductClass);
function ParameterisedComponent(options) {
    return (constructor) => {
        console.log('Component decorator called');
        constructor.prototype.uniqueId = Date.now();
        constructor.prototype.insertInDOM = () => {
            console.log('component decorator method called');
        };
        constructor.prototype.options = options;
    };
}
let ParameterisedClass = class ParameterisedClass {
};
ParameterisedClass = __decorate([
    ParameterisedComponent({ selector: '#my-list' })
], ParameterisedClass);
let CompostionClass = class CompostionClass {
};
CompostionClass = __decorate([
    Component,
    ParameterisedComponent({ selector: '#my-list' })
], CompostionClass);
function Log(target, methodName, descriptor) {
    const original = descriptor.value;
    descriptor.value = function (...arg) {
        console.log('start');
        original.call(this, ...arg);
        console.log('end');
    };
}
class People {
    say(message) {
        console.log('Person called ' + message);
    }
}
__decorate([
    Log
], People.prototype, "say", null);
let peron1 = new People();
peron1.say('Yo whats up');
function Capilatize(target, methodName, descriptor) {
    const original = descriptor.get;
    descriptor.get = function () {
        console.log('Applying Capitalize decorator');
        const result = original === null || original === void 0 ? void 0 : original.call(this);
        return typeof result === 'string' ? result.toUpperCase() : result;
    };
}
class Gang {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    get fullName() {
        return `${this.firstName} ${this.lastName}`;
    }
}
__decorate([
    Capilatize
], Gang.prototype, "fullName", null);
let gan1 = new Gang('Obby', 'Lecaronfin');
console.log(gan1.fullName);
function MinLength(length) {
    return (target, propertyName) => {
        let value;
        const descriptor = {
            get() {
                return value;
            },
            set(newValue) {
                if (newValue.length < length)
                    throw new Error(`${propertyName} should be atleast ${length} size`);
                value = newValue;
            },
        };
        Object.defineProperty(target, propertyName, descriptor);
    };
}
class UserForm {
    constructor(password) {
        this.password = password;
    }
}
__decorate([
    MinLength(5)
], UserForm.prototype, "password", void 0);
let aUser = new UserForm('123456');
console.log(aUser.password);
const watchedParameters = [];
function Watch(target, methodName, parameterIndex) {
    watchedParameters.push({ methodName, parameterIndex });
}
class Vehicle {
    move(speed) { }
    stop(speed, gear) { }
}
__decorate([
    __param(0, Watch)
], Vehicle.prototype, "move", null);
__decorate([
    __param(1, Watch)
], Vehicle.prototype, "stop", null);
console.log(watchedParameters);
//# sourceMappingURL=decorator.js.map