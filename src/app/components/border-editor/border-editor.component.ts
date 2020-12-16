import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-border-editor',
  templateUrl: './border-editor.component.html',
  styleUrls: ['./border-editor.component.css']
})
export class BorderEditorComponent implements OnInit {

  borderColor = "#000000";
  borderPixel = 5;
  borderText = "";
  borderStyle = [
    "dotted",
    "dashed",
    "solid",
    "double",
    "hidden"
  ];
  borderStyleChecked = "solid";
  borderRadius = 0;

  constructor(private clipBoard: Clipboard) { }

  ngOnInit(): void {
    this.setPageTitle();
  }

  setPageTitle(){
    document.title = 'CSS Editor | Border';
  }

  borderEdit(){
    let myStyleClass = {
      'border-color': this.borderColor,
      'border-style': this.borderStyleChecked,
      'border-width.px': this.borderPixel,
      'border-radius.px': this.borderRadius
    };
    return myStyleClass;
  }

  pegarCss() {
    let css = `border:  ${this.borderColor} ${this.borderPixel}px ${this.borderStyleChecked}\n'border-radius': ${this.borderRadius}px`;
    this.clipBoard.copy(css);
  }

}
