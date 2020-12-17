import { ComponentFixture, TestBed } from '@angular/core/testing';

import { textEditClassorComponent } from './text-editor.component';

describe('textEditClassorComponent', () => {
  let component: textEditClassorComponent;
  let fixture: ComponentFixture<textEditClassorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ textEditClassorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(textEditClassorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
