import { ComponentFixture, TestBed } from '@angular/core/testing';

import { shadowEditClassorComponent } from './shadow-editor.component';

describe('shadowEditClassorComponent', () => {
  let component: shadowEditClassorComponent;
  let fixture: ComponentFixture<shadowEditClassorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ shadowEditClassorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(shadowEditClassorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
