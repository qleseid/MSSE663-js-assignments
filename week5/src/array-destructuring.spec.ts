import { expect } from 'chai';
import 'mocha';

import 
{
  a,
  b,
  c,
  d,
  e,
  f,
  fruits,
  food,
  others,
  construct
} from './array-destructuring';

describe('Array destructuring tests', () => {
  it('#1 should have a variable for every element in the given array', () =>
  {
    expect(a).to.be.eql(fruits[0]),
    expect(b).to.be.eql(fruits[1]),
    expect(c).to.be.eql(fruits[1]),
    expect(d).to.be.eql(fruits[0]);
  });

  it('#2 should have a variable for the first 2 elements then spread the rest', () =>
  {
    expect(e).to.be.eql(food[0]),
    expect(f).to.be.eql(food[1]),
    expect(others).to.be.eql(['chocolate', 'pears', 'oats', 'pizza']);
  });

  it('#3 should construct a statement from the given objarrayect', () =>
  {
    expect(construct(['hello', 'taylor'])).to.be.eql('hello, taylor!');
  });
});