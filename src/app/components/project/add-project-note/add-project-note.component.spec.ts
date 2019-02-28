import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjectNoteComponent } from './add-project-note.component';

describe('AddProjectNoteComponent', () => {
  let component: AddProjectNoteComponent;
  let fixture: ComponentFixture<AddProjectNoteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddProjectNoteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjectNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
