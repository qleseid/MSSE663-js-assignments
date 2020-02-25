/**
 * #1 Higher order things.
 *
 * - Map the values to produce the result:
 *
 * [{ id: 1, name 'thing' }, { id: 2, name 'thing' }]
 *
 * - Then Hoist the callback function.
 *
 */
export const things = ['thing1', 'thing2'];

// create callback here
export const mapCall = (pos: number, callBack: string) =>
{
    let ret = {id: (pos + 1), name: callBack};
    return ret;
}
// create map here
export const mapped = (toMap: Array<any>) =>
{
    let resultMap = new Array<any>();
    resultMap = toMap.map(m => mapCall(toMap.indexOf(m), m));
    return resultMap;
}

console.log(mapped(things));

/**
 * #2 Higher order then curry.
 *
 * - Write a function that accepts a key as a string.
 * - Filter the results from #1 to return a single `thing` object.
 * - Hoist that filter callback and curry all functions.
 */

// create function here
export const filterFunc = (key: string) => (toFil: Array<any>) =>
{
    let resultFilter = new Array<any>();
    let num: number = parseInt(key);

    resultFilter = toFil.filter((e,i) =>
    {
        return (e.id === num);
    });
    return resultFilter;
};

console.log(filterFunc("1")(mapped(things)))