import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadmissisionComponent } from './listadmissision.component';

describe('ListadmissisionComponent', () => {
  let component: ListadmissisionComponent;
  let fixture: ComponentFixture<ListadmissisionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadmissisionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadmissisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
