import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageProjectDocumentationComponent } from './manage-project-documentation.component';

describe('ManageProjectDocumentationComponent', () => {
  let component: ManageProjectDocumentationComponent;
  let fixture: ComponentFixture<ManageProjectDocumentationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageProjectDocumentationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageProjectDocumentationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
