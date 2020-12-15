import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShadowEditorComponent } from './shadow-editor.component';

describe('ShadowEditorComponent', () => {
  let component: ShadowEditorComponent;
  let fixture: ComponentFixture<ShadowEditorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShadowEditorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShadowEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
