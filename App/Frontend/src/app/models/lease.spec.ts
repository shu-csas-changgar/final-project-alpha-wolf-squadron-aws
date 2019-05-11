import { Lease } from './lease';

describe('Lease', () => {
  it('should create an instance', () => {
    expect(new Lease(1,'05/01/2019','10/01/2019','05/01/2019','05/02/2019')).toBeTruthy();
  });
});
