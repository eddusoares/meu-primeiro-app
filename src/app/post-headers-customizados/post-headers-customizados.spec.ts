import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostHeadersCustomizados } from './post-headers-customizados';

describe('PostHeadersCustomizados', () => {
  let component: PostHeadersCustomizados;
  let fixture: ComponentFixture<PostHeadersCustomizados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostHeadersCustomizados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostHeadersCustomizados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
