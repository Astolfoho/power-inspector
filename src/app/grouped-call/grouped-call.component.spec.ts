import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupedCallComponent } from './grouped-call.component';

describe('GroupedCallComponent', () => {
  let component: GroupedCallComponent;
  let fixture: ComponentFixture<GroupedCallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GroupedCallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupedCallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
