import { Sander1Module } from './sander1.module';

describe('Sander1Module', () => {
  let sander1Module: Sander1Module;

  beforeEach(() => {
    sander1Module = new Sander1Module();
  });

  it('should create an instance', () => {
    expect(sander1Module).toBeTruthy();
  });
});
