import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';
import { Conteudo } from '../../abstracoes/Conteudo';

@Component({
  selector: 'app-text-editor',
  templateUrl: './text-editor.component.html',
  styleUrls: ['./text-editor.component.css']
})
export class TextEditorComponent implements OnInit {

  constructor(private clipBoard: Clipboard) { }

  ngOnInit(): void {
  }

  fontSize = 30;
  fontWeight = 100;
  fontFamilyGroup = [
    'Arial',
    'Verdana',
    'Helvetica',
    'Tahoma',
    'Trebuchet MS',
    'Times New Roman',
    'Georgia',
    'Garamond',
    'Courier New',
    'Brush Script MT',
  ]
  fontFamilyChecked = 'Arial';
  textToEdit = ['Lorem ipsum']
  lineHeight = 1;

  textEdit() {
    let myStyleClass = {
      'font-size.px': this.fontSize,
      'font-weight': this.fontWeight,
      'font-family': this.fontFamilyChecked,
      'line-height': this.lineHeight,
    };
    return myStyleClass;
  }

  pegarCss() {
    let css = `{ font-size: ${this.fontSize}, font-weight: ${this.fontWeight}, font-family: ${this.fontFamilyChecked}, line-height: ${this.lineHeight} }`;
    this.clipBoard.copy(css);
  }

}