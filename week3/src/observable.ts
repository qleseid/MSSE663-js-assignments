// Source code here
/*

1 Create an observable stream of an array (utilizing the `of` keyword).

2 Map over the values in the array.

3 Subscribe and ouput values to the concole.

*/

import {of} from 'rxjs';

export const source = of(newFunction());

source.subscribe(helicopters => 
    {
        console.log(helicopters);
    });

function newFunction() {
    return ["Airbus", "Bell", "Agusta", "Robinson"];
}
