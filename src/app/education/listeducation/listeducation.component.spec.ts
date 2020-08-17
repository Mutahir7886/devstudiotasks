import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeducationComponent } from './listeducation.component';

describe('ListeducationComponent', () => {
  let component: ListeducationComponent;
  let fixture: ComponentFixture<ListeducationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListeducationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
