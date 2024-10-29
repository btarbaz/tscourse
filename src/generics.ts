// Generics in Typescript

/* 
1. Generic Classes: reusable solution where we provide one or more generic type parameter i.e <T> to types for later assignment
   e.g classname<arg,..>{const(param: arg)}
2. Generic Function: similar to class
3. Generic Interface: explained below
4. Generic Constraints: limit arg to specfic type i.e object,class,string even interface. using "extends"
5. Extending Generic Classes:
6. Keyof Operator: 'name: keyof product' It means parameter type will be keys of product property.
7. Type Mapping: base a type of another type means if we want readonly type of Product interface so
   instead of creating new class with readonly we use type mapping technique using index signature and keyof operator
*/

// class
class KeyValuePairs<K, V> {
  constructor(public key: K, public value: V) {}
}

let pair = new KeyValuePairs<number, string>(1, 'abc');

// function

function utilsArray<T>(value: T) {
  return [value];
}

let arrayy = utilsArray<number>(2);

// Interface

// myweb.com/users
// myweb.com/products

// Here we have a generic interface
interface Result<T> {
  data: T | null;
  error: string | null;
}

interface Users {
  username: string;
}
interface Productss {
  title: string;
}

// generic interface require generic function
function fetch<T>(url: string): Result<T> {
  console.log(url);
  return { data: null, error: null };
}

let values = fetch<Users>('url');
values.data?.username;

// Constraints

function echo<T extends { name: string }>(value: T): T {
  return value;
}

echo({ name: 'a' });

// Extending generic classes
// Three scenarios possible in extending
/* We have a store where we have lists of products,customers,...  */

interface Products {
  name: string;
  price: number;
}

// Store can have different lists so we created generic class
// this class only add save diffrent objs
class Store<T> {
  protected _objects: T[] = [];

  add(obj: T): void {
    this._objects.push(obj);
  }

  // keyoff operator example
  find(property: keyof T, value: unknown): T | undefined {
    return this._objects.find(obj => obj[property] === value);
  }
}

// 1st: Passing generic type

class CompressibleStore<T> extends Store<T> {
  compress() {}
}

// here we passed Product interface through compr. class up and used add method of parent class adding product obj
let store = new CompressibleStore<Products>();
store.add({ name: 'abc', price: 25 });

// 2nd: Restricting generic type parameter

// Since Complier dont know T has name property So here we specify generic parameter using constraints because complier dont know obj.name so we restrict it.
//  Now any list can be searched having name property
class SearchableStore<T extends { name: string }> extends Store<T> {
  search(name: string): T | undefined {
    return this._objects.find(obj => obj.name === name);
  }
}

let store2 = new SearchableStore<Products>();
store2.search('abc');

// Fix the generic type parameter
// If we have some operation which only applies to product so we have use this scenario
class ProductStore extends Store<Products> {
  searchCategory(category: string): Products[] {
    console.log(category);
    return [];
  }
}

let store3 = new ProductStore();
store3.searchCategory('abc');

// Keyof Operator
// T is Product
// keyof T = name | price
const newStore = new Store<Products>();
newStore.add({ name: 'abc', price: 44 });
newStore.find('price', 44);

// TypeMapping

type ReadOnly<T> = {
  // make it dynamic so we can add properties without changing the base
  // index signature + type of operator
  [K in keyof T]: T[K];
};

type Optinal<T> = {
  // make it dynamic so we can add properties without changing the base
  // index signature + type of operator
  [K in keyof T]?: T[K];
};

// For example using Products interface
type ReadOnlyProduct = {
  // make it dynamic so we can add properties without changing the base
  // index signature + type of operator

  readonly [Property in keyof Products]: Products[Property];
};
