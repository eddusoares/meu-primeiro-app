import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperadoresRxjs } from './operadores-rxjs';

describe('OperadoresRxjs', () => {
  let component: OperadoresRxjs;
  let fixture: ComponentFixture<OperadoresRxjs>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperadoresRxjs]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperadoresRxjs);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
