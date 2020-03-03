import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarBoxServicesComponent } from './sidebar-box-services.component';

describe('SidebarBoxServicesComponent', () => {
  let component: SidebarBoxServicesComponent;
  let fixture: ComponentFixture<SidebarBoxServicesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SidebarBoxServicesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarBoxServicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
