import { TestBed } from '@angular/core/testing';

import { RandomRequestsService } from './random-requests.service';
import { HttpClient, HttpHandler } from '@angular/common/http';

describe('RandomRequestsService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      HttpClient,
      HttpHandler
    ]
  }));

  it('should be created', () => {
    const service: RandomRequestsService = TestBed.get(RandomRequestsService);
    expect(service).toBeTruthy();
  });
});
