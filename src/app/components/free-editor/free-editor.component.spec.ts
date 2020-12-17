import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FreeEditorComponent } from './free-editor.component';

describe('FreeEditorComponent', () => {
  let component: FreeEditorComponent;
  let fixture: ComponentFixture<FreeEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FreeEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FreeEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
