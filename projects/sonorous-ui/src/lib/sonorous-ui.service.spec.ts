import { TestBed } from '@angular/core/testing';

import { SonorousUiService } from './sonorous-ui.service';

describe('SonorousUiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SonorousUiService = TestBed.get(SonorousUiService);
    expect(service).toBeTruthy();
  });
});
