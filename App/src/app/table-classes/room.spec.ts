import { Room } from './room';

describe('Room', () => {
  it('should create an instance', () => {
    expect(new Room(1, 'A', 1, 1, '2018-01-19 03:14:07', '2018-01-19 03:14:07')).toBeTruthy();
  });
});
