import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEducationcompComponent } from './create-educationcomp.component';

describe('CreateEducationcompComponent', () => {
  let component: CreateEducationcompComponent;
  let fixture: ComponentFixture<CreateEducationcompComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateEducationcompComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEducationcompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
