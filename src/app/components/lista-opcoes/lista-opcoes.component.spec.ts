import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaOpcoesComponent } from './lista-opcoes.component';

describe('ListaOpcoesComponent', () => {
  let component: ListaOpcoesComponent;
  let fixture: ComponentFixture<ListaOpcoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListaOpcoesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaOpcoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
