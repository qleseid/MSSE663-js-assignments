// #1 Variable swapping
export const fruits = ['apple', 'banana'];
export let a: string,
b: string,
c: string,
d: string,
e: string,
f: string,
others: Array<string>;

[a, b] = fruits;

// Currently, I would get the following:
console.log(a); // 'apple'
console.log(b); // 'banana'

// deconstruct here

[c, d] = [b, a];
// Assign variables using ES6 so that we get (note, you cannot just make a completely new array):
console.log(c); // 'banana';
console.log(d); // 'apple';

// #2 Variables and Rest
export const food = ['apple', 'banana', 'chocolate', 'pears', 'oats', 'pizza'];

// deconstruct here
[e, f, ...others] = food;
// expected result:
console.log(e); // 'apple'
console.log(f); // 'banana'
console.log(others); // ['chocolate, 'pears', 'oats', 'pizza']

// #3 Array: Construct a statement
['hello', 'taylor'];

// construct statement here
export function construct([f, l]: [string, string]): string
{
    return`${f}, ${l}!`;
}
// expected result: 'hello, taylor!'
console.log(construct(['hello', 'taylor']));