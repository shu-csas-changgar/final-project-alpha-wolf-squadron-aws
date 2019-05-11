import { ReservationEquipment } from './reservation-equipment';

describe('ReservationEquipment', () => {
  it('should create an instance', () => {
    expect(new ReservationEquipment(1,1,'05/01/2019','05/02/2019')).toBeTruthy();
  });
});
