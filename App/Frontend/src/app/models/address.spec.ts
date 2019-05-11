import { Address } from './address';

describe('Address', () => {
  it('should create an instance', () => {
    expect(new Address(1, '400 S Orange Ave', '1104', 'South Orange', '07079', 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
