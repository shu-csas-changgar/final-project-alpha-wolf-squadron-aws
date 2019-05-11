import { Equipment } from './equipment';

describe('Equipment', () => {
  it('should create an instance', () => {
    expect(new Equipment(1, 'Desktop1', 1, '2018-01-19 03:14:07', 1, 1, 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
