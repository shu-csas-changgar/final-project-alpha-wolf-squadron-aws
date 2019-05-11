import { Type } from './type';

describe('Type', () => {
  it('should create an instance', () => {
    expect(new Type(1,'laptop','05/01/2019','05/02/2019')).toBeTruthy();
  });
});
