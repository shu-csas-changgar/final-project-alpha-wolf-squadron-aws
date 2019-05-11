import { City } from './city';

describe('City', () => {
  it('should create an instance', () => {
    expect(new City(1,'Cleveland',1,'2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
