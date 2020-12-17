import { Component, OnChanges, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Conteudo } from 'src/app/abstracoes/Conteudo';

@Component({
  selector: 'app-lista-opcoes',
  templateUrl: './lista-opcoes.component.html',
  styleUrls: ['./lista-opcoes.component.css']
})
export class ListaOpcoesComponent implements OnInit {

  urlParam: String;

  constructor(private conteudo: Conteudo) { }

  ngOnInit(): void {

  }

  changeCurrentComponent(component) {
    this.conteudo.setCurrentComponent(component);
  };

  verifyMenuOption(option) {
    switch (option) {
      case 'text': {
        this.changeCurrentComponent('text');
      }
      case 'color': {
        this.changeCurrentComponent('color');
      }
      case 'shadow': {
        this.changeCurrentComponent('shadow');
      }
      case 'border': {
        this.changeCurrentComponent('border');
      }
      case 'free-editor': {
        this.changeCurrentComponent('free-editor');
      }
      case '': {
        this.changeCurrentComponent('inicio');
      }
      document.getElementById('toogleSideNav').click();
      return
    }
  }

  isComponentOpen(component){
    let isComponentOpenClass = {
      'border-left': '5px solid green',
      'border-radius': '4px'
    }

    this.urlParam = location.href;
    this.urlParam = this.urlParam.split('/')[4];

    if(component == this.urlParam || this.urlParam == undefined && component == ''){
      return isComponentOpenClass;
    }
  }

}