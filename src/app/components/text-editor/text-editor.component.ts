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
    this.setPageTitle();
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
  textToEdit = ["Lorem Ipsum is simply dummy text of the printing and typesetting industry."]
  lineHeight = 1;
  textColor = "#000000";

  shadowHorizontalPixel = 2;
  shadowVerticalPixel = 2;
  shadowColor = "rgba(255,0,0,1)";

  setPageTitle(){
    document.title = 'CSS Editor | Text';
  }

  textEdit(isChecked) {
    if(isChecked){
      let myStyleClass = {
        'font-size.px': this.fontSize,
        'font-weight': this.fontWeight,
        'font-family': this.fontFamilyChecked,
        'line-height': this.lineHeight,
        'color': this.textColor,
        'text-shadow': `${this.shadowHorizontalPixel}px ${this.shadowVerticalPixel}px ${this.shadowColor}`
      };
      return myStyleClass;
    }else{
      let myStyleClass = {
        'font-size.px': this.fontSize,
        'font-weight': this.fontWeight,
        'font-family': this.fontFamilyChecked,
        'line-height': this.lineHeight,
        'color': this.textColor,
      };
      return myStyleClass;
    }
  }

  pegarCss(isChecked) {
    if(isChecked){
      let css = `font-size: ${this.fontSize};\nfont-weight: ${this.fontWeight};\nfont-family: ${this.fontFamilyChecked};\ncolor: ${this.textColor};\nline-height: ${this.lineHeight};\ntext-shadow: ${this.shadowHorizontalPixel}px ${this.shadowVerticalPixel}px ${this.shadowColor};`;
      this.clipBoard.copy(css);
    }else{
      let css = `font-size: ${this.fontSize};\nfont-weight: ${this.fontWeight};\nfont-family: ${this.fontFamilyChecked};\ncolor: ${this.textColor};\nline-height: ${this.lineHeight};`;
      this.clipBoard.copy(css);
    }
  }

}