"use strict";
var _a;
let marks = [1, 2, 3];
let info = [1, 'Ali'];
var mySize;
(function (mySize) {
    mySize[mySize["small"] = 1] = "small";
    mySize[mySize["medium"] = 2] = "medium";
    mySize[mySize["large"] = 3] = "large";
})(mySize || (mySize = {}));
let yo = mySize.large;
function calculateTax(income, taxYear = 2022) {
    if (taxYear > 2022) {
        return income * 1.3;
    }
    else {
        return income * 1.2;
    }
}
let employee = {
    id: 1,
    name: 'Ali',
    retire(date) {
        console.log(date);
    },
};
let one = {
    id: 2,
    name: 'Saad',
    retire(date) {
        console.log(date);
    },
};
function calKgToGram(weight) {
    if (typeof weight === 'number')
        return weight / 1000;
    else
        return parseInt(weight) / 1000;
}
calKgToGram(2);
calKgToGram('2kg');
let textbox = {
    drag() { },
    resize() { },
};
let quantity = 100;
let unit = 'cm';
function greet(name) {
    if (name)
        console.log(name);
    else
        console.log('Yo sup!');
}
greet('Hello');
function getBirthday(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getBirthday(0);
console.log((_a = customer === null || customer === void 0 ? void 0 : customer.birthday) === null || _a === void 0 ? void 0 : _a.getFullYear());
let products = null;
products === null || products === void 0 ? void 0 : products[0];
let speed = null;
let ridee = {
    speed: speed !== null && speed !== void 0 ? speed : 30,
};
let email = document.getElementById('email');
let email1 = document.getElementById('email');
email.value;
function render(document) {
    if (typeof document === 'string')
        document.concat();
}
//# sourceMappingURL=index.js.map