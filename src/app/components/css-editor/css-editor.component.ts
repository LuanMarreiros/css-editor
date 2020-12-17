import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Conteudo } from 'src/app/abstracoes/Conteudo';

@Component({
  selector: 'app-css-editor',
  templateUrl: './css-editor.component.html',
  styleUrls: ['./css-editor.component.css']
})
export class CssEditorComponent implements OnInit {

  currentComponent;
  documentTitle = document.title;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    setInterval(() => {
      this.verifyUrlParam();
    });
  }

  verifyUrlParam() {
    this.currentComponent = this.activatedRoute.snapshot.paramMap.get('option');
  }

}