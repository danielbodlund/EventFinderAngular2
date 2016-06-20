import {
  beforeEachProviders,
  it,
  describe,
  expect,
  inject
} from '@angular/core/testing';
import { CameraService } from './camera.service';

describe('Camera Service', () => {
  beforeEachProviders(() => [CameraService]);

  it('should ...',
      inject([CameraService], (service: CameraService) => {
    expect(service).toBeTruthy();
  }));
});
