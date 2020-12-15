import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conteudo } from 'src/app/abstracoes/Conteudo';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.css']
})
export class CssEditorComponent implements OnInit {

  opcaoLista;

  constructor(private conteudo: Conteudo, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      if (this.conteudo.getOpcaoLista()) {
        this.opcaoLista = this.conteudo.getOpcaoLista()
      } else {
        this.verificarParametroUrl();
      }
    }, 300);
  }

  verificarParametroUrl() {
    this.opcaoLista = this.activatedRoute.snapshot.paramMap.get('option');
  }

}