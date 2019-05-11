import { Inventory } from './inventory';

describe('Inventory', () => {
  it('should create an instance', () => {
    expect(new Inventory(1, 1, 1, 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
