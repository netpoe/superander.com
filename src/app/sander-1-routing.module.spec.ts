import { Sander1RoutingModule } from './sander-1-routing.module';

describe('Sander1RoutingModule', () => {
  let sander1RoutingModule: Sander1RoutingModule;

  beforeEach(() => {
    sander1RoutingModule = new Sander1RoutingModule();
  });

  it('should create an instance', () => {
    expect(sander1RoutingModule).toBeTruthy();
  });
});
