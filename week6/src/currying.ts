// #1 Convert this javascript function to a curried function
export function curryMe(string1: string, string2: string, string3: string): string {
  return string1 + ' ' + string2 + ' ' + string3;
}
console.log(curryMe("Hello", "Prof.", "Morgan"));

// source code here
export const stringJoin = (s1: string) => (s2: string) => (s3: string) =>
{
  return [s1, s2, s3].join(" ");
};

console.log(stringJoin("Hello")("Prof.")("Morgan"));

// #2 Hoist and convert nested functions to curried functions
export function doMath(a: number) {
  return function add(b: number) {
    return function subtract(c: number) {
      return a + b - c;
    };
  };
}
console.log("Math: " + doMath(2)(4)(1));

// source code here
export const addition = (a: number) => (b: number) =>
{
  return a + b;
};

export const subtraction = (a: number) => (c: number) =>
{
  return a - c;
};

export const mathDo = (a: number) => (b: number) => (c: number) =>
{
  return subtraction(addition(a)(b))(c);
};

console.log("Math: " + mathDo(2)(4)(1));

// #3 Write a curried function that returns an array containing the ninjas who have a black belt
export const ninjasOne = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Leonardo', belt: 'black' },
  { name: 'Mr. Miyagi', belt: 'black' },
  { name: 'Rocky', belt: 'black' },
  { name: 'Colt', belt: 'green' },
  { name: 'Tum Tum', belt: 'white' },
  { name: 'Haru', belt: 'white' },
  { name: 'The Bride', belt: 'black' },
  { name: 'Cammy', belt: 'black' },
  { name: 'Wong Fei-hung', belt: 'green' }
];

export const ninjasTwo = [
  { name: 'Michelangelo', belt: 'white' },
  { name: 'Donatello', belt: 'green' },
  { name: 'Raphael', belt: 'black' },
  { name: 'Jim', belt: 'black' },
  { name: 'The Rat', belt: 'black' }
];

// source code here
export const ninjaBelt = (n1: Array<any>) => (n2: Array<any>) => (belt: string) =>
{
  let results = new Array<string>();
  const allNinjas = [...n1, ...n2];

  allNinjas.forEach(n =>
    {
      if(n.belt === belt)
      {
        results.push(n.name);
      }
    });
  return results;  
};

console.log("#3: " + ninjaBelt(ninjasOne)(ninjasTwo)("black"));


/**
 * #4 Write a curried function that returns a new array of ninja objects with "status" added to each object.
 * The status should be the value of whatever key in the status object matches the ninja's belt.
 *
 * @example { name: 'Colt', belt: 'green', status: 'warrior' }
 */

export const statusTypes = {
  white: 'grasshopper',
  green: 'warrior',
  black: 'sensei'
};

export const gamerStatusTypes = {
  white: 'Noob',
  green: 'Choob',
  black: 'Legend'
};
console.log(gamerStatusTypes);

// source code here
export const statusNinja = (n: Array<any>) => (sta: {}) =>
{
  let resultArr = new Array<any>();

  n.forEach(newN =>
    {
      // console.log(newN);
      // console.log(sta);
      resultArr.push({...newN, "status": sta[newN.belt]});
      // console.log(resultArr);
    })
    return resultArr;
};

let sN1 = statusNinja(ninjasOne)(statusTypes);
let sN2 = statusNinja(ninjasOne)(gamerStatusTypes);
console.log("#4 Status: " + JSON.stringify(sN1));

console.log("#4 Gamer: " + JSON.stringify(sN2));