import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BorderEditorComponent } from './border-editor.component';

describe('BorderEditorComponent', () => {
  let component: BorderEditorComponent;
  let fixture: ComponentFixture<BorderEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BorderEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BorderEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
