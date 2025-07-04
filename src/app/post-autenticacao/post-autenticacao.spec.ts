import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostAutenticacao } from './post-autenticacao';

describe('PostAutenticacao', () => {
  let component: PostAutenticacao;
  let fixture: ComponentFixture<PostAutenticacao>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostAutenticacao]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostAutenticacao);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
