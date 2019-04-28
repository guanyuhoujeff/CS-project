import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentDrawerComponent } from './student-drawer.component';

describe('StudentDrawerComponent', () => {
  let component: StudentDrawerComponent;
  let fixture: ComponentFixture<StudentDrawerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentDrawerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentDrawerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
