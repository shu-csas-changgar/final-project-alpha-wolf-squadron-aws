import { View } from './view';

describe('View', () => {
  it('should create an instance', () => {
    expect(new View(1,'this','that',1,2,'String',32,45)).toBeTruthy();
  });
});
