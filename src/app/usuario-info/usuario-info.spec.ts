import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioInfo } from './usuario-info';

describe('UsuarioInfo', () => {
  let component: UsuarioInfo;
  let fixture: ComponentFixture<UsuarioInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UsuarioInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsuarioInfo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
