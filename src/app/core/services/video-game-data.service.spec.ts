import { TestBed } from '@angular/core/testing';

import { VideoGameDataService } from './video-game-data.service';

describe('VideoGameDataService', () => {
  let service: VideoGameDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VideoGameDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
