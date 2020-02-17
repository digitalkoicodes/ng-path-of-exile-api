import { TestBed, getTestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { LeagueService } from './league.service';

describe('LeagueService', () => {
  let injector: TestBed;
  let service: LeagueService;
  let httpMock: HttpTestingController;
  
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [LeagueService]
    });
    injector = getTestBed();
    service = injector.get(LeagueService);
    httpMock = injector.get(HttpTestingController);
  });

  it('should create', () => {
    expect(service).toBeTruthy();
  });

  it('should have method filter', () => {
    expect(service.filter).toBeTruthy();
  });

  it('should successfully call the api', () => {
    service.filter().subscribe(r => {
        expect(r.length).toBeGreaterThan(0);
    });
  });
  
});