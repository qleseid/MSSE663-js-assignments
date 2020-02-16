import { expect } from 'chai';
import 'mocha';

import 
{
  object,
  person,
  job,
  nestedObject,
  user,
  address,
  id,
  newOb,
  three,
  cons
} from './object-destructuring';

describe('Object destructuring tests', () => {
  it('#1 should have a variable for every property in the given object', () =>
  {
    expect(person).to.be.eql(object.name),
    expect(job).to.be.eql(object.title);
  });

  it('#2 should have a variable for every property in the given nested object', () =>
  {
    expect(user).to.be.eql(nestedObject.user),
    expect(address).to.be.eql(nestedObject.address),
    expect(id).to.be.eql(nestedObject.id);
  });

  it('#3 should create a new object given the destructed variables from the nested object', () =>
  {
    expect(user).to.be.eql(newOb.user),
    expect(address).to.be.eql(newOb.address),
    expect(id).to.be.eql(newOb.id);    
  });

  it('#4 should construct a statement from the given object', () =>
  {
    expect(cons(three)).to.be.eql('hello, taylor!');
  });
});
