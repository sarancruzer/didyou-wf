import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditProjectDocumentationComponent } from './edit-project-documentation.component';

describe('EditProjectDocumentationComponent', () => {
  let component: EditProjectDocumentationComponent;
  let fixture: ComponentFixture<EditProjectDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditProjectDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditProjectDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
