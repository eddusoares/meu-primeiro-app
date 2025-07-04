import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostSendFiles } from './post-send-files';

describe('PostSendFiles', () => {
  let component: PostSendFiles;
  let fixture: ComponentFixture<PostSendFiles>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PostSendFiles]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostSendFiles);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
