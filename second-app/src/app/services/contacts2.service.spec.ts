import { TestBed, inject } from '@angular/core/testing';

import { Contacts2Service } from './contacts2.service';

describe('Contacts2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Contacts2Service]
    });
  });

  it('should be created', inject([Contacts2Service], (service: Contacts2Service) => {
    expect(service).toBeTruthy();
  }));
});
