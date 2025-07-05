import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableAngular } from './observable-angular';

describe('ObservableAngular', () => {
  let component: ObservableAngular;
  let fixture: ComponentFixture<ObservableAngular>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableAngular]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableAngular);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
