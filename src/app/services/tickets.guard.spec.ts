import { TestBed, async, inject } from '@angular/core/testing';

import { TicketsGuard } from './tickets.guard';

describe('TicketsGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TicketsGuard]
    });
  });

  it('should ...', inject([TicketsGuard], (guard: TicketsGuard) => {
    expect(guard).toBeTruthy();
  }));
});
