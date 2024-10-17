"use strict";
var _a;
class KeyValuePairs {
    constructor(key, value) {
        this.key = key;
        this.value = value;
    }
}
let pair = new KeyValuePairs(1, 'abc');
function utilsArray(value) {
    return [value];
}
let arrayy = utilsArray(2);
function fetch(url) {
    console.log(url);
    return { data: null, error: null };
}
let values = fetch('url');
(_a = values.data) === null || _a === void 0 ? void 0 : _a.username;
function echo(value) {
    return value;
}
echo({ name: 'a' });
class Store {
    constructor() {
        this._objects = [];
    }
    add(obj) {
        this._objects.push(obj);
    }
    find(property, value) {
        return this._objects.find(obj => obj[property] === value);
    }
}
class CompressibleStore extends Store {
    compress() { }
}
let store = new CompressibleStore();
store.add({ name: 'abc', price: 25 });
class SearchableStore extends Store {
    search(name) {
        return this._objects.find(obj => obj.name === name);
    }
}
let store2 = new SearchableStore();
store2.search('abc');
class ProductStore extends Store {
    searchCategory(category) {
        console.log(category);
        return [];
    }
}
let store3 = new ProductStore();
store3.searchCategory('abc');
const newStore = new Store();
newStore.add({ name: 'abc', price: 44 });
newStore.find('price', 44);
//# sourceMappingURL=generics.js.map