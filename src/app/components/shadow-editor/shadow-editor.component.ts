import { Clipboard } from '@angular/cdk/clipboard';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shadow-editor',
  templateUrl: './shadow-editor.component.html',
  styleUrls: ['./shadow-editor.component.css']
})
export class ShadowEditorComponent implements OnInit {

  shadowHorizontalPixel = 0;
  shadowVerticalPixel = 0;
  shadowRadiusPixel = 28;
  shadowSpreadPixel = 0;
  shadowColor = "rgba(0,0,0,0.4)";

  constructor(private clipBoard:Clipboard) { }

  ngOnInit(): void {
  }

  shadowEdit(){
    let myStyleClass = {
      'box-shadow': `${this.shadowHorizontalPixel}px ${this.shadowVerticalPixel}px ${this.shadowRadiusPixel}px ${this.shadowSpreadPixel}px ${this.shadowColor}`
    };
    return myStyleClass;
  }

  pegarCss() {
    let css = `{ box-shadow: ${this.shadowHorizontalPixel}px ${this.shadowVerticalPixel}px ${this.shadowRadiusPixel}px ${this.shadowSpreadPixel}px ${this.shadowColor} }`;
    this.clipBoard.copy(css);
  }

}
