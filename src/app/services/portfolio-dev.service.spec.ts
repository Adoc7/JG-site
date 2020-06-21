import { TestBed } from '@angular/core/testing';

import { PortfolioDevService } from './portfolio-dev.service';

describe('PortfolioDevService', () => {
  let service: PortfolioDevService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PortfolioDevService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
