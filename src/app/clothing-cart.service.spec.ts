import { TestBed } from '@angular/core/testing';

import { ClothingCartService } from './clothing-cart.service';

describe('ClothingCartService', () => {
  let service: ClothingCartService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClothingCartService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
