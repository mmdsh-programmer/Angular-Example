import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBoxComponent } from './sidebar-box.component';

describe('SidebarBoxComponent', () => {
  let component: SidebarBoxComponent;
  let fixture: ComponentFixture<SidebarBoxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBoxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
