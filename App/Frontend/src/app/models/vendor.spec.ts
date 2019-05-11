import { Vendor } from './vendor';

describe('Vendor', () => {
  it('should create an instance', () => {
    expect(new Vendor(1, 'EquipMart', '973-275-9000', 'us@abc.com', 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
