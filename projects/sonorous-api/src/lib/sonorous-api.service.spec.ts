import { TestBed } from '@angular/core/testing';

import { SonorousApiService } from './sonorous-api.service';

describe('SonorousApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonorousApiService = TestBed.get(SonorousApiService);
    expect(service).toBeTruthy();
  });
});
