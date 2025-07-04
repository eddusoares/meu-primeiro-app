import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Saudacao } from './saudacao';

describe('Saudacao', () => {
  let component: Saudacao;
  let fixture: ComponentFixture<Saudacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Saudacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Saudacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
