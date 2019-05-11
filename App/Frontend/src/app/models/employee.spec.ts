import { Employee } from './employee';

describe('Employee', () => {
  it('should create an instance', () => {
    expect(new Employee(1,'jharenson','calderon','908-566-2079','908-822-2049','jcalderon927@gmail.com','jcalderon', 1,1,1,'05/01/2019','05/02/2019')).toBeTruthy();
  });
});
