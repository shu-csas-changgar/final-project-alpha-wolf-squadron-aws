import { ReservableEquipment } from './reservable-equipment';

describe('ReservableEquipment', () => {
  it('should create an instance', () => {
    expect(new ReservableEquipment(1,0,1,'05/02/2019','05/03/2019')).toBeTruthy();
  });
});
