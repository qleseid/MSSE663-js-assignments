/*

1 Describe what you want to test.

2 Write a test for 3 scenarios of your choice.

```javascript
// Tests are sutrctured in this pattern
describe('...', () => {
    it('...', () => {});
    ...
});
```
*/

import { expect } from 'chai';
import 'mocha';
import {yeller} from './app';

describe('Test for Week 3 app.ts', () => 
{
    const fluff = new yeller(
        13,
         ["play", "sleep", "eat"],
          "white"
    );

    it('Should return a the color white', () =>
    {
        expect(fluff.getColor()).to.equal('white');
    });

    it('Should return a true, ages match', () =>
    {
        expect(fluff.sameAge(13)).to.be.true;
    });

    it('Should return a the three skills: play, sleep, eat', () =>
    {
        expect(fluff.getSkills()).to.eqls(["play", "sleep", "eat"]);
    });
});
