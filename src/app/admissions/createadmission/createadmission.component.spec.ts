import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateadmissionComponent } from './createadmission.component';

describe('CreateadmissionComponent', () => {
  let component: CreateadmissionComponent;
  let fixture: ComponentFixture<CreateadmissionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateadmissionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateadmissionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
