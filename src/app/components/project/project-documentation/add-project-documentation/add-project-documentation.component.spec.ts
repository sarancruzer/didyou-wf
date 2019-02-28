import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectDocumentationComponent } from './add-project-documentation.component';

describe('AddProjectDocumentationComponent', () => {
  let component: AddProjectDocumentationComponent;
  let fixture: ComponentFixture<AddProjectDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
