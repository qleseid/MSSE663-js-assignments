import { expect } from 'chai';
import 'mocha';

import { 
    newNum, 
    originalNumbers, 
    newWin, 
    originalContenders, 
    newPerson,
    newUp,
    newData,
    update,
    originalPersons,
    originalUpdates} from "./spread";

describe("Week 4 assignments", () => {
  it("should output array [1,2,3,4,5]", () => {
    expect(newNum).to.be.eql(originalNumbers);
  });

  it("should output a number 5", () => {
    expect(newWin.length).to.be.eql(originalContenders);
  });

  it("should output objects { man: 'Bob', boy: 'Kyle' }", () => {
    expect(newPerson).to.be.eql(originalPersons);
  });

  it("should output modified #1 object", () => {
    expect(newUp(update, ...newData)).to.be.eql(originalUpdates);
  });
});