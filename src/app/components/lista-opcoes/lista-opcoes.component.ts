import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conteudo } from 'src/app/abstracoes/Conteudo';

@Component({
  selector: 'app-lista-opcoes',
  templateUrl: './lista-opcoes.component.html',
  styleUrls: ['./lista-opcoes.component.css']
})
export class ListaOpcoesComponent implements OnInit {

  parametroDaUrl: String;

  constructor(private conteudo: Conteudo) { }

  ngOnInit(): void {

  }

  trocarDeComponent(component) {
    this.conteudo.setOpcaoLista(component);
  };

  verficiarOpcaoMenu(parametro: String) {
    switch (parametro) {
      case 'text': {
        this.trocarDeComponent('text');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'color': {
        this.trocarDeComponent('color');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'shadow': {
        this.trocarDeComponent('shadow');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'border': {
        this.trocarDeComponent('border');
        document.getElementById('toogleSideNav').click();
        return
      }
      case '': {
        this.trocarDeComponent('inicio');
        document.getElementById('toogleSideNav').click();
        return
      }
    }
  }

}