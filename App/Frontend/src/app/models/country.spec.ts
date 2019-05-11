import { Country } from './country';

describe('Country', () => {
  it('should create an instance', () => {
    expect(new Country(1,'USA','05/01/2019','05/01/2019')).toBeTruthy();
  });
});
