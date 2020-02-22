import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentDiscussComponent } from './content-discuss.component';

describe('ContentDiscussComponent', () => {
  let component: ContentDiscussComponent;
  let fixture: ComponentFixture<ContentDiscussComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContentDiscussComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContentDiscussComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
