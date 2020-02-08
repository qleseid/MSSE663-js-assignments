// #1 Array copying
export const numbers = [1, 2, 3, 4, 5];

export const originalNumbers = numbers.map(number => number);
console.log(originalNumbers);

// refactor here
export const nums = [...numbers];
export const newNum = nums.map(nun => nun);
console.log(newNum);

// #2 Combining arrays
export const winners = ['first'];
export const runnerUps = ['second', 'third', 'fourth', 'fifth'];
// console.log(winners.unshift(runnerUps[1]));
// console.log(runnerUps.unshift);

export let newRunner = [...runnerUps];
export const originalContenders = runnerUps.unshift(winners[0]);
console.log(typeof originalContenders);

// refactor here
export const newWin = ['first', ...newRunner];
console.log(typeof newWin);

// #3 Combining objects
export const bob = {
  man: 'Bob'
};

export const kyle = {
  boy: 'Kyle'
};

export const originalPersons = Object.assign(bob, kyle);
console.log(originalPersons);

// refactor here
export const newPerson = {...bob, ...kyle};
console.log(newPerson);

// #4 Modifying values in arrays of objects
export const data = [
  {
    id: 0,
    task: 'Do the thing'
  },
  {
    id: 1,
    task: 'Do the other thing'
  },
  {
    id: 2,
    task: 'Do the last thing'
  }
];

export const update = {
  id: 1,
  task: 'Do the other thing... again'
};


export let newData = JSON.parse(JSON.stringify(data));
/*
console.log(newData);
console.log(data);
*/

export const originalUpdates = data.map(task => {
  if (task.id === update.id) {
    return Object.assign(task, update);
  }
  return task;
});

console.log(originalUpdates);

// refactor here
export const newUp = (up: any, ...dat: any) =>
{
  dat[up.id] = up;
  return dat;
}

// console.log(newData);

console.log(newUp(update, ...newData));