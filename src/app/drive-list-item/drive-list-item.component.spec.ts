import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DriveListItemComponent } from './drive-list-item.component';

describe('DriveListItemComponent', () => {
  let component: DriveListItemComponent;
  let fixture: ComponentFixture<DriveListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DriveListItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DriveListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
