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

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      this.verificarParametroUrl();
    }, 300);
  }

  verificarParametroUrl() {
    this.opcaoLista = this.activatedRoute.snapshot.paramMap.get('option');
  }

}