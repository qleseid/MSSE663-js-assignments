import { expect } from 'chai';
import 'mocha';
import {
  mapped,
  things,
  filterFunc } from './higher-order-funcs';

describe('Higher Order Function tests', () => {
  it("#1 should produce the expected result `[{ id: 1, name 'thing' }, { id: 2, name 'thing' }]` after hoisting", () =>
  {
    expect(mapped(things)).to.be.eql([{ id: 1, name: 'thing1' }, { id: 2, name: 'thing2' }])
  });

  it('#2 should return a single thing from array of things objects after hoisting and currying', () =>
  {
    expect(filterFunc("1")(mapped(things))).to.be.eql([{id: 1, name: "thing1"}])
  });
});
