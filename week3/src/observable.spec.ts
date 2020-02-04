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
import { source } from './observable';

describe('Testing created data stream of helicopter manufactures', () => 
{
    it('Should display an array of Heli Manufactures', () => 
    {
        source.subscribe((heli) => 
        {
            expect(heli).to.eqls(["Airbus", "Bell", "Agusta", "Robinson"]);
        });
    });
})