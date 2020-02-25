import { expect } from 'chai';
import 'mocha';
import {
  curryMe,
  stringJoin, 
  mathDo,
  doMath,
  ninjaBelt,
  ninjasOne,
   ninjasTwo,
    statusNinja,
     statusTypes,
      gamerStatusTypes
} from './currying';

describe('Currying tests', () => {
  it('#1 should output the same result as the original function', () =>
  {
    expect(stringJoin("Hello")("Beautiful")("World!")).to.be.eql(curryMe("Hello","Beautiful", "World!"))
  });

  it('#2 should output the same result as the original function', () =>
  {
    expect(mathDo(2)(4)(1)).to.be.eql(doMath(2)(4)(1))
  });

  it('#3 should return an array containing the ninjas who have a black belt', () =>
  {
    expect(ninjaBelt(ninjasOne)(ninjasTwo)("black")).to.contain("Rocky")
  });

  it('#4 should return a new array of ninja objects with "status" added to each object', () =>
  {
    let sN1 = statusNinja(ninjasOne)(statusTypes);
    let sN2 = statusNinja(ninjasOne)(gamerStatusTypes);
    sN1.forEach(n1 =>
      {
        expect(n1).to.have.property("status")
      })
      sN1.forEach(n2 =>
        {
          expect(n2).to.have.property("status")
        })
  });
});
