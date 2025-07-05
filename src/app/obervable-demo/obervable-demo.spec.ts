import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObervableDemo } from './obervable-demo';

describe('ObervableDemo', () => {
  let component: ObervableDemo;
  let fixture: ComponentFixture<ObervableDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObervableDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObervableDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
