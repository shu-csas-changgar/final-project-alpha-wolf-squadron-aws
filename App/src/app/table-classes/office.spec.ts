import { Office } from './office';

describe('Office', () => {
  it('should create an instance', () => {
    expect(new Office(1, 'HQ', '973-275-9000', '973-275-9566', 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
