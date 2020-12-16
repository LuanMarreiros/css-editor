import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conteudo } from 'src/app/abstracoes/Conteudo';

@Component({
  selector: 'app-lista-opcoes',
  templateUrl: './lista-opcoes.component.html',
  styleUrls: ['./lista-opcoes.component.css']
})
export class ListaOpcoesComponent implements OnInit {

  parametroDaUrl: String = location.href;

  constructor(private conteudo: Conteudo) { }

  ngOnInit(): void {

  }

  trocarDeComponent(component) {
    this.conteudo.setOpcaoLista(component);
  };

  verficiarOpcaoMenu(parametro: String) {
    switch (parametro) {
      case 'text': {
        this.parametroDaUrl = 'text';
        this.trocarDeComponent('text');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'color': {
        this.parametroDaUrl = 'color';
        this.trocarDeComponent('color');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'shadow': {
        this.parametroDaUrl = 'shadow';
        this.trocarDeComponent('shadow');
        document.getElementById('toogleSideNav').click();
        return
      }
      case 'border': {
        this.parametroDaUrl = 'border';
        this.trocarDeComponent('border');
        document.getElementById('toogleSideNav').click();
        return
      }
      case '': {
        this.parametroDaUrl = 'inicio';
        this.trocarDeComponent('inicio');
        document.getElementById('toogleSideNav').click();
        return
      }
    }
  }

  isOpen(opcao){
    this.parametroDaUrl = this.parametroDaUrl.replace('http://localhost:4200/css/','');

    let openClass = {
      'border-left': '5px solid green',
      'border-radius': '4px'
    }

    if(opcao == this.parametroDaUrl){
      return openClass;
    }
  }

}