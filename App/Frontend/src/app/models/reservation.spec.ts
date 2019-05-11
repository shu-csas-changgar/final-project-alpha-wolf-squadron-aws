import { Reservation } from './reservation';

describe('Reservation', () => {
  it('should create an instance', () => {
    expect(new Reservation(1,"05/02/2019 10:45am",'05/02/2019 12:00pm',1,'05/01/2019','05/02/2019')).toBeTruthy();
  });
});
