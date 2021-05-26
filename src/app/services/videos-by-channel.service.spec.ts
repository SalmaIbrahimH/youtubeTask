import { TestBed } from '@angular/core/testing';

import { getVideosAndDetails } from './getVideosAndDetails.service';

describe('VideosByChannelService', () => {
  let service: getVideosAndDetails;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(getVideosAndDetails);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
