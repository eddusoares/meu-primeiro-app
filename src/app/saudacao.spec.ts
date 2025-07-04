import { TestBed } from '@angular/core/testing';

import { SaudacaoService } from './saudacao';

describe('SaudacaoService', () => {
  let service: SaudacaoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SaudacaoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
