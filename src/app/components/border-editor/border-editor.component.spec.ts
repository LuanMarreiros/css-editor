import { ComponentFixture, TestBed } from '@angular/core/testing';

import { borderEditClassorComponent } from './border-editor.component';

describe('borderEditClassorComponent', () => {
  let component: borderEditClassorComponent;
  let fixture: ComponentFixture<borderEditClassorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ borderEditClassorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(borderEditClassorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
